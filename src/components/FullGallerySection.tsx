import React, { useState } from 'react';
import { PFA_DATA, PhotoItem } from '../data/pfaData';
import { Filter, Maximize2, X, ChevronLeft, ChevronRight, Play, Edit3, Trash2, Check, Download, Plus, Save } from 'lucide-react';

export const FullGallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>(() => {
    try {
      const saved = localStorage.getItem('pfa_curated_photos');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return PFA_DATA.galleryPhotos;
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [isCurating, setIsCurating] = useState<boolean>(false);
  const [exportedStatus, setExportedStatus] = useState<string>('');

  React.useEffect(() => {
    try {
      localStorage.setItem('pfa_curated_photos', JSON.stringify(photos));
    } catch (e) {}
  }, [photos]);

  const categories = [
    { id: 'all', label: 'All Photos', count: photos.length },
    { id: 'ambulance', label: 'Ambulance Fleet', count: photos.filter(p => p.category === 'ambulance').length },
    { id: 'abc', label: 'ABC Sterilization', count: photos.filter(p => p.category === 'abc').length },
    { id: 'shelter', label: 'Treatment Centre', count: photos.filter(p => p.category === 'shelter').length },
    { id: 'puppies', label: 'Puppies & Foster', count: photos.filter(p => p.category === 'puppies').length },
    { id: 'rescues', label: 'Medical Rescues', count: photos.filter(p => p.category === 'rescues').length },
    { id: 'community', label: 'Community Animals', count: photos.filter(p => p.category === 'community').length }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(p => p.category === selectedCategory);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  // Re-tagging an image
  const handleUpdateCategory = (id: string, newCat: string) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, category: newCat } : p));
  };

  // Updating title
  const handleUpdateTitle = (id: string, newTitle: string) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, title: newTitle } : p));
  };

  // Deleting an unwanted image
  const handleDeletePhoto = (id: string) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
  };

  // Reset to original
  const handleResetPhotos = () => {
    if (window.confirm('Reset all photo categories and deleted images to original?')) {
      setPhotos(PFA_DATA.galleryPhotos);
      localStorage.removeItem('pfa_curated_photos');
    }
  };

  // Export updated JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(photos, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "all_gallery_photos.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    navigator.clipboard.writeText(JSON.stringify(photos, null, 2));
    setExportedStatus('Downloaded & Copied to Clipboard!');
    setTimeout(() => setExportedStatus(''), 4000);
  };

  const handleNextPhoto = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FBF5EE] text-[#443353] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#ECEAED]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-josefin text-xs uppercase tracking-[3px] font-bold text-[#F6B05C]">
                Visual Archive
              </span>
              <div className="h-[1px] w-8 bg-[#F6B05C]"></div>
              <div className="w-1.5 h-1.5 bg-[#F6B05C] rotate-45"></div>
            </div>
            
            <h1 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#443353] mt-1">
              Field Operations Gallery
            </h1>
            
            <p className="text-xs sm:text-sm text-[#6A5C77] mt-1 font-light">
              Displaying {photos.length} curated photographs from PFA Chengalpattu's rescues, clinics, and shelter.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setIsCurating(!isCurating)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-josefin uppercase tracking-wider font-bold transition-all border ${
                isCurating 
                  ? 'bg-[#F6B05C] text-[#443353] border-[#F6B05C] shadow-sm'
                  : 'bg-white text-[#443353] border-[#443353] hover:bg-[#443353] hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isCurating ? 'Exit Re-tagging Mode' : 'Re-tag / Delete Photos'}</span>
            </button>

            {isCurating && (
              <>
                <button
                  onClick={handleExportJSON}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#443353] text-[#F6B05C] text-xs font-josefin uppercase tracking-wider font-bold hover:bg-[#342640] transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Updated List</span>
                </button>

                <button
                  onClick={handleResetPhotos}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-[#6A5C77] border border-[#CBD5C0] text-xs font-josefin uppercase tracking-wider font-semibold hover:bg-gray-100 transition-all"
                  title="Revert back to original photos"
                >
                  <span>Reset All</span>
                </button>
              </>
            )}

            <button
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#443353] text-white text-xs font-josefin uppercase tracking-wider font-bold hover:bg-[#342640] transition-all shadow-xs"
            >
              <Play className="w-3.5 h-3.5 text-[#F6B05C] fill-current" />
              <span>Dispatch Video</span>
            </button>
          </div>
        </div>

        {/* Export Notification Notice */}
        {exportedStatus && (
          <div className="p-3 bg-[#E8F0EA] border border-[#C5DBCB] text-[#2D5A27] text-xs font-semibold rounded-lg flex items-center justify-between">
            <span>{exportedStatus} (Replace `src/data/all_gallery_photos.json` with this file)</span>
            <Check className="w-4 h-4" />
          </div>
        )}

        {/* Re-tagging Mode Banner */}
        {isCurating && (
          <div className="p-4 bg-[#F0EEED] border-l-4 border-[#F6B05C] text-xs text-[#443353] space-y-1">
            <span className="font-bold block uppercase tracking-wider font-josefin">
              Image Curation Mode Active:
            </span>
            <p className="font-light">
              You can change the category tag using the dropdown on each card, or delete unwanted photos by clicking the red trash icon. When finished, click <strong>"Export Updated List"</strong> to download the updated JSON.
            </p>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setVisibleCount(24);
              }}
              className={`px-4 py-2 text-xs font-josefin uppercase tracking-wider font-semibold transition-all shrink-0 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#443353] text-[#F6B05C] shadow-xs'
                  : 'bg-white border border-[#ECEAED] text-[#6A5C77] hover:border-[#443353]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                selectedCategory === cat.id ? 'bg-[#F6B05C] text-[#443353]' : 'bg-[#ECEAED] text-[#443353]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedPhotos.map((photo, idx) => (
            <div
              key={photo.id + idx}
              className="bg-white border border-[#ECEAED] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div
                onClick={() => !isCurating && setActiveLightboxIndex(idx)}
                className={`relative aspect-square overflow-hidden bg-[#EFECE3] ${!isCurating ? 'cursor-pointer' : ''}`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />

                {!isCurating && (
                  <div className="absolute inset-0 bg-[#443353]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5 text-white/90" />
                  </div>
                )}

                <div className="absolute top-2 left-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-[#443353]/90 text-[#F6B05C] px-2 py-0.5 rounded shadow-xs font-josefin">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Editing Controls when in Curating Mode */}
              {isCurating ? (
                <div className="p-2.5 bg-[#FBF5EE] border-t border-[#ECEAED] space-y-2">
                  <select
                    value={photo.category}
                    onChange={(e) => handleUpdateCategory(photo.id, e.target.value)}
                    className="w-full text-[11px] p-1.5 bg-white border border-[#CBD5C0] rounded font-josefin text-[#443353]"
                  >
                    <option value="ambulance">Ambulance Fleet</option>
                    <option value="abc">ABC Sterilization</option>
                    <option value="shelter">Treatment Centre</option>
                    <option value="puppies">Puppies & Foster</option>
                    <option value="rescues">Medical Rescues</option>
                    <option value="community">Community Animals</option>
                  </select>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] text-[#6A5C77] truncate font-mono">#{photo.id}</span>
                    <button
                      type="button"
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="p-1 text-[#ea384c] hover:bg-red-50 rounded"
                      title="Delete this image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-2 bg-white text-center">
                  <p className="text-[11px] text-[#6A5C77] font-light truncate">
                    {photo.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="font-josefin text-xs uppercase tracking-[2px] font-bold px-8 py-3.5 bg-[#443353] text-[#F6B05C] hover:bg-[#342640] transition-colors shadow-xs"
            >
              Load More Photos ({filteredPhotos.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && filteredPhotos[activeLightboxIndex] && (
          <div className="fixed inset-0 z-50 bg-[#443353]/95 backdrop-blur-xs flex items-center justify-center p-4">
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredPhotos[activeLightboxIndex].url}
                alt={filteredPhotos[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain shadow-2xl border-2 border-white/20"
              />

              <div className="text-center text-white mt-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F6B05C] text-[#443353] px-3 py-0.5 inline-block font-josefin">
                  {filteredPhotos[activeLightboxIndex].category}
                </span>
                <h3 className="font-cormorant text-2xl font-normal text-white">
                  {filteredPhotos[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-white/60 font-josefin">
                  Photo {activeLightboxIndex + 1} of {filteredPhotos.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 bg-[#443353]/95 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-black max-w-xl w-full overflow-hidden relative border border-white/20 shadow-2xl">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-4 bg-[#443353] text-white border-b border-white/10">
                <h3 className="font-cormorant text-xl font-bold">Animal Ambulance Field Dispatch</h3>
                <p className="text-xs text-[#F6B05C] font-josefin">Authentic emergency footage from Chengalpattu</p>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  src="https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Video-2026-05-06-at-12.22.06-1.mp4"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

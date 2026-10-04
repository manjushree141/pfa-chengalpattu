import json
import re

with open('site_content.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

with open('all_media_images.json', 'r', encoding='utf-8') as f:
    media_images = json.load(f)

categorized = {
    'ambulance': [],
    'abc': [],
    'shelter': [],
    'puppies': [],
    'rescues': [],
    'community': []
}

# Group all media images
seen = set()
for img in media_images:
    url = img['url']
    if url in seen:
        continue
    seen.add(url)
    
    url_lower = url.lower()
    if any(x in url_lower for x in ['logo', 'icon', 'favicon', 'customer', 'mg.jpg', 'picture-1.png']):
        continue
        
    title = img.get('title', '').replace('-', ' ').title()
    if not title or 'Whatsapp' in title:
        title = 'Field Rescue Operation'

    # Assign category based on date/slug/context
    if any(x in url_lower for x in ['19.35.56', '19.33.31', '19.29.29', '19.30.44', '12.05.20', 'ambulance']):
        cat = 'ambulance'
        title = 'Animal Ambulance Emergency Dispatch'
    elif any(x in url_lower for x in ['10.06.39', '10.06.38', '10.06.40', 'abc']):
        cat = 'abc'
        title = 'Humane ABC Sterilization & Anti-Rabies Drive'
    elif any(x in url_lower for x in ['11.26.22', '11.37.51', '12.47.10', '12.54.01', '13.02.25']):
        cat = 'puppies'
        title = 'Puppy Care & Foster Rehabilitation'
    elif any(x in url_lower for x in ['09.15.56', '09.16.53', '09.31.43', '09.31.44', '09.51.24']):
        cat = 'shelter'
        title = 'Treatment Centre Medical Ward'
    elif any(x in url_lower for x in ['20.05.44', '20.05.45', '20.05.46', '21.40.29']):
        cat = 'rescues'
        title = 'Emergency Rescue & Orthopedic Healing'
    else:
        cat = 'community'
        title = 'Community Animal Care in Chengalpattu'

    categorized[cat].append({
        'id': str(img['id']),
        'title': title,
        'url': url,
        'category': cat,
        'width': img.get('width', 1024),
        'height': img.get('height', 768)
    })

all_items = []
for cat, items in categorized.items():
    print(f'Category {cat}: {len(items)} images')
    all_items.extend(items)

print(f'Total curated images: {len(all_items)}')

with open('src/data/all_gallery_photos.json', 'w', encoding='utf-8') as f:
    json.dump(all_items, f, indent=2)

print('Saved to src/data/all_gallery_photos.json')

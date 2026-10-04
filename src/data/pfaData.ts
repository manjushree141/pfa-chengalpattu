import galleryPhotos from './all_gallery_photos.json';
import founderPortraitArna from '../assets/images/founder-portrait-arna.jpg';
import founderArnaManeka from '../assets/images/founder-arna-maneka.jpg';
import founderAction from '../assets/images/founder-action.jpeg';
import founderField from '../assets/images/founder-field.jpeg';

export interface LinkedInPost {
  id: string;
  author: string;
  authorTitle: string;
  authorAvatar: string;
  date: string;
  category: 'Rescue Story' | 'ABC Drive' | 'Shelter Update' | 'Awareness' | 'Community Drive';
  content: string;
  images: string[];
  likes: number;
  comments: number;
  linkedInUrl: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  actionText: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  url: string;
  category: string;
  width?: number;
  height?: number;
}

export const PFA_DATA = {
  orgName: "People For Animals Chengalpattu",
  shortName: "PFA Chengalpattu",
  tagline: "Hands For A Voiceless Soul.",
  subTagline: "Creating a world of compassion for animals in Chengalpattu & Greater Chennai",
  helpline: "+91 9500118448",
  whatsappNumber: "919500118448",
  emailPrimary: "info@pfachengalpattu.org",
  emailSecondary: "pfachengalpattu@gmail.com",
  address: "Unit in Hiranandani, Egattur, Chennai, Chengalpattu, Tamil Nadu 603103",
  
  constitutionArticle: {
    article: "Article 51A(g)",
    text: "It shall be the fundamental duty of every citizen of India to protect and improve the natural environment including forests, lakes, rivers and wild life, and to have compassion for living creatures."
  },

  founder: {
    name: "Arna Dey",
    role: "Founder & Lead Animal Advocate",
    experience: "5+ Years of On-Ground Rescue, Legal Advocacy & Systemic Reform",
    title: "A Dedicated Voice for the Voiceless",
    quote: "Rescue is the heart of our work, but law is the backbone. I am dedicated to bridging the two to ensure that every animal has a right to a safe life.",
    fatherQuote: "To my beloved dad (Late Tapan Dey), I miss you every day. I hope one day I am worthy of the life you have gifted.",
    intro: "For the past five years, Arna Dey has not just observed the plight of animals—she has lived it. Dedicated to the firm belief that animal welfare is a fundamental duty rather than a choice as mentioned in the Indian Constitution Article 51A(g), Arna Dey has transitioned from on-ground rescue to system-level change, devoting her life to creating a world where animals are treated with dignity, compassion, and delivering justice against the cruelty happening to them.",
    journey: "Her journey began in the trenches of animal rescue, handling cases of severe cruelty, neglect, and rehabilitation. Witnessing the immense suffering of stray and abandoned animals, she quickly realized that rescuing one animal is necessary, but changing the system rescues thousands.",
    academic: "Driven by the need to combat cruelty with legal authority, Arna Dey is a Triple Master’s holder who is currently pursuing her Law degree. She bridges the gap between deep empathy and legal action, specializing in animal rights jurisprudence, policy formulation, and the enforcement of anti-cruelty laws.",
    threePillars: [
      {
        title: "Active Cruelty Handling",
        desc: "Rescuing animals from dangerous situations, on-ground medical intervention, and ensuring perpetrators are legally held accountable."
      },
      {
        title: "Policy Making & Advocacy",
        desc: "Utilizing her legal expertise to advocate for stronger animal protection laws, local municipal tie-ups, and systemic policy reforms."
      },
      {
        title: "Coexistence Education",
        desc: "Promoting harmony between human communities and street animals through education, feeder protection, and awareness."
      }
    ],
    personalMessage: `I have grown up under parents who preached Kindness above everything else. I have seen my father (Late Tapan Dey) going inside a well at night to rescue a dog who had fallen while looking for shelter, struggling till the next day until he chose not to be the passerby who merely watches, but acts in saving a life. Feeding community animals and giving them shelter in need has always been the culture of our household while growing up.

Maneka Gandhi ma’am has always been the inspiration for millions across the world. In a film, Shah Rukh Khan said 'If I get shot no problem, but if the bullet touches a camel, Maneka Gandhi will come.' She has created a legacy that will last for generations. Today, being a part of this organization, I feel fortunate and humbled.

Today, when I see humans capturing every piece of land available and trying to drive animals away from their natural habitat, advocating against community care, it pains my heart. The existing animal protection laws are weak and animal welfare policies are not executed well on the ground. We need to work strategically to bring about sustainable, lasting change. Compassion is not a choice—it is a duty that should be practiced by all and should be part of our education system for a kinder India.`,
    images: [
      {
        url: founderPortraitArna,
        caption: "Arna Dey, Founder & Animal Welfare Legal Advocate"
      },
      {
        url: founderArnaManeka,
        caption: "Arna Dey with Smt. Maneka Gandhi, Animal Welfare Movement Leader"
      },
      {
        url: founderAction,
        caption: "On-ground animal rescue and emergency medical intervention"
      },
      {
        url: founderField,
        caption: "Arna Dey with rescued community companions in Chengalpattu"
      }
    ]
  },

  aboutSummary: `People For Animals Chengalpattu is a branch of one of India's premier animal welfare organizations, operating across Tamil Nadu at the intersection of rescue, rehabilitation, and legal advocacy. 

What sets us apart is not just the scale of our work, but our unwavering consistency. Rescue, rehabilitation, and release has been our core mantra from day one. We believe that true compassion requires structured action: providing emergency medical care, conducting humane birth control drives, and educating communities to foster harmony between humans and animals.`,

  initiatives: [
    {
      id: "ambulance-emergency",
      title: "24/7 Animal Ambulance Transit",
      category: "Emergency Triage",
      badge: "Critical Need",
      price: 1000,
      priceUnit: "per rescue run",
      rating: 5.0,
      reviewsCount: 184,
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-19.35.56.jpeg",
      description: "Dedicated emergency ambulance transit equipped with medical triage and oxygen for critically injured street animals.",
      actionText: "Sponsor Ambulance Run"
    },
    {
      id: "abc-sterilization",
      title: "Humane ABC & Anti-Rabies Surgery",
      category: "Population Health",
      badge: "Scientific Care",
      price: 1500,
      priceUnit: "per sterilization kit",
      rating: 5.0,
      reviewsCount: 320,
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-24-at-10.06.39-3-1024x576.jpeg",
      description: "Sterilization and anti-rabies vaccination drives conducted under AWBI guidelines to humanely manage stray dogs.",
      actionText: "Sponsor Sterilization"
    },
    {
      id: "treatment-ward",
      title: "Medical Ward Post-Op Care",
      category: "Shelter Recovery",
      badge: "Daily Medical",
      price: 2500,
      priceUnit: "monthly care pack",
      rating: 5.0,
      reviewsCount: 96,
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-19.30.44-2-1024x576.jpeg",
      description: "Safe shelter, antiseptic dressings, orthopedic post-op recovery cages, and antibiotics for recovering street animals.",
      actionText: "Sponsor Treatment Ward"
    },
    {
      id: "puppy-foster",
      title: "Puppy & Foster Nutrition Pack",
      category: "Foster & Nursery",
      badge: "Nourishment",
      price: 500,
      priceUnit: "per pup package",
      rating: 5.0,
      reviewsCount: 142,
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-01-at-12.47.10.jpeg",
      description: "Puppy formula, deworming, warm shelter bedding, and nutritious feeding for orphaned litters rescued on streets.",
      actionText: "Sponsor Foster Pack"
    }
  ] as InitiativeItem[],

  asSeenInRealLife: [
    {
      id: "real-1",
      title: "Orthopedic Surgical Recovery",
      location: "Egattur Community Pack",
      tag: "Rescued & Healed",
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-01-at-12.47.10.jpeg",
      duration: "Full Recovery: 3 Weeks"
    },
    {
      id: "real-2",
      title: "Midnight Highway Ambulance Rescue",
      location: "Chengalpattu OMR Corridor",
      tag: "Emergency Dispatch",
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-19.35.56.jpeg",
      duration: "Dispatched in 15 mins"
    },
    {
      id: "real-3",
      title: "Humane ABC Sterilization & Release",
      location: "Navalur Local Body Drive",
      tag: "Vaccinated & Released",
      image: "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-24-at-10.06.39-3-1024x576.jpeg",
      duration: "Rabies Tag #241"
    }
  ],

  galleryPhotos: galleryPhotos as PhotoItem[],

  linkedInUpdates: [
    {
      id: "li-1",
      author: "People For Animals Chengalpattu",
      authorTitle: "Non-Profit Organization • Animal Welfare & Wildlife Protection",
      authorAvatar: "https://pfachengalpattu.org/wp-content/uploads/2026/04/cropped-WhatsApp-Image-2026-04-12-at-16.39.19-1.jpeg",
      date: "October 2026",
      category: "Rescue Story",
      content: `🐾 Successful Emergency Rescue & Recovery in Egattur!

Late last night, our 24/7 ambulance hotline (+91 9500118448) received an urgent call regarding a severely injured community dog stranded near the OMR corridor in Chengalpattu. 

Our ambulance team dispatched immediately, stabilized the patient on site with trauma first-aid, and safely transferred him to our treatment facility. Under the watchful care of our veterinarian and staff, his vitals are stable, his wounds are dressed, and he is recovering peacefully.

Under Article 51A(g) of the Indian Constitution, compassion for living creatures is not an option—it is our fundamental duty. Thank you to our donors and community volunteers who keep our ambulance fueled and running every single night! 💚`,
      images: [
        "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-19.35.56.jpeg",
        "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-01-at-12.47.10.jpeg"
      ],
      likes: 184,
      comments: 32,
      linkedInUrl: "https://www.linkedin.com/company/people-for-animals-chengalpattu/"
    },
    {
      id: "li-2",
      author: "Arna Dey",
      authorTitle: "Founder & Lead Animal Welfare Advocate • PFA Chengalpattu",
      authorAvatar: "https://pfachengalpattu.org/wp-content/uploads/2026/04/cropped-WhatsApp-Image-2026-04-12-at-16.39.19-1.jpeg",
      date: "September 2026",
      category: "ABC Drive",
      content: `Why Animal Birth Control (ABC) is the single most vital pillar of our mission:

Sterilization and anti-rabies vaccination are the only scientific, humane, and court-mandated mechanisms to manage stray dog populations and keep both animals and citizens safe. 

Over the past month, PFA Chengalpattu collaborated closely with local municipal bodies and animal lovers to expand our sterilization capacity. Every vaccinated and neutered street dog returns to their territory healthy, vaccinated, and peaceful.

If you are a community feeder or colony resident looking to organize an ABC drive in your locality, reach out to our coordination team. Let's build humane neighborhoods together!`,
      images: [
        "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-24-at-10.06.39-3-1024x576.jpeg"
      ],
      likes: 247,
      comments: 48,
      linkedInUrl: "https://www.linkedin.com/in/arnadey-pfa/"
    },
    {
      id: "li-3",
      author: "People For Animals Chengalpattu",
      authorTitle: "Non-Profit Organization • Animal Welfare & Wildlife Protection",
      authorAvatar: "https://pfachengalpattu.org/wp-content/uploads/2026/04/cropped-WhatsApp-Image-2026-04-12-at-16.39.19-1.jpeg",
      date: "September 2026",
      category: "Shelter Update",
      content: `🏥 Treatment Centre Recovery Ward Expansion:

Healing broken bones and deep lacerations requires patience, clean sanitized cages, daily medical dressings, and a quiet space free from street dangers.

Our post-operative recovery units in Chengalpattu currently host recovering dogs, puppies, and injured birds. Every kennel is sanitized daily, and each animal receives a high-protein recovery diet along with veterinary checkups.

You can sponsor a recovery cage or donate medicines, antiseptics, and dog food directly to our shelter in Egattur. Your contributions qualify for 100% tax exemption under Section 80G!`,
      images: [
        "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-02-at-12.05.20-2-1024x576.jpeg",
        "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-19.30.44-2-1024x576.jpeg"
      ],
      likes: 129,
      comments: 19,
      linkedInUrl: "https://www.linkedin.com/company/people-for-animals-chengalpattu/"
    },
    {
      id: "li-4",
      author: "People For Animals Chengalpattu",
      authorTitle: "Non-Profit Organization • Animal Welfare & Wildlife Protection",
      authorAvatar: "https://pfachengalpattu.org/wp-content/uploads/2026/04/cropped-WhatsApp-Image-2026-04-12-at-16.39.19-1.jpeg",
      date: "August 2026",
      category: "Community Drive",
      content: `🐾 Article 51A(g) in Action: Youth & Student Volunteer Drive

We welcomed college volunteers from Chengalpattu district for our on-ground shelter maintenance and stray feeding program! 

Witnessing young citizens step up to feed, bathe, and comfort injured rescues is a reminder that compassion is contagious. Our student membership tier (₹500/year) offers young animal lovers direct involvement in rescue activities and legal awareness workshops.

Join our volunteer network today and be the difference!`,
      images: [
        "https://pfachengalpattu.org/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-19.33.31-2-768x1024.jpeg"
      ],
      likes: 165,
      comments: 24,
      linkedInUrl: "https://www.linkedin.com/company/people-for-animals-chengalpattu/"
    }
  ] as LinkedInPost[]
};

export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Frontline Earth Movers",
    legalName: "Frontline Earth Movers (Pvt) Ltd",
    tagline: "Moving Zimbabwe Forward, One Load at a Time",
    description:
      "Frontline Earth Movers is Harare's trusted logistics and earthmoving partner. From heavy haulage and fleet transport to site clearing and earthworks, we deliver the muscle behind Zimbabwe's biggest construction and mining projects. Reliable, on-time, every time.",
    phone: "+263 78 535 9413",
    phoneRaw: "+263785359413",
    whatsappNumber: "263785359413",
    email: "info@frontlineearthmovers.co.zw",
    address: "43 Robson Manyika, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 10,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "300+",
    employees: "45+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "6:00 AM - 5:00 PM" },
      { day: "Saturday", time: "7:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "frontline-earth-movers-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Frontline",
    logoLine2: "Earth Movers",
  },

  hero: {
    badge: "Harare's Premier Logistics & Earthmoving Company",
    titleParts: [
      { text: "WE MOVE " },
      { text: "MOUNTAINS", highlight: true },
      { text: " SO YOU CAN BUILD." },
    ],
    subtitle:
      "Heavy haulage. Earthworks. Fleet logistics. Nine years of delivering raw power and precision to Zimbabwe's most demanding projects.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Our Fleet",
    trustBadge: "300+ Projects Completed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "Heavy logistics truck on highway at golden hour" },
      { url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=85", alt: "Fleet of transport vehicles in logistics yard" },
      { url: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1920&q=85", alt: "Aerial view of earthmoving equipment at work site" },
    ],
  },

  stats: [
    { number: "300+", label: "Projects Delivered" },
    { number: "9+", label: "Years of Operations" },
    { number: "45+", label: "Fleet Vehicles" },
    { number: "100%", label: "Safety Record" },
  ],

  servicesPreview: [
    {
      title: "Heavy Haulage",
      desc: "Abnormal load transport across Zimbabwe's road network. Flatbeds, lowbeds, and side-tippers for every tonnage requirement.",
      icon: "Briefcase",
    },
    {
      title: "Earthmoving & Excavation",
      desc: "Site preparation, bulk earthworks, and precision excavation for construction, mining, and infrastructure developments.",
      icon: "Buildings",
    },
    {
      title: "Fleet Logistics",
      desc: "Dedicated fleet management and scheduled haulage services. Real-time tracking, on-time delivery, every consignment.",
      icon: "Star",
    },
    {
      title: "Site Clearing",
      desc: "Vegetation removal, demolition debris clearance, and grading to prepare your site for foundation work.",
      icon: "Lightbulb",
    },
    {
      title: "Tipper Hire",
      desc: "Sand, stone, gravel, and rubble transport. Single loads or long-term contracts with competitive rates.",
      icon: "Heart",
    },
    {
      title: "Plant Hire",
      desc: "Excavators, TLBs, graders, and rollers available for wet or dry hire. Fully serviced, operator-ready.",
      icon: "Leaf",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Six core capabilities that keep Zimbabwe's biggest projects moving forward.",
    items: [
      {
        title: "Heavy Haulage",
        slug: "heavy-haulage",
        desc: "When standard transport is not enough, Frontline delivers. Our heavy haulage division specialises in abnormal loads, oversized equipment, and high-tonnage consignments across Zimbabwe's road network. From mining machinery to structural steel, we have the flatbeds, lowbeds, and expertise to move it safely and on schedule.",
        features: ["Abnormal Load Permits", "Lowbed Transport", "Flatbed Haulage", "Side-Tipper Services", "Escort Vehicles", "Route Planning"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
      },
      {
        title: "Earthmoving & Excavation",
        slug: "earthmoving-excavation",
        desc: "From the first cut to final grade, our earthmoving division transforms raw land into buildable sites. We deploy excavators, dozers, and graders to handle bulk earthworks, trenching, and precision levelling for residential, commercial, and industrial developments.",
        features: ["Bulk Earthworks", "Trenching", "Foundation Excavation", "Dam Construction", "Road Formation", "Cut & Fill"],
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
      },
      {
        title: "Fleet Logistics",
        slug: "fleet-logistics",
        desc: "Our dedicated logistics arm provides scheduled and on-demand haulage for manufacturers, mines, and construction companies. Every vehicle is GPS-tracked, every driver is vetted, and every delivery is confirmed in real-time.",
        features: ["GPS Tracking", "Scheduled Routes", "On-Demand Dispatch", "Warehouse Distribution", "Cross-Border Transport", "Proof of Delivery"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
      },
      {
        title: "Site Clearing",
        slug: "site-clearing",
        desc: "Before construction begins, the ground must be prepared. Our site clearing teams handle vegetation removal, demolition debris clearance, topsoil stripping, and rough grading to deliver a clean canvas for your project.",
        features: ["Bush Clearing", "Demolition Clearance", "Topsoil Stripping", "Rough Grading", "Rubble Removal", "Stump Extraction"],
        image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80",
      },
      {
        title: "Tipper Hire",
        slug: "tipper-hire",
        desc: "Need material moved? Our fleet of tippers delivers sand, stone, gravel, and building rubble to sites across Harare and beyond. Available for single loads or long-term contracts with competitive per-load and monthly rates.",
        features: ["Sand Delivery", "Stone & Gravel", "Building Rubble", "Single Load Hire", "Contract Rates", "Same-Day Dispatch"],
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
      },
      {
        title: "Plant Hire",
        slug: "plant-hire",
        desc: "Access our fleet of well-maintained construction plant without the capital outlay. Excavators, TLBs, graders, rollers, and compactors available for wet hire (with operator) or dry hire. All machines are serviced and ready to deploy.",
        features: ["Excavator Hire", "TLB Hire", "Grader Hire", "Roller & Compactor", "Wet & Dry Hire", "Operator Supply"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of projects that showcase the scale and reliability of our operations.",
    items: [
      {
        title: "Borrowdale Brooke Earthworks",
        slug: "borrowdale-brooke-earthworks",
        category: "Earthmoving",
        location: "Borrowdale, Harare",
        desc: "120,000 cubic metres of cut-and-fill for a premium residential estate. Completed two weeks ahead of schedule.",
        client: "Private Developer",
        services: ["Bulk Earthworks", "Grading", "Site Preparation"],
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        ],
      },
      {
        title: "Chitungwiza Road Rehabilitation",
        slug: "chitungwiza-road-rehabilitation",
        category: "Logistics",
        location: "Chitungwiza, Zimbabwe",
        desc: "6-month material haulage contract delivering 50,000 tonnes of aggregate for municipal road rehabilitation.",
        client: "Chitungwiza Municipality",
        services: ["Tipper Hire", "Fleet Logistics", "Material Delivery"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
        ],
      },
      {
        title: "Mazowe Mine Access Road",
        slug: "mazowe-mine-access-road",
        category: "Earthmoving",
        location: "Mazowe, Zimbabwe",
        desc: "3km mine access road construction including clearing, formation, and gravel layering in challenging terrain.",
        client: "Mining Consortium",
        services: ["Site Clearing", "Earthmoving", "Road Formation"],
        image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80",
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
        ],
      },
      {
        title: "Southerton Industrial Park",
        slug: "southerton-industrial-park",
        category: "Heavy Haulage",
        location: "Southerton, Harare",
        desc: "Transport and placement of 40-tonne steel structures for a new industrial warehouse complex.",
        client: "Industrial Holdings Ltd",
        services: ["Heavy Haulage", "Lowbed Transport", "Crane Coordination"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
          "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80",
        ],
      },
      {
        title: "Hatcliffe Housing Development",
        slug: "hatcliffe-housing-development",
        category: "Earthmoving",
        location: "Hatcliffe, Harare",
        desc: "Platform preparation for 200-unit housing scheme. Bulk cut-and-fill, storm drainage, and access road formation.",
        client: "National Housing Authority",
        services: ["Bulk Earthworks", "Storm Drainage", "Access Roads"],
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        ],
      },
      {
        title: "Msasa Distribution Centre",
        slug: "msasa-distribution-centre",
        category: "Logistics",
        location: "Msasa, Harare",
        desc: "Long-term logistics contract handling daily distribution runs for a major FMCG manufacturer across Harare.",
        client: "FMCG Manufacturer",
        services: ["Fleet Logistics", "Distribution", "Warehousing Support"],
        image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80",
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Frontline moved 80,000 cubic metres of earth for our Borrowdale project and finished ahead of schedule. Their equipment is well-maintained and their operators are skilled professionals.",
      name: "Tendai Maposa",
      role: "Project Manager, Property Developer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We have used Frontline for three consecutive road projects. Their tipper fleet is reliable, their drivers are professional, and they never miss a delivery window.",
      name: "Grace Nhamo",
      role: "Engineer, Chitungwiza Municipality",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
    {
      text: "The heavy haulage team transported our mining equipment from Beira to Mazowe without a single issue. Frontline handled all the permits and logistics seamlessly.",
      name: "Robert Chimedza",
      role: "Operations Director, Mining Consortium",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Professional, punctual, and competitively priced. Frontline Earth Movers is our go-to for any earthmoving or haulage requirement in Harare.",
      name: "Farai Mutizwa",
      role: "Quantity Surveyor, Construction Firm",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built from the ground up. Trusted to move Zimbabwe forward.",
    story: [
      "Frontline Earth Movers was founded in 2015 with a single tipper truck and a commitment to reliability that set us apart from day one. In an industry where delays cost millions, we made on-time delivery our founding principle.",
      "Today, with a fleet of over 45 vehicles and a team of experienced operators, we serve Zimbabwe's construction, mining, and infrastructure sectors. From a 500-tonne earthworks contract to a single load of building sand, we bring the same professionalism to every job.",
      "Our growth has been driven entirely by repeat business and referrals -- the highest compliment in any industry. When Zimbabwe's most demanding projects need logistics muscle, Frontline answers the call.",
    ],
    values: [
      { title: "On-Time, Every Time", desc: "Delays cost money. We plan meticulously, deploy reliably, and deliver on schedule." },
      { title: "Safety First", desc: "Zero compromise on safety. Every vehicle inspected, every operator certified, every load secured." },
      { title: "Fleet Excellence", desc: "Well-maintained equipment means fewer breakdowns, faster completion, and lower costs for you." },
      { title: "Transparent Pricing", desc: "No hidden charges. Clear quotes, honest timelines, and invoices that match the agreement." },
    ],
    team: [
      {
        name: "Wellington Moyo",
        role: "Managing Director",
        bio: "With over 15 years in logistics and earthmoving, Wellington built Frontline from a single truck into one of Harare's most reliable haulage companies.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      },
      {
        name: "Chenai Dziva",
        role: "Fleet Manager",
        bio: "Chenai oversees maintenance, deployment, and tracking for our entire fleet, ensuring every vehicle is road-ready and every job is resourced.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
      },
      {
        name: "Tapiwa Gondo",
        role: "Operations Coordinator",
        bio: "The logistics brain behind our scheduling. Tapiwa manages job allocation, driver rosters, and client communication.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the engineers, developers, and project managers who trust Frontline.",
    items: [
      { text: "Frontline moved 80,000 cubic metres for our Borrowdale project and finished ahead of schedule. Their equipment is well-maintained and their operators are professionals.", name: "Tendai Maposa", role: "Project Manager, Property Developer", rating: 5 },
      { text: "We have used Frontline for three consecutive road projects. Their tipper fleet is reliable, drivers are professional, and they never miss a delivery window.", name: "Grace Nhamo", role: "Engineer, Chitungwiza Municipality", rating: 5 },
      { text: "The heavy haulage team transported our mining equipment from Beira to Mazowe without a single issue. Frontline handled all permits and logistics seamlessly.", name: "Robert Chimedza", role: "Operations Director, Mining Consortium", rating: 5 },
      { text: "Professional, punctual, and competitively priced. Frontline is our go-to for any earthmoving or haulage requirement.", name: "Farai Mutizwa", role: "Quantity Surveyor, Construction Firm", rating: 5 },
      { text: "They cleared our 5-hectare site in Hatcliffe in under a week. The team was efficient, the machinery was in excellent condition, and the pricing was fair.", name: "James Mungwira", role: "Civil Engineer, NHA", rating: 5 },
      { text: "Frontline's plant hire service saved us from a tight deadline. The excavator arrived on-site within 4 hours of our call.", name: "Patricia Chadya", role: "Site Manager, Construction Co.", rating: 5 },
      { text: "We contracted Frontline for a 6-month aggregate delivery programme. Zero missed deliveries out of 400+ loads. That is exceptional in this market.", name: "Simba Karonga", role: "Procurement Manager, Road Contractor", rating: 5 },
      { text: "Their lowbed service is the best in Harare. We have moved generators, compressors, and even a crane with Frontline without any problems.", name: "Douglas Mhizha", role: "Plant Manager, Mining Company", rating: 5 },
      { text: "Frontline does not just move dirt -- they understand construction timelines. They scheduled their earthworks around our concrete pours perfectly.", name: "Tinashe Chirume", role: "Project Director, Property Developer", rating: 5 },
      { text: "I have worked with many haulage companies in Zimbabwe. Frontline stands out for their communication, reliability, and the condition of their fleet.", name: "Martha Zvobgo", role: "Contracts Manager, Infrastructure Firm", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join the Team",
    heroSubtitle: "If you thrive on hard work, precision, and being part of something that builds nations, we want you.",
    positions: [
      {
        title: "Heavy Vehicle Driver",
        department: "Fleet Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Class 2 licence required. Drive our fleet of tippers and flatbeds on scheduled and on-demand haulage routes.",
      },
      {
        title: "Excavator Operator",
        department: "Plant Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Experienced operator required for earthmoving and excavation projects across the greater Harare area.",
      },
    ],
  },

  contact: {
    heroTitle: "Get a Quote",
    heroSubtitle: "Tell us about your project and we will respond within 24 hours with a competitive proposal.",
    branches: [
      {
        name: "Harare Head Office",
        address: "43 Robson Manyika, Harare, Zimbabwe",
        phone: "+263 78 535 9413",
        email: "info@frontlineearthmovers.co.zw",
      },
    ],
  },

  homeCta: {
    title: "YOUR PROJECT, OUR MUSCLE",
    subtitle: "Every great structure starts with the earth beneath it. Tell us what you need moved, cleared, or delivered -- and we will make it happen.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Frontline! I'd like to discuss a haulage/earthmoving requirement.",
    backgroundImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=85",
  },

  footer: {
    description: "Harare's trusted logistics and earthmoving partner. Heavy haulage, earthworks, and fleet transport since 2015.",
    copyright: "Frontline Earth Movers",
  },
};

export default siteData;

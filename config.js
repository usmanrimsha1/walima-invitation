/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 * File paths are relative so this template works inside /khwahish/ or any folder.
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Muhammad Usman & Rimsha Akbar",
    description:
      "You are warmly invited to celebrate the Walima of Muhammad Usman and Rimsha Akbar.",
  },

  couple: {
    brideInitial: "U",
    groomInitial: "M",
    bride: {
      name: "Muhammad Usman",
      relation: "Daughter of",
      parents: "Muhammad Shahid",
    },
    groom: {
      name: "Rimsha Akbar",
      relation: "Son of",
      parents: "Muhammad Ashraf",
    },
  },

  copy: {
    bismillah: "﷽",
    bismillahTranslation:
      "",
      welcomeSignature: "Mr. & Mrs. Shahid Pervaiz",
    welcomeLine: "With hearts full of gratitude, we invite you to celebrate the Walima of",
    invitation:
      "",
    heroClosing:
      "Join us as we celebrate the beginning of their new life together, and keep them in your duas.",
    welcomeTitle: "A Blessed Beginning",
    welcomeBody:
      "We warmly invite you to join us as we celebrate this beautiful beginning with the love, prayers, and blessings of our families.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can’t wait to celebrate with you.",
    dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2026-12-06T13:00:00+05:00",
    date: "December 6, 2026",
    day: "Sunday",
    time: "07:00 PM",
    timezone: "IST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./intro.mp4",
    introPoster:
      "./intro-placeholder.webp",
    music: "./music-placeholder.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./gallery-01.webp",
        alt: "A softly lit wedding detail",
        caption: "",
      },
      {
        src: "./gallery-02.webp",
        alt: "A joyful wedding celebration",
        caption: "",
      },
      {
        src: "./gallery-03.webp",
        alt: "Elegant wedding florals and table setting",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "1:00 PM",
      title: "Guest Arrival",
      note: "",
    },
    {
      time: "1:30 PM",
      title: "Blessings",
      note: "Family greetings & photographs",
    },
    {
      time: "02:00 PM",
      title: "Lunch",
      note: "A feast shared with love",
    },
  ],

  venue: {
    name: "Viva la Vida",
    address:
      "Garrison Golf And Country Club, Hall #5",
      shortAddress: "Garrison Golf And Country Club, Hall #5",
    // The "?g_st=iw" ending that iPhone sharing adds is removed on purpose:
    // it is what makes the Google Maps app say "Unsupported link".
    mapUrl: "https://maps.app.goo.gl/18V2HMNj1moWHJqz8",
  },

dressCode: {
  title: "Festive Formal",
  description:
    "Traditional or formal attire is encouraged. Sarees, lehengas, anarkalis, sherwanis, kurtas, suits, and formal dresses are all welcome. We kindly ask guests to avoid overly casual attire and white or ivory.",
  swatches: [
    "#7A1F2B",
    "#234638",
    "#C49A56",
    "#7A4968",
    "#31506B",
  ],
},

  preWeddingEvents: [
    {
      name: "Mehendi",
      date: "October 15",
      time: "4:00 PM",
      location: "Bride’s Residence",
      mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
    },
    {
      name: "Qawwali Evening",
      date: "October 17",
      time: "7:00 PM",
      location: "Groom's Residence",
      mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
    },
    {
      name: "Walima",
      date: "October 19",
      time: "7:30 PM",
      location: "Blue Lagoon, ECR, Chennai",
      mapLink: "https://maps.app.goo.gl/VY3FM2kntM26syuJ8",
    },
  ],

  contacts: [
    "0300 8092590",
    "0307 8711286",
  ],

  rsvp: {
    deadline: "Kindly respond by September 15, 2026",
    contact: "For assistance, call +91 98765 43210",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

theme: {
  ivory: "#F7EFE2",       /* warm bridal ivory */
  plum: "#5A4035",        /* deep warm cocoa */
  lavender: "#D8B7A6",    /* muted blush nude */
  mauve: "#B97D6D",       /* dusty rose */
  lilac: "#A8A28A",       /* soft sage taupe */
  champagne: "#B88A45",   /* antique gold */
},
};

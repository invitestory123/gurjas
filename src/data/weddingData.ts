export interface WeddingProgramItem {
  time?: string;
  name: string;
  description?: string;
}

export const weddingData = {
  couple: {
    groom: "Gurjas Singh",
    groomShort: "Gurjas",
    bride: "Shubhpreet Kaur Layal",
    brideShort: "Shubhpreet",
  },
  date: {
    day: "Saturday",
    dayNum: "12",
    month: "December",
    year: "2026",
    displayDate: "12th December, 2026",
    iso: "2026-12-12T17:30:00+05:30",
  },
  venue: {
    name: "Layal & Singh Residence",
    address: "96-F, SBS Nagar, Pakhowal Road, Ludhiana, Punjab - 141013",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=96-F+SBS+Nagar+Pakhowal+Road+Ludhiana+Punjab+141013",
  },
  family: {
    bride: {
      father: "S. Trilochen Singh",
      mother: "S. Manjit Kaur",
      siblings: ["Mohpreet Kaur", "Ajeet Singh Layal"],
    },
    groom: {
      father: "S. Kamaljeet Singh",
      mother: "S. Nirmal Kaur",
      siblings: ["Prabhjot Kaur"],
    },
  },
  program: [
    {
      time: "05:30 PM",
      name: "Guest Arrival",
      description: "Warm welcome with traditional refreshments & blessings",
    },
    {
      time: "06:15 PM",
      name: "Ardaas",
      description: "A sacred prayer to invoke universal blessings of Waheguru Ji",
    },
    {
      time: "07:00 PM",
      name: "Roka Ceremony",
      description: "The auspicious bonding and union of both families",
    },
    {
      time: "07:45 PM",
      name: "Fixing of Marriage Date",
      description: "Announcing the sacred Anand Karaj date with shared joy",
    },
    {
      time: "08:30 PM",
      name: "Dinner & Celebration",
      description: "An evening of lavish Punjabi delicacies, music & togetherness",
    },
  ] as WeddingProgramItem[],
  photos: {
    ekOnkar: "/ek-onkar-gold.png",
    ghibliCouple: "/ghibli-couple-transparent.png",
    familyPhoto: "/family-photo.jpg",
    couplePhoto: "/couple-photo-180.jpg",
    bouquet: "/bouquet.png",
  },
};

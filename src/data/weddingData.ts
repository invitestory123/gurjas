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
    name: "Singh Residence",
    address: "96-F, SBS Nagar, Pakhowal Road, Ludhiana, Punjab - 141013",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=96-F+SBS+Nagar+Pakhowal+Road+Ludhiana+Punjab+141013",
  },
  family: {
    bride: {
      father: "S. Trilochen Singh",
      mother: "Sdn. Manjit Kaur",
      siblings: ["Mohpreet Kaur", "Ajeet Singh Layal"],
    },
    groom: {
      father: "S. Kamaljeet Singh",
      mother: "Sdn. Nirmal Kaur",
      siblings: ["Prabhjot Kaur"],
    },
  },
  contacts: {
    groom: {
      name: "Gurjas",
      phone: "+91 9706047369",
      waNumber: "919706047369",
    },
    bride: {
      name: "Shubhpreet",
      phone: "+91 8077828992",
      waNumber: "918077828992",
    },
  },
  program: [
    {
      time: "6:00 PM",
      name: "Ardaas",
      description: "Seeking the blessings of Waheguruji",
    },
    {
      time: "7:00 PM",
      name: "Roka Ceremony",
      description: "A promise for togetherness forever",
    },
    {
      time: "8:00 PM onwards",
      name: "Followed by Celebration & Dinner",
      description: "An evening of music & togetherness",
    },
  ] as WeddingProgramItem[],
  photos: {
    ekOnkar: "/ek-onkar-gold.png",
    ghibliCouple: "/ghibli-couple-transparent.png",
    familyPhoto: "/family-photo.jpg",
    couplePhoto: "/couple-photo-180.jpg",
    bouquet: "/bouquet.png",
    venue: "/venue-night.jpg",
    diyaLamp: "/diya-lamp.png",
    brideChildhood: "/bride-childhood.jpg",
    groomChildhood: "/groom-childhood.jpg",
  },
};

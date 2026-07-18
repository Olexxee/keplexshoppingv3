import type{ Announcement } from "../../blocks/AnnouncementBar/AnnouncementBar.types";

export const announcements: Announcement[] = [
  {
    id: "delivery",
    message: "🚚 Free Nationwide Delivery",
  },

  {
    id: "payment",
    message: "💳 Secure Online Payments",
  },

  {
    id: "support",
    message: "📞 Customer Support Available",
  },

  {
    id: "new-arrivals",
    message: "✨ Explore Our Latest Collection",

    action: {
      label: "Shop Now",
      href: "/collections/new",
    },
  },
];

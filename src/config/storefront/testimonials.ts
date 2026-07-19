export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface TestimonialsConfig {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Testimonial[];
}

export const testimonials: TestimonialsConfig = {
  eyebrow: "Testimonials",

  title: "Loved by Thousands",

  description: "See what our customers have to say about shopping with us.",

  items: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Verified Customer",
      avatar: "/images/testimonials/sarah.webp",
      rating: 5,
      comment: "Amazing quality products and super fast delivery.",
    },

    {
      id: "2",
      name: "David Smith",
      role: "Entrepreneur",
      avatar: "/images/testimonials/david.webp",
      rating: 5,
      comment: "Customer support is outstanding. Highly recommended.",
    },

    {
      id: "3",
      name: "Grace Williams",
      role: "Designer",
      avatar: "/images/testimonials/grace.webp",
      rating: 5,
      comment: "Beautiful products with premium quality.",
    },
  ],
};

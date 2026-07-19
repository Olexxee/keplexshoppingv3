export interface CTAConfig {
  eyebrow?: string;
  title: string;
  description: string;

  placeholder: string;
  buttonLabel: string;
}

export const cta: CTAConfig = {
  eyebrow: "Stay Connected",

  title: "Never Miss an Update",

  description:
    "Subscribe to receive exclusive offers, new arrivals, and product updates straight to your inbox.",

  placeholder: "Enter your email address",

  buttonLabel: "Subscribe",
};

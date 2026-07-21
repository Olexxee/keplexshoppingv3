export const semantic = {
  background: {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    tertiary: "#F5F5F5",
  },

  surface: {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    tertiary: "#F5F5F5",

    elevated: "#FFFFFF",

    hover: "#F8F8F8",

    overlay: "rgba(17, 24, 39, .45)",
  },

  text: {
    primary: "#111827",
    secondary: "#4B5563",
    muted: "#9CA3AF",
    inverse: "#FFFFFF",
    disabled: "#D1D5DB",
  },

  border: {
    primary: "#E5E7EB",
    secondary: "#D1D5DB",

    hover: "#C89B3C",

    focus: "#2563EB",

    danger: "#DC2626",
  },

  brand: {
    primary: "#C89B3C",
    hover: "#B68A2D",
    subtle: "#F5ECD7",
    contrast: "#FFFFFF",
  },

  interactive: {
    primary: "#C89B3C",
    primaryHover: "#B68A2D",
    primaryActive: "#997224",

    secondary: "#F5F5F5",
    secondaryHover: "#E5E7EB",

    disabled: "#D1D5DB",
  },

  status: {
    success: {
      bg: "#DCFCE7",
      text: "#166534",
      border: "#16A34A",
    },

    warning: {
      bg: "#FEF3C7",
      text: "#92400E",
      border: "#F59E0B",
    },

    danger: {
      bg: "#FEE2E2",
      text: "#991B1B",
      border: "#DC2626",
    },

    info: {
      bg: "#DBEAFE",
      text: "#1D4ED8",
      border: "#2563EB",
    },
  },

  commerce: {
    price: {
      current: "#111827",
      original: "#9CA3AF",
      discount: "#DC2626",
    },

    stock: {
      inStock: "#16A34A",
      lowStock: "#F59E0B",
      outOfStock: "#DC2626",
    },

    rating: {
      active: "#FBBF24",
      inactive: "#D1D5DB",
    },
  },
} as const;

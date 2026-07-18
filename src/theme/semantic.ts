export const semantic = {
  background: {
    primary: "var(--background-primary)",
    secondary: "var(--background-secondary)",
    tertiary: "var(--background-tertiary)",
  },

  surface: {
    primary: "var(--surface-primary)",
    secondary: "var(--surface-secondary)",
    elevated: "var(--surface-elevated)",
  },

  text: {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    muted: "var(--text-muted)",
    inverse: "var(--text-inverse)",
  },

  border: {
    primary: "var(--border-primary)",
    secondary: "var(--border-secondary)",
  },

  brand: {
    primary: "var(--brand-primary)",
    hover: "var(--brand-hover)",
    subtle: "var(--brand-subtle)",
  },

  success: {
    bg: "var(--success-bg)",
    text: "var(--success-text)",
  },

  warning: {
    bg: "var(--warning-bg)",
    text: "var(--warning-text)",
  },

  danger: {
    bg: "var(--danger-bg)",
    text: "var(--danger-text)",
  },
} as const;

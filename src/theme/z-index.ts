export const zIndex = {
  /** Base level for most content */
  base: 0,

  /** Dropdown menus, select dropdowns, etc. */
  dropdown: 10,

  /** Sticky headers, sidebars, sticky elements */
  sticky: 20,

  /** Overlays that sit above sticky elements */
  overlay: 30,

  /** Modals, dialogs, lightboxes */
  modal: 40,

  /** Popovers, tooltips, popup content */
  popover: 50,

  /** Toast notifications, banners, flash messages */
  toast: 60,

  /** Loading spinners, progress bars that need to be on top */
  loading: 70,

  /** Debugging tools, dev tools, inspector overlays */
  debug: 80,

  /** Always on top - crucial system UI */
  top: 90,

  /** Maximum z-index for critical UI */
  max: 100,
} as const;

export type ZIndex = typeof zIndex;

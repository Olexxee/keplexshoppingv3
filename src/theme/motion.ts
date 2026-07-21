export const motion = {
  duration: {
    instant: "0ms",

    fastest: "75ms",

    fast: "150ms",

    normal: "250ms",

    slow: "350ms",

    slower: "500ms",
  },

  easing: {
    linear: "linear",

    standard: "ease",

    smooth: "cubic-bezier(.4,0,.2,1)",

    emphasized: "cubic-bezier(.2,.8,.2,1)",

    bounce: "cubic-bezier(.34,1.56,.64,1)",
  },

  scale: {
    hover: 1.03,

    pressed: 0.98,
  },
} as const;

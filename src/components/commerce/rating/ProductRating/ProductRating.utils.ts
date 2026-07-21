export const clampRating = (value = 0) => Math.max(0, Math.min(5, value));

export const getFilledStars = (value = 0) => Math.floor(clampRating(value));

export const hasHalfStar = (value = 0) => clampRating(value) % 1 >= 0.5;

export const formatPrice = (
  value: number,
  currency = "USD",
  locale = "en-US",
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);

export const getDiscountPercentage = (
  price: number,
  compareAtPrice?: number,
) => {
  if (!compareAtPrice || compareAtPrice <= price) {
    return 0;
  }

  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
};

export const getSavings = (price: number, compareAtPrice?: number) => {
  if (!compareAtPrice || compareAtPrice <= price) {
    return 0;
  }

  return compareAtPrice - price;
};

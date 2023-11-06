export const formatNumber = num => {
  const formattedNumber = num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  return formattedNumber;
};

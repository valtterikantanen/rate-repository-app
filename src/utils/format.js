export const formatNumber = num => {
  const formattedNumber = num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  return formattedNumber;
};

export const formatDate = dateString => {
  const date = new Date(dateString);
  // eslint-disable-next-line no-undef
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date);
};

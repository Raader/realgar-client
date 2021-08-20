export function differenceInDays(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const difference = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(difference / 1000 / 60 / 60 / 24);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

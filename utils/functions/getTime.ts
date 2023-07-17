export default function getTime(timeString: string) {
  const date = new Date(timeString);

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  const trimMonth = month.length == 1 ? ` ${month}` : month;
  const trimday = month.length == 1 ? ` ${day}` : day;

  return `${year}.${trimMonth}.${day}`;
}

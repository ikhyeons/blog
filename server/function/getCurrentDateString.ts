export function getCurrentDateString() {
  const date = new Date();
  const year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  if (String(month).length == 1) month = '0' + month;
  let day = String(date.getDate());
  if (String(day).length == 1) day = '0' + day;

  return `%${year}-${month}-${day}%`;
}

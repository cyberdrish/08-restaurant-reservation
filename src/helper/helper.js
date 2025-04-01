function formatDate() {
  const date = new Date();
  const timeNow = date.toTimeString().slice(0, 5);
  const dateToday = date.toISOString().split("T")[0];

  return { timeNow, dateToday };
}
export default formatDate;

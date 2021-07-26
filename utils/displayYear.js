const date = document.getElementById('date');

const DATE = new Date();
const day = DATE.getDay();
const month = DATE.getMonth();
const year = DATE.getFullYear();

export const reviewDate = `${year}-${month}-${day}`;

date.textContent = year;
export default year;

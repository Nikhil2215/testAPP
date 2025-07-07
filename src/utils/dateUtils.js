export const generateWeekDates = () => {
  // Generate dates from 15 to 21 as shown in the design
  const dates = [];
  const today = new Date();
  
  // Create dates for the week shown in the design (15-21)
  for (let i = 15; i <= 21; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    dates.push({
      date: i,
      dayIndex: date.getDay(),
      fullDate: date,
    });
  }
  
  return dates;
};

export const formatTime = (time) => {
  return time;
};

export const isToday = (date) => {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
};

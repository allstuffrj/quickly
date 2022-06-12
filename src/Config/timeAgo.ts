const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getFormattedDate (
  date: Date,
  prefomattedDate: String = '',
  hideYear: boolean = false,
  displayTime: boolean = true
) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes: any = date.getMinutes().valueOf();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${minutes}`;
  }

  if (prefomattedDate != '') {
    // Today at 10:20
    // Yesterday at 10:20
    if (displayTime) return `${prefomattedDate} at ${hours}:${minutes}`;
    else return `${prefomattedDate}`;
  }

  if (hideYear) {
    // 10. January at 10:20
    if (displayTime) return `${day}. ${month} at ${hours}:${minutes}`;
    else return `${day}. ${month}`;
  }

  // 10. January 2017. at 10:20
  if (displayTime) return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
  else return `${day}. ${month} ${year}`;
}

// --- Main function
const timeAgo = function (dateParam: Date, displayTime = true) {
  if (!dateParam) {
    return null;
  }

  const date: Date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
  const DAY_IN_MS: number = 86400000; // 24 * 60 * 60 * 1000
  let today: Date = new Date();
  let diffTime: number = today.valueOf() - DAY_IN_MS;
  const yesterday = new Date(diffTime);
  let secDiff: number = today.valueOf() - date.valueOf();
  const seconds = Math.round(secDiff / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return 'now';
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return 'about a minute ago';
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, 'Today', false, displayTime); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, 'Yesterday', false, displayTime); // Yesterday at 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, '', true, displayTime); // 10. January at 10:20
  }

  return getFormattedDate(date, '', false, displayTime); // 10. January 2017. at 10:20
};

export default timeAgo;

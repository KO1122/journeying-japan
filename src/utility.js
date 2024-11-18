function getTimeInMilliSecs(dateString) {
  return new Date(dateString).getTime();
}

function getTimeDifference(createdDateString) {
  const MIN = 60;
  const HOUR = 60 * MIN;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = (52 * WEEK) / 12;
  const YEAR = 12 * MONTH;
  const DECADE = 10 * YEAR;

  // In milliseconds elapsed since the epoch
  const curDate = Date.now();
  const createdDate = getTimeInMilliSecs(createdDateString);
  const secondDiff = (curDate - createdDate) / 1000;

  if (secondDiff < MIN) {
    return Math.floor(secondDiff) + " seconds ago";
  } else if (secondDiff < HOUR) {
    if (secondDiff < 2 * MIN) return "1 minute ago";
    return Math.floor(secondDiff / MIN) + " minutes ago";
  } else if (secondDiff < DAY) {
    if (secondDiff < 2 * HOUR) return "1 hour ago";
    return Math.floor(secondDiff / HOUR) + " hours ago";
  } else if (secondDiff < WEEK) {
    if (secondDiff < 2 * DAY) return "1 day ago";
    return Math.floor(secondDiff / DAY) + " days ago";
  } else if (secondDiff < MONTH) {
    if (secondDiff < 2 * WEEK) return "1 week ago";
    return Math.floor(secondDiff / WEEK) + " weeks ago";
  } else if (secondDiff < YEAR) {
    if (secondDiff < 2 * MONTH) return "1 month ago";
    return Math.floor(secondDiff / MONTH) + " months ago";
  } else if (secondDiff < DECADE) {
    if (secondDiff < 2 * YEAR) return "1 year ago";
    return Math.floor(secondDiff / YEAR) + " years ago";
  }
}

export { getTimeInMilliSecs, getTimeDifference };

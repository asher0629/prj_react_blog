import moment from "moment";

export function formatTime(date) {
  return moment(date).format("YYYY-MM-DD hh:mm:ss");
}

export function getShortenedString(val, limit) {
  if(val.length > limit) {
    return val.slice(0, limit) + "..."
  } else {
    return val
  }
}
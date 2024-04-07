import moment from "moment";

export function formatTime(date) {
  return moment(date).format("YYYY-MM-DD hh:mm:ss");
}

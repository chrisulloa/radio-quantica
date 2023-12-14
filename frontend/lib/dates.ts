import { format } from "fecha";

export function changeTimezone(date: Date, ianatz: string) {
  var invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: ianatz,
    })
  );

  var diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() - diff);
}

export function formatShowDate(date: string) {
  const dt = changeTimezone(new Date(date), "UTC");
  return format(dt, "MMMM Do YYYY");
}

export function formatShortShowDate(date: string) {
  const dt = changeTimezone(new Date(date), "UTC");
  return format(dt, "MMM Do YYYY");
}

export function formatCompactShowDate(date: string) {
  const dt = changeTimezone(new Date(date), "UTC");
  return format(dt, "MM.DD.YYYY");
}

// Dates are stored as 'YYYY-MM-DD'; noon UTC keeps them on the right day everywhere.
const toDate = (iso: string) => new Date(`${iso}T12:00:00Z`);

const fmt = (iso: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', ...options }).format(toDate(iso));

export const weekday = (iso: string) => fmt(iso, { weekday: 'long' });
export const weekdayShort = (iso: string) => fmt(iso, { weekday: 'short' });
export const dayNumber = (iso: string) => fmt(iso, { day: 'numeric' });
export const monthShort = (iso: string) => fmt(iso, { month: 'short' });
export const longDate = (iso: string) => fmt(iso, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
export const shortDate = (iso: string) => fmt(iso, { weekday: 'short', day: 'numeric', month: 'short' });

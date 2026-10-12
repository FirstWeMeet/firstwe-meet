// Add new nights here. `date` is the local date in Rotterdam (YYYY-MM-DD).
// Set `time` once you know it, e.g. '20:00'.

export type DateNight = {
  date: string;
  time?: string;
  label?: string;
};

export const nights: DateNight[] = [
  { date: '2026-12-10', label: 'Opening night (try-out)' },
];

export const scheduleNote =
  'After the opening night we host a new night roughly every two weeks. New dates are announced on Instagram and TikTok first.';

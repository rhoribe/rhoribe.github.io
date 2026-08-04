export const isYearMonth = (value: string) => /^\d{4}-(0[1-9]|1[0-2])$/.test(value);
export const formatYearMonth = (value: string) => {
  if (!isYearMonth(value)) throw new Error(`Invalid year-month: ${value}`);
  const [year, month] = value.split("-");
  return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Number(month) - 1]} ${year}`;
};
export const formatRange = (start: string, end?: string, current = false) =>
  `${formatYearMonth(start)} – ${current ? "Present" : formatYearMonth(end ?? start)}`;

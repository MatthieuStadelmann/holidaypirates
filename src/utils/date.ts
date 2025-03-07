/**
 * Formats a date string into German date format (DD.MM.YYYY)
 * @param {string} date - The date string to format (any format accepted by Date constructor)
 * @returns {string} The formatted date string in DD.MM.YYYY format
 * @example
 * formatDate("2024-03-20") // returns "20.03.2024"
 */
export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};

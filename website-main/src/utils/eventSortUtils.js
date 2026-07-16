export const parseEventDate = (dateStr, year) => {
  if (!dateStr || !year) return new Date(0);
  let cleanDate = dateStr.toString();
  // Handle ranges like "26–31 December" by taking the end date
  if (cleanDate.includes('–')) cleanDate = cleanDate.split('–')[1].trim();
  if (cleanDate.includes('-')) cleanDate = cleanDate.split('-')[1].trim();
  
  const parsed = new Date(`${cleanDate} ${year}`);
  // fallback if Invalid Date
  return isNaN(parsed.getTime()) ? new Date(0) : parsed;
};

/**
 * Sorts events by newest first, takes the top 5, and reorders them symmetrically:
 * [Rank 5, Rank 3, Rank 1, Rank 2, Rank 4]
 * so that the newest event (Rank 1) is in the center slot (index 2).
 */
export const getSymmetricCenterReorderedEvents = (events) => {
  const sorted = [...events].sort((a, b) => parseEventDate(b.date, b.year).getTime() - parseEventDate(a.date, a.year).getTime());
  
  if (sorted.length < 5) {
    return sorted; // Fallback if less than 5 events exist
  }
  
  return [
    sorted[4], // Rank 5
    sorted[2], // Rank 3
    sorted[0], // Rank 1 (Newest)
    sorted[1], // Rank 2
    sorted[3]  // Rank 4
  ];
};

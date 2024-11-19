
/**
 * Formats a given date into a human-readable string (e.g., "January 1, 2024").
 * 
 * @param {Date|string} date - The date to be formatted.
 * @returns {string} - The formatted date string.
 */


export const formatDate = (date) => {  
  const parseDate = new Date(date);    // Ensure the input is a Date object
  if(isNaN(parseDate)){                  // Check if the date is valid
    throw new Error("Invalid date");
  }


  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return parseDate.toLocaleDateString('en-US', options);
}
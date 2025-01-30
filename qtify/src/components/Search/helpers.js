// src/helpers/helpers.js
export const truncate = (str, num) => {
    if (!str) return ""; // Handle null or undefined input
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
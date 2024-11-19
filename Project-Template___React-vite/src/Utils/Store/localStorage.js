// src/utilities/storage/localStorage.js

export const saveToLocalStorage = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);  // Convert value to JSON string
    localStorage.setItem(key, jsonValue);      // Save to localStorage
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;  // Parse JSON back to original data
  } catch (error) {
    console.error('Error retrieving from localStorage', error);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);  // Remove item from localStorage
  } catch (error) {
    console.error('Error removing from localStorage', error);
  }
};

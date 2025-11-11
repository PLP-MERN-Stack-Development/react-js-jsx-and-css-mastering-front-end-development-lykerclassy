import { useState, useEffect } from 'react';

// This function helps get the initial value from localStorage
// or returns the provided initialValue if nothing is found.
function getSavedValue(key, initialValue) {
  try {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
  } catch (error) {
    console.error("Error parsing localStorage:", error);
  }

  // Support for initialValue being a function
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}


function useLocalStorage(key, initialValue) {
  // Use 'getSavedValue' to set the initial state
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // Use 'useEffect' to save the value to localStorage
  // whenever the 'value' state changes.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, value]); // Re-run only if the key or value changes

  return [value, setValue];
}

export default useLocalStorage;
/**
 * Extracts a human-readable error message from various types of error objects,
 * specifically targeting Axios responses.
 *
 * @param {Error|Object} error - The error object (usually from a try/catch block)
 * @param {string} fallbackMessage - Message to use if nothing else is found
 * @returns {string} Clean, readable error message
 */
export const getErrorMessage = (error, fallbackMessage = 'An unexpected error occurred. Please try again.') => {
  // If it's an Axios error with a response from our backend
  if (error?.response?.data) {
    // Check if backend sent an array of validation errors
    if (Array.isArray(error.response.data.errors)) {
      return error.response.data.errors.map((e) => e.msg || e.message).join(', ');
    }
    
    // Check if backend sent a generic message string
    if (error.response.data.message) {
      return error.response.data.message;
    }
    
    // Check if backend sent an error property
    if (error.response.data.error) {
      return error.response.data.error;
    }
  }

  // If it's a network error (no response)
  if (error?.request) {
    return 'Unable to connect to the server. Please check your internet connection.';
  }

  // Standard JS Error object
  if (error?.message) {
    return error.message;
  }

  // Fallback
  return fallbackMessage;
};

export default getErrorMessage;

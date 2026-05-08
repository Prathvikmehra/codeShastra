import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-DUMMY12345'; // Dummy ID

// Initialize analytics (placeholder)
export const initAnalytics = () => {
  console.log(`[Analytics] Initialized with ID: ${GA_TRACKING_ID}`);
};

// Log a page view
export const logPageView = (path) => {
  console.log(`[Analytics] Page View: ${path}`);
  // In a real app: window.gtag('config', GA_TRACKING_ID, { page_path: path });
};

// Log a custom event
export const logEvent = (action, category, label, value) => {
  console.log(`[Analytics] Event: ${action}`, { category, label, value });
  // In a real app: window.gtag('event', action, { event_category: category, ... });
};

// Hook to automatically track page views based on route changes
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);
};

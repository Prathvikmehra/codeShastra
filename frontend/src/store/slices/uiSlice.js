import { createSlice } from '@reduxjs/toolkit';
import { local } from '@/utils/storage';

const THEME_KEY = 'cs_theme';
const savedTheme = local.get(THEME_KEY);

/**
 * uiSlice — UI / Presentation State
 *
 * State shape:
 *   theme        — 'light' | 'dark'
 *   globalLoader — full-screen loading overlay flag
 *   sidebarOpen  — dashboard sidebar open/closed state
 */
const initialState = {
  theme: savedTheme ?? 'light',
  globalLoader: false,
  sidebarOpen: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      local.set(THEME_KEY, state.theme);
    },

    setTheme(state, action) {
      state.theme = action.payload;
      local.set(THEME_KEY, state.theme);
    },

    setGlobalLoader(state, action) {
      state.globalLoader = action.payload;
    },

    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setSidebarOpen(state, action) {
      state.sidebarOpen = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  setGlobalLoader,
  toggleSidebar,
  setSidebarOpen,
} = uiSlice.actions;

// ── Selectors ──
export const selectTheme = state => state.ui.theme;
export const selectIsDark = state => state.ui.theme === 'dark';
export const selectGlobalLoader = state => state.ui.globalLoader;
export const selectSidebarOpen = state => state.ui.sidebarOpen;

export default uiSlice.reducer;

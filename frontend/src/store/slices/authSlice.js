import { createSlice } from '@reduxjs/toolkit';
import { setToken, setUser, clearAuthData, getToken, getUser } from '@/utils/storage';

/**
 * authSlice — Authentication State
 *
 * State shape:
 *   user          — logged-in user object (null if unauthenticated)
 *   token         — JWT string
 *   isAuthenticated — boolean
 *   role          — 'student' | 'mentor' | 'admin' | null
 *   loading       — async operation in progress
 *   error         — last auth error message
 */
const initialState = {
  user: getUser(),
  token: getToken(),
  isAuthenticated: !!getToken(),
  role: getUser()?.role ?? null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.role = user.role;
      state.loading = false;
      state.error = null;
      setToken(token);
      setUser(user);
    },

    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
      state.loading = false;
      state.error = null;
      clearAuthData();
    },

    setAuthLoading(state, action) {
      state.loading = action.payload;
    },

    setAuthError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    clearAuthError(state) {
      state.error = null;
    },

    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
      setUser(state.user);
    },
  },
});

export const {
  loginSuccess,
  logout,
  setAuthLoading,
  setAuthError,
  clearAuthError,
  updateUser,
} = authSlice.actions;

// ── Selectors ──
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectRole = state => state.auth.role;
export const selectAuthLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;

export default authSlice.reducer;

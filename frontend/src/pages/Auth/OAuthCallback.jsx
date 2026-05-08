import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/store/slices/authSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import api from '@/services/api';

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      navigate('/login?error=OAuth login failed. Please try again.');
      return;
    }

    if (token) {
      // Store token and fetch user profile
      localStorage.setItem('token', token);

      api.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          const user = {
            id: res.data._id,
            name: res.data.name,
            email: res.data.email,
            avatar: res.data.avatar,
            role: res.data.role || 'student',
          };
          dispatch(loginSuccess({ user, token }));
          navigate('/dashboard');
        })
        .catch(() => {
          localStorage.removeItem('token');
          navigate('/login?error=Failed to fetch user profile.');
        });
    } else {
      navigate('/login?error=No token received from OAuth provider.');
    }
  }, [dispatch, navigate, searchParams]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap={2}>
      <CircularProgress color="primary" />
      <Typography variant="body1" color="text.secondary">
        Completing sign-in…
      </Typography>
    </Box>
  );
};

export default OAuthCallback;

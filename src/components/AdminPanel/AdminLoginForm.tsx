import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useAdminStore } from '../../store/adminStore';
import admins from '../../data/admins.json';

export const AdminLoginForm = () => {
  const { login } = useAdminStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const admin = admins.find(
      (a) => a.username === username && a.password === password
    );
    if (admin) {
      login();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={10}>
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h6" mb={2}>Admin Login</Typography>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">{error}</Typography>
        )}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

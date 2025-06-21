import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/92/90/56/360_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg)',
        backgroundSize: 'cover',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={5} sx={{ padding: 10, width: 300 }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2609/2609282.png" // Place this image in the public folder
          alt="Contact Book"
          style={{ width: '100px', marginBottom: '20px' }}
        />
        <Typography variant="h5" align="center" gutterBottom>
          LOGIN PAGE
        </Typography>
        
        <TextField label="Username" type="text" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        
        <Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
          LOGIN
        </Button>
        
        <Typography align="center" sx={{ my: 2 }}>OR</Typography>
        
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          CREATE ACCOUNT
        </Button>
      </Paper>
    </Box>
  );
};

export default Login
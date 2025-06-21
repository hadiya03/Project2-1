import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
     <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(data:image/jpeg;base64,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)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={5} sx={{ padding: 10, width: 300 }}>
        <Typography variant="h5" align="center" gutterBottom>
          SIGNUP PAGE
        </Typography>
        
        <TextField label="Name" type="text" fullWidth margin="normal" />
        <TextField label="Address" type="text" fullWidth margin="normal" />
        <TextField label="Phone" type="text" fullWidth margin="normal" />
        <TextField label="E-mail" type="text" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        
        <Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
          SIGNIN
        </Button>
      </Paper>
    </Box>
  );
};
  

export default Signup
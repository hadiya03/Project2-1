import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'80vh',
      flexDirection:'column',
      gap:'1rem'
    }}>
     <div>
        <TextField label="Name" variant="filled" /> &nbsp;&nbsp;
        <TextField label="phone no" variant="filled" /> &nbsp;&nbsp;
        <TextField label="E-mail" variant="filled" /> &nbsp;&nbsp;
        <Button variant="contained" color="secondary" >ADD</Button>
    </div>
    </div>
  )
}

export default Add
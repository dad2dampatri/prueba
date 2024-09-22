import React from 'react'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid2'

import { useState } from 'react'
import './App.css'
function App() {
  
  
  
  return (
   
    <Grid container>
      <Grid size={{xs: 4, sm: 2}} spacing={2}>
        <Button variant='contained' fullWidth>1</Button>
      </Grid>
      <Grid size={4}>
        <Button variant='contained' fullWidth>2</Button>
      </Grid>
      <Grid size={4}>
        <Button variant='contained' fullWidth>3</Button>
      </Grid>

    </Grid>
   

    

  )
}

export default App

/*<Stack direction={{xs: 'column', sm: 'row', md: 'column'}} spacing={2}>
            <h5>1</h5>
            <h5>2</h5>
            <h5>3</h5>
      
    </Stack>

/*
<Stack direction='row' spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
      
      <Typography variant='h5'>Soy un {datos.animal} y vivo feliz</Typography>
      //<Avatar src={datos.imageUrl} alt='gato' style={{width: datos.imageSize, height: datos.imageSize}}> </Avatar>
      <Avatar src={datos.imageUrl} alt='gato' sx={{width: datos.imageSize, height: datos.imageSize}}> </Avatar>
      <Button variant='contained' onClick={handleClick} sx={{color: 'orange', backgroundColor: 'white'}}>
        Me has hecho {count} rascaditas
      </Button>
    </Stack>
*/
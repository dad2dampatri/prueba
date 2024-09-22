import React from 'react'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import { useState } from 'react'
import './App.css'
function App() {
  
  
  const [count, setCount] = useState(0)
  const datos = {
    animal: 'gato',
    imageUrl: '/cat-4189697_640.jpg',
    imageSize: 150,
  }

  function handleClick(){
    setCount(count+1)
   
  }

  return (
   <div>
    <Stack direction={{xs: 'column', sm: 'row', md: 'column'}} spacing={{xs: 1, sm:2, md:8}} sx={{ alignItems: 'center', justifyContent: 'center' }}>
      
      <Typography variant='h5'>Soy un {datos.animal} y vivo feliz</Typography>
      {/*<Avatar src={datos.imageUrl} alt='gato' style={{width: datos.imageSize, height: datos.imageSize}}> </Avatar>*/}
      <Avatar src={datos.imageUrl} alt='gato' sx={{width: datos.imageSize, height: datos.imageSize}}> </Avatar>
      <Button variant='contained' onClick={handleClick} sx={{color: '#b0ffff', backgroundColor: '#d40000'}}>
        Me has hecho {count} rascaditas
      </Button>
    </Stack>
    </div>
  )
}

export default App

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
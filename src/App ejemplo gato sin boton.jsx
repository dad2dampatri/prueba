
import React from 'react'
import './App.css'
import Button from '@mui/material/Button'

function App() {
  
  
  const datos = {
    animal: 'gato',
    imageUrl: '/cat-4189697_640.jpg',
    imageSize: 150,
  }

  
  return (
    <>
      <h1>Soy un {datos.animal} y vivo feliz</h1>
      <img className='avatar' src={datos.imageUrl} alt='imagen' style={{width: datos.imageSize, height: datos.imageSize}} />
      <Button variant='contained'>contained</Button>
      <Button variant='text'>text</Button>
      <Button variant='outlined' size='large'>outlined</Button>

    </>
  )
}

export default App

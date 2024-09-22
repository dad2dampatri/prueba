import React from 'react'
import { useState } from 'react'
import './App.css'
function App() {
  
  //const [miau, setMiau] = useState('miau ')
  const [count, setCount] = useState(0)
  const datos = {
    animal: 'gato',
    imageUrl: '/cat-4189697_640.jpg',
    imageSize: 150,
  }

  function handleClick(){
    setCount(count+1)
   // setMiau(miau + 'miau ')
   // alert(miau)
    //alert('¡Me picaste!' + {count}')
  }

  return (
    <>
      <h1>Soy un {datos.animal} y vivo feliz</h1>
      <img className='avatar' src={datos.imageUrl} alt='imagen' style={{width: datos.imageSize, height: datos.imageSize}} />
      <button onClick={handleClick}>
        Me has hecho {count} rascaditas
      </button>
    </>
  )
}

export default App

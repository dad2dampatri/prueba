import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  function handleClick(){
    setCount(count+1)
  }

  return (
        
    <button onClick={handleClick}>
        Me picaste {count} veces
    </button>
    
  )
}

export default App

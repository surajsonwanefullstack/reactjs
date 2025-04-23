// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
const [color,setColor] = useState("blue")
useEffect(()=>{
  document.body.style.backgroundColor=color
},[color])
useEffect(()=>{
  document.body.style.backgroundColor=color
},[])


  return (
    <div className=' flex justify-around items-center gap-2.5'>
     <button onClick={()=>setColor("cyan")}>Cyan</button>
     <button onClick={()=>setColor("pink")}>Pink</button>
     <button onClick={()=>setColor("red")}>Red</button>

    </div>
  )
}

export default App

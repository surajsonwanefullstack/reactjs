// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

import React from 'react'
import Converter from './components/Converter'

function App() {
  return (
    <div
    className='
    text-3xl font-bold text-shadow-cyan-200
    '
    >
      <Converter />
    </div>
  )
}

export default App

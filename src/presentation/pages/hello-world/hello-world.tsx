import React, { useState } from 'react'
import reactLogo from '@/presentation/assets/react.svg'
import viteLogo from '/vite.svg'
import './hello-world.css'

function HelloWorld (): React.JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 aria-label='heading'>Hello World!</h1>
      <div className="card">
        <button aria-label='counter' onClick={() => { setCount((count) => count + 1) }}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default HelloWorld

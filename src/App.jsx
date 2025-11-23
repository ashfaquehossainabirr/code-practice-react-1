import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incrementFunc() {
    setCount(count + 1)
  }

  const decrementFunc = () => {
    if(count <= 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="box">
        <div className="countDisplay">
          <p>Count: { count }</p>
        </div>

        <div className="btns">
          <button className="incrementBtn" onClick={ incrementFunc }>+</button>
          <button className="decrementBtn" onClick={ decrementFunc }>-</button>
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'
import "./App.css"
import Counter from './pages/Counter'
import StudentData from './components/StudentData'

function App() {
  return (
    <>
      <div className="Wrapper">
        <h1>Hello World!</h1>
        <Counter />

        {/* Students Data */}
        <StudentData name="Abir Mamu" age={ 26 } isStudent={ true } />
        <StudentData name="Nahid Usha" age={ 24 } isStudent={ true } />
      </div>
    </>
  )
}

export default App
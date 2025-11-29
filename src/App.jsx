import React from 'react'
import "./App.css"
import Counter from './pages/Counter'
import StudentData from './components/StudentData'
import UserGreeting from './components/userGreeting'

function App() {
  return (
    <>
      <div className="Wrapper">
        <h1>Hello World!</h1>
        <Counter />

        {/* Students Data */}
        <StudentData name="Abir Mamu" age={ 26 } isStudent={ true } />
        <StudentData name="Nahid Usha" age="24" isStudent={ true } />

        <UserGreeting name="Abir" isLoggedIn={ false }/>
      </div>
    </>
  )
}

export default App
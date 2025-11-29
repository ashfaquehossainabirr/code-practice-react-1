import React from "react"

const UserGreeting = (data) => {
    return (data.isLoggedIn ? <h2 className="welcome-msg">Welcome { data.name }!</h2> : 
                      <h2 className="logout">Please login to continue...</h2>
    )
}

export default UserGreeting
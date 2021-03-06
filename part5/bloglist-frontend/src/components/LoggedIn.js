import React from 'react'

const LoggedIn = ({ user }) => {

  const handleLogout = event => {
    event.preventDefault()
    window.localStorage.clear()
  }

  return(
    <div>
      <form onSubmit={handleLogout}>
        {user.name} logged in
        <button type="submit">logout</button>
      </form>
    </div>
  )
}

export default LoggedIn
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'

export default function Home({ component: Component, user, redirectPath, ...rest }) {
  return (
    
    <Route {...rest} render={(props) => {
      {
        if (user) {
          return <NavBar loggedInUser={user} {...props} />
        } else {
          return <Redirect to={{ pathname: redirectPath }} />
        }
      }
          
    }} />

  )
}

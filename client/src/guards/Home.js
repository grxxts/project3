import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import TwitterContainer from '../components/Twitter/TwitterContainer'
import TwitchContainer from '../components/Twitch/TwitchContainer'

export default function Home({ component: Component, user, redirectPath, ...rest }) {


  
  

  return (

    <Route {...rest} render={(props) => {
      {
        if (user) {
          return <React.Fragment><NavBar loggedInUser={user} {...props} />
            <div className="generalContainer">
              <TwitterContainer></TwitterContainer>
              <TwitchContainer></TwitchContainer>
            </div>
          </React.Fragment>


        } else {
          return <Redirect to={{ pathname: redirectPath }} />
        }
      }

    }} />

  )
}

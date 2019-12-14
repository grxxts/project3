import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import TwitterContainer from '../components/Twitter/TwitterContainer'
import TwitchContainer from '../components/Twitch/TwitchContainer'
import YouTubeContainer from '../components/YouTube/YouTubeContainer'
import DisplayerYT from '../components/DisplayerYT/DisplayerYT'
import TwitchDisplayer from '../components/TwitchDisplayer/TwitchDisplayer'

export default function Home({ component: Component, user, redirectPath, ...rest }) {





  return (

    <Route {...rest} render={(props) => {
      {
        if (user) {
          return <React.Fragment><NavBar loggedInUser={user} {...props} />
            <div className="generalContainer">
              <div className="YoutubeContainerStyle">
              <TwitchDisplayer></TwitchDisplayer>
              <YouTubeContainer></YouTubeContainer>
             
              </div>
              <div className="TwitterContainerStyle">
              <TwitterContainer></TwitterContainer>
              </div>
              <div className="TwitchContainerStyle">
              {/* <TwitchContainer></TwitchContainer> */}
              </div>
              <div>
                
              </div>
            
            </div>
          </React.Fragment>
        } else {
          return <Redirect to={{ pathname: redirectPath }} />
        }
      }

    }} />

  )
}

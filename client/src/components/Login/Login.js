import React, { Component } from 'react'

import AuthService from '../../services/AuthService';
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: '',
    password: ''
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }
  handleLogin = (e) => {
    const { setUser, history } = this.props;
    e.preventDefault()
    this.authService.login(this.state)
      .then(
        (user) => {
          setUser(user)
          history.push("/home")
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {
    const { username, password } = this.state;
    return (

      <div className="parentContainer">
        {/* <div>
          <img className="login-img" src = "https://www.laguiadelvaron.com/wp-content/uploads/2019/01/gamer_headset_screen_playing_game_tv-min.jpg"></img>
        </div> */}
        <div className="loginContainer">
          <div className="loginElements">
            <div className="loginTitle">
            <h1>Login</h1>
            </div>
            <form onSubmit={this.handleLogin}>
              <div className="inputStyle">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={username} onChange={this.handleChange} />

                <label htmlFor="password" >Password: </label>
                <input type="password" name="password" value={password} onChange={this.handleChange} />
              </div>
              <div>
                <input className="inputBtn" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

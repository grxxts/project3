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


  reSignup = () => {
    this.props.history.push('/signup')
  }

  render() {
    const { username, password } = this.state;
    return (

      <div className="parentContainer">
        <div className="copyBranding">
          <div className="copyText">
            <h2>Discover the app for watch your favorite <span className="spanStyle">content on screen</span></h2>
          </div>
          <div className="utityLogoFinal">
            <img src="https://trello-attachments.s3.amazonaws.com/5dee44377e4ecb8a78a5deb2/5e1ef7904cc7bd6f6344d725/ca1cba45d27595583e657ef494ff431b/logo-utity-final.svg"></img>
          </div>
        </div>
        <div className="loginContainer">
          <div className="loginElements">
            <div className="loginTitle">
              <h3>Iniciar sesión en  Utity</h3>
            </div>
            <form onSubmit={this.handleLogin}>
            <hr className="breaker2">
            </hr>
              <div className="inputStyle">
                <div className="inputLabel">
                  <label className="labelText" htmlFor="username">Username: </label>
                </div>
                <input className="inputForm" type="text" name="username" value={username} onChange={this.handleChange} />
                <div className="inputLabel">
                  <label className="labelText" htmlFor="password" >Password: </label>
                </div>
                <input className="inputForm" type="password" name="password" value={password} onChange={this.handleChange} />
              </div>
              <div>
                <input className="inputBtn" type="submit" value="Login" />
              </div>
              <hr className="breaker">
              </hr>
              <div>
                <button className="btnToSignup" onClick={e => { this.reSignup(e) }}>or create account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

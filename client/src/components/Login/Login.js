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
        <div className="collage">
          <div>
            <h2 className="companyName">Utity</h2>
          </div>
          <div>
            <img className="img1" src="https://www.blogbankia.es/recursos/img/blog/20190529/junio2019/esports.jpg"></img>
          </div>
          <div>
            <img className="img2" src="https://img.menzig.es/a/0000/420-h0.jpg"></img>
          </div>
          <div>
            <h3 className="companyText">
              The ultimate app for the streamers and gamers. Get all your favorite content in one screen, Join us!
            </h3>
          </div>
        </div>
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

import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import "./Signup.css"

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.AuthService = new AuthService();
  }

  state = {
    username: '',
    password: '',
    picture: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }
  handleSignUp = (e) => {
    e.preventDefault()
    const { history, setUser } = this.props;
    this.AuthService.signup(this.state)
      .then(
        (user) => {
          setUser(user);
          history.push("/home")
        },
        (error) => {
          console.error(error)
        }
      )
  }

  handleUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('picture', e.target.files[0])
    this.AuthService.upload(uploadData)
      .then(
        (data) => {
          this.setState({ ...this.state, picture: data.secure_url })
        },
        (error) => {
          console.error(error)
        }
      )
  }

  reLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    const { username, password, picture } = this.state;
    return (
      <div className="parentContainer">
        <div className="copyBranding">
          <div className="copyText">
            <h2>Discover the app for watch your favorite <span>content on screen</span></h2>
          </div>
          <div className="utityLogoFinal">
            <img src="https://trello-attachments.s3.amazonaws.com/5dee44377e4ecb8a78a5deb2/5e1ef7904cc7bd6f6344d725/ca1cba45d27595583e657ef494ff431b/logo-utity-final.svg"></img>
          </div>
        </div>
        <div className="loginContainer">
          <div className="loginElements">
            <div className="loginTitle">
              <h3>Create account in Utity</h3>
            </div>
            <form onSubmit={this.handleSignUp}>
              <hr className="breaker2">
              </hr>
              <div className="inputStyle">
                <div className="inputLabel">
                  <label className="labelText" htmlFor="username"><h4 className="usernameText">Username:</h4></label>
                </div>
                <input className="inputForm" type="text" name="username" value={username} required onChange={this.handleChange} />
                <div className="inputLabel">
                  <label className="labelText" htmlFor="password">Password: </label>
                </div>
                <input className="inputForm" type="password" value={password} name="password" required onChange={this.handleChange} />
                <div>
                  <input className="imgUploader" type="file" name="picture" onChange={this.handleUpload} />
                </div>
              </div>
              <input className="inputBtn" type="submit" value="Create account" />
              <div>
                <button className="btnToLogin" onClick={e => { this.reLogin(e) }}>Have already an account?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

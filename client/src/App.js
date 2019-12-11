import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import AuthService from './services/AuthService';
import Home from './guards/Home';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.AuthService = new AuthService();
  }

  state = {
    user: null,
    beers: []
  }

  setUser = (user) => {
    this.setState({ ...this.state, user })
  }

  fetchUser = () => {
    if (this.state.user === null) {
      this.AuthService.loggedInUser()
        .then(
          (user) => {
            this.setUser(user)
          },
          (error) => {
            this.setUser(false)
          }
        )
        .catch(() => {
          this.setUser(false)
        })
    }
  }

  componentDidMount() {
    
    this.fetchUser()
  }

  render() {
    this.fetchUser()
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {user && <Switch>
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />  
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            <Home exact path="/" user={user} />

          </Switch> }
          {!user && <Switch>
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />  
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            <Home exact path="/" user={user} />
          </Switch> }
        </header>
      </div>
    );
  }
}

export default App;

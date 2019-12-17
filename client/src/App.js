import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import AuthService from './services/AuthService';
import Home2 from './components/Home2/Home2';
import Explore from './components/Explore/Explore';
import NavBar from './components/NavBar/NavBar';
import MyList from './components/MyList/MyList';


class App extends React.Component {
  constructor() {
    super();

    this.AuthService = new AuthService();
    this.state = {
      user: false,
    }

  }


  setUser = (user) => {
    this.setState({ ...this.state, user:user })
  }

  fetchUser = () => {
    if (this.state.user === false) {
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

  logout=()=>{
    this.AuthService.logout()
    .then(()=>{
      this.setState({...this.state, user: false},
        ()=>{
          this.props.history.push('/login')
        })
    })
    .catch(err=>console.log(err))
  }



  componentDidMount() {
    this.fetchUser()
  }

  render() {
    console.log(this.state)
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <NavBar loggedInUser={this.state.user} {...this.props} user={this.state.user} logout={this.logout}/>

          {user && <Switch>
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            <Route exact path="/home" render={(match) => <Home2 {...match} user={this.state.user} />} />
            <Route exact path="/explore" render={(match) => <Explore {...match} user={this.state.user} />} />
            <Route exact path="/mylist" render={(match) => <MyList {...match} user={this.state.user} />} />

          </Switch>}

          {!user && <Switch>
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            {/* <Route exact path="/" render={(match) => <Redirect to={"/login"} />} /> */}

          </Switch>}
        </header>
      </div>
    );
  }
}

export default withRouter(App);

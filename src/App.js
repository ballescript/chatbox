import React , { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/createStore';
import Login from './login/Login';
import Chatbox from './chatbox/Chatbox';
import Register from './register/Register';
import PrivateRoute from './PrivateRoute';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: "",
      users: [],
    }
  }

  render(){
  return (
    <Provider store={store}>
      <div className="App">
    
        
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
   
          </Switch>
          <PrivateRoute component={Chatbox} status="this.state.status" />
        </Router>
      </div>
    </Provider>
  );}
}

export default App;

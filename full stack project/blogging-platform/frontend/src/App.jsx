import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import PostList from './components/PostList';
import PostEditor from './components/PostEditor';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/posts" component={PostList} />
          <Route path="/editor" component={PostEditor} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
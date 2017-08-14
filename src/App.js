import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      Blog
    </div>
  );
};

const Register = () => {
  return (
    <div>
      Register
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
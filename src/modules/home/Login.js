import React from 'react';
import ReactDOM from 'react-dom';

const Login = () => {
  return (
    <div>
      <h1>登录</h1>
      <form action="/login">
        <input type="text" name="username" placeholder="用户名"/><br />
        <input type="password" name="password" placeholder="密码"/><br />
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

ReactDOM.render((
  <Login />
), document.getElementById('root'));

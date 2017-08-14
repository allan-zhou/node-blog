import React from 'react';
import ReactDOM from 'react-dom';

const Login = () => {
  return (
    <div>
      <h1>登录</h1>
      <form>
        <input type="text" name="username" placeholder="用户名"/>
        <input type="text" name="password" placeholder="密码"/>
        <button type="submit" value="登录">登录</button>
      </form>
    </div>
  );
};

ReactDOM.render((
  <Login />
), document.getElementById('root'));

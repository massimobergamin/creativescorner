import React, { useState } from 'react';
import auth from '../../utils/auth';
import { loginUser } from '../../Services/Services';
import { useRouter } from 'next/router';

const LoginComponent = ({setIsAuthenticated}) => {
  const router = useRouter();

  const initialState = {
    name: 'Name',
    email: 'Email',
    userPassword: 'Password'
  }
  
  const [ user, setUser ] = useState(initialState);

  const onChange = (e) => {
    const { target: { name, value } } = e;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setUser(initialState);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(user)

    const res = await loginUser(user);
    console.log(res);
    if (res.data.message) {

      alert(`${res.response.data.message}`);
      setUser(initialState);
    } else {
      setIsAuthenticated(true);
      auth.login(() => router.push('/home'));
      resetForm();
    }
  }

  return (
    <div className="componentContainer">
      <div className="login-box">
      <h3 className="loginTitle">Login</h3>
      <form onSubmit={(e) => submitHandler(e)} className="loginForm">
        <div className="user-box">
      <input 
        className="nameInput"
        value={user.name}
        type="text" 
        name="name" 
        id="name" 
        onChange={onChange} 
        required
      />
        </div>
        <div className="user-box">
      <input 
        className="emailInput"
        value={user.email}
        type="text" 
        name="email" 
        id="email" 
        onChange={onChange} 
        required
      />
        </div>
        <div className="user-box">
      <input 
        className="passwordInput"
        value={user.userPassword}
        type="password" 
        name="userPassword" 
        id="userPassword" 
        onChange={onChange} 
        required
      />
        </div>
      <button className="loginButton" type="submit">
        Login
      </button>
      </form>
      </div>
    </div>
  )
}

export default LoginComponent
import React, { useState } from 'react';
import { createUser } from '../../Services/Services'
import auth from '../../utils/auth';
import { useRouter } from 'next/router';


const RegisterComponent = ({ setIsAuthenticated }) => {
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
    }))
  }

  const resetForm = () => {
    setUser(initialState);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await createUser(user);
    console.log(res);

    if (res.error) {
      alert(`${res.message}`);
      setUser(initialState);
    } else {
      setIsAuthenticated(true);
      auth.login(() => router.push('/profile'));
    }

    // if (res.data.message) {
    //   alert(`${res.response.data.message}`);
    //   setUser(initialState);
    // } else {
    //   resetForm();
    // }
  }

  return (
    <div className="componentContainer">
      <div className="register-box">
        <h3 className="registerTitle">Register</h3>
        <form onSubmit={(e) => submitHandler(e)} className="registerForm">
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
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterComponent
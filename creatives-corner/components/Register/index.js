import React, { useState } from 'react';
import { createUser } from '../../Services/Services'
import userContext from '../../utils/UserContext';
import { useRouter } from 'next/router';


const RegisterComponent = ({ setLoggedUser, setIsAuthenticated }) => {
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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(user);
      if (!res.error) {
        // setUser(initialState);
        alert("You've successfully registered! Now login to complete authentication.")
        userContext.login(() => router.push('/login'));
      }
    } catch (error) {
        console.log(error)
    }
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
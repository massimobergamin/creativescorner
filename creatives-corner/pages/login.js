import LoginComponent from '../components/Login/index';
import { useState } from 'react';
import auth from '../utils/auth';
import userContext from '../utils/UserContext';

const Login = ({setAuthenticated, setLoggedUser }) => {

  const initialState = auth.isAuthenticated(); //which is FALSE
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);



  return (
    <div>
      <LoginComponent
      setIsAuthenticated={setIsAuthenticated}
      setAuthenticated={setAuthenticated}
      setLoggedUser={setLoggedUser}
      />
    </div>
  )
}

export default Login;
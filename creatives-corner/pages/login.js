import LoginComponent from '../components/Login/index';
import { useState } from 'react';
import auth from '../utils/auth';

const Login = () => {
  const initialState = auth.isAuthenticated(); //which is FALSE
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div>
      <LoginComponent
      setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default Login;
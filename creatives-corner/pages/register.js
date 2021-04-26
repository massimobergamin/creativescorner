import RegisterComponent from '../components/Register/index';
import { useState } from 'react';
import auth from '../utils/auth';

const Register = ({setLoggedUser}) => {
  const initialState = auth.isAuthenticated(); //which is FALSE
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div>
      <RegisterComponent
      setIsAuthenticated={setIsAuthenticated}
      setLoggedUser={setLoggedUser}
      />
    </div>
  )
}

export default Register;
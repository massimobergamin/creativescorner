import RegisterComponent from '../components/Register/index';
import { useState } from 'react';
import auth from '../utils/auth';

const Register = () => {
  const initialState = auth.isAuthenticated(); //which is FALSE
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div>
      <RegisterComponent
      setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default Register;
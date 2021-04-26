import '../styles/globals.css';
import '../styles/threadPostStyles.css';
import '../styles/threadListStyles.css';
import '../styles/selectedThreadStyles.css';
import '../styles/postReplyStyles.css';
import '../styles/repliesStyles.css';
import '../styles/loginStyles.css';
import '../styles/registerStyles.css';
import '../styles/navbarStyles.css'
import { useState } from 'react'
import UserContext from '../utils/UserContext';
import Navbar from '../components/Navbar/navbar'
import { Howl, Howler } from 'howler';

function MyApp({ Component, pageProps }) {
  
  
  const [isAuthenticated, setAuthenticated ] = useState(UserContext.isAuthenticated());
  const [loggedUser, setLoggedUser] = useState(UserContext.loggedUser());


  return ( 
    <div>
      { isAuthenticated ? (
        <div>
      <Navbar
      setLoggedUser={setLoggedUser}
      />
      </div>
      ) : null
    }
      <Component 
      isAuthenticated={isAuthenticated}
      setAuthenticated={setAuthenticated}
      loggedUser={loggedUser}
      setLoggedUser={setLoggedUser}
      {...pageProps} 
      /> 
    </div>
  
  )

}

export default MyApp
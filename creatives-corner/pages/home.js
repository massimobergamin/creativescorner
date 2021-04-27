import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { profile } from  '../Services/Services'

const Home = ({ setAuthenticated, setLoggedUser }) => {

  const router = useRouter();

  const initialState = {
    name: '',
    email: ''
  }

  const [state, setState] = useState(initialState);
  const name = state.name;

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await profile();
      //console.log(userInfo)
      if (userInfo) {
        const { name, email } = userInfo.data;
        setState((prevState) => {
          return {
            ...prevState,
            name,
            email,
          };
        });
        handleAuth(userInfo);
      }
      else {
        console.log('no user info found');
        router.push('/')
      }
    };
    getProfile();
  }, []);

  const handleAuth = (user) => {
    setLoggedUser(user);
    setAuthenticated(true)
  }

  return (
    <div>
      <div className="bannerContainer">
      <h1 className="userBanner">Welcome {name} </h1>
      </div>
      <h1>Todo</h1>
      <h3>
        -EMBED links
        - SEARCH by Genre
        - CREATE private groups
          (users added to a list have access to the page and can post and it's linked to their pofile page)
          "Groups data base" and the name of the group will link them all together and then filter only the specific name that the ID is attach to
        - FOLLOW profiles
      </h3>

      <div className={styles.container}>
          <div className="homeWrapper"> 
            <Link href='./post'>
              <a>
            <h2 className="pathTags">Post Thread</h2>
              </a>
            </Link>
            <Link href='./threads'>
              <a>
              <h2 className="pathTags">Threads</h2>
              </a>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home;
import PostThread from '../components/PostThread/index'
import { postThread, profile } from '../Services/Services'
import { useState, useEffect } from 'react';
import UserContext from '../utils/UserContext'

const Post = ({ setLoggedUser, loggedUser, setAuthenticated }) => {

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await profile();
      if (userInfo) {
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
    console.log("handleAuth")
    console.log(loggedUser)
    setAuthenticated(true)
  }

  const [threads, setThreads] = useState([]);

  const userData = UserContext.user;

  const postHandler = thread => {
    postThread(thread)
    .then(response => {
      const newThread = response.data;
      setThreads([...threads, ...newThread]);
    })
    .catch(error => console.log(error));
  }

  return (
    <div>
      <PostThread
        postHandler={postHandler}
        userData={userData}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
      />
    </div>
  )
}

export default Post;
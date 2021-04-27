import Profile from '../components/Profile/index'
import { useState, useEffect } from 'react';
import { getThreads, deleteThread, profile } from '../Services/Services';
import userContext from '../utils/UserContext';

const ProfileDashboard = ({loggedUser, setLoggedUser, setAuthenticated}) => {
  const initialState = userContext.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

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
    setAuthenticated(true)
  }

  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads()
      .then((threads) => {
        setThreads(threads.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = id => {
    deleteThread(id)
    .then(deleteReply(id))
    .then(res => {
      const newThreadList = threads.filter(thread => thread.id !== id);
      setThreads(newThreadList);
    })
  }

  return (
    <div>
      <Profile
      setIsAuthenticated={setIsAuthenticated}
      loggedUser={loggedUser}
      threads={threads}
      deleteHandler={deleteHandler}
      />
    </div>
  )
}

export default ProfileDashboard
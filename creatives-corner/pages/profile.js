import Profile from '../components/Profile/index'
import { useState, useEffect } from 'react';
import { getThreads, deleteThread } from '../Services/Services';
import userContext from '../utils/UserContext';

const ProfileDashboard = ({loggedUser}) => {
  const initialState = userContext.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

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
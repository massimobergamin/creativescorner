import ThreadList from '../components/ThreadList/index';
import { useState, useEffect } from 'react';
import { getThreads, deleteThread, profile} from '../Services/Services';
import { deleteReply } from '../Services/Services';

const ThreadPage = ({setLoggedUser, loggedUser, setAuthenticated}) => {

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
      { threads.length > 0 ? (
        <div>
          <ThreadList 
          threads={threads}
          deleteHandler={deleteHandler}
          loggedUser={loggedUser}
          />
          </div>
          ) : null }
    </div>
  )
}

export default ThreadPage;
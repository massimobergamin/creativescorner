import ThreadList from '../components/ThreadList/index';
import { useState, useEffect } from 'react';
import { getThreads, deleteThread } from '../Services/Services';
import { deleteReply } from '../Services/Services';

const ThreadPage = () => {
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
          <ThreadList 
          threads={threads}
          deleteHandler={deleteHandler}
          />
          ) : null }
    </div>
  )
}

export default ThreadPage;
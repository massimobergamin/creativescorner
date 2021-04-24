import styles from '../styles/Home.module.css';
import PostThread from '../components/PostThread/index';
import ThreadList from '../components/ThreadList/index';
import { useState, useEffect } from 'react';
import { getThreads, postThread, deleteThread } from '../Services/Services';
import { deleteReply } from '../Services/Services';
import auth from '../utils/auth';
import EntryPoint from '../pages/index';
import Link from 'next/link';

const Home = () => {
  const [threads, setThreads] = useState([]);

  const initialState = auth.isAuthenticated(); //which is FALSE
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  useEffect(() => {
    getThreads()
      .then((threads) => {
        setThreads(threads.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const postHandler = thread => {
  //   postThread(thread)
  //   .then(response => {
  //     const newThread = response.data;
  //     setThreads([...threads, ...newThread]);
  //   })
  //   .catch(error => console.log(error));
  // }

  // const deleteHandler = id => {
  //   deleteThread(id)
  //   .then(deleteReply(id))
  //   .then(res => {
  //     const newThreadList = threads.filter(thread => thread.id !== id);
  //     setThreads(newThreadList);
  //   })
  // }

  return (

    <div className={styles.container}>
      {isAuthenticated ? (
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
          {/* <PostThread
          postHandler={postHandler}
          /> */}
          {/* { threads.length > 0 ? (
          <ThreadList 
          threads={threads}
          deleteHandler={deleteHandler}
          />
          ) : null } */}
        </div>
      ) : (
        <div>
          <EntryPoint/>
        </div>
      )

      }
    </div>
  )
}

export default Home;
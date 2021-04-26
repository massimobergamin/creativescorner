import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { getThreads, postThread, deleteThread } from '../Services/Services';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = ({ isAuthenticated, setLoggedUser }) => {
  const [threads, setThreads] = useState([]);
  const router = useRouter();


  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
    getThreads()
      .then((threads) => {
        setThreads(threads.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (

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
  )
}

export default Home;
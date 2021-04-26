import PostThread from '../components/PostThread/index'
import { postThread } from '../Services/Services'
import { useState } from 'react';
import UserContext from '../utils/UserContext'

const Post = ({ loggedUser }) => {
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
      />
    </div>
  )
}

export default Post;
import PostThread from '../components/PostThread/index'
import { postThread } from '../Services/Services'
import { useState, useEffect } from 'react';

const Post = () => {
  const [threads, setThreads] = useState([]);

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
      />
    </div>
  )
}

export default Post;
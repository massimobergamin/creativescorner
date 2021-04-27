import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { getThreads, profile } from '../../Services/Services'
import SelectedThread from '../../components/SelectedThread/index'
import PostReply from '../../components/PostReply/PostReply';
import Replies from '../../components/Replies/replies';
import { getReplies, postReply, deleteReply } from '../../Services/Services';

const Thread = ({ setLoggedUser, loggedUser, setAuthenticated }) => {

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await profile();
      console.log(userInfo)
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

  const [selectedThread, setSelectedThread] = useState([]);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    getThreads()
      .then((threads) => {
        setSelectedThread(threads.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getReplies()
    .then((replies) => {
      setReplies(replies.data);
    })
    .catch((err) => console.log(err));
  }, []);

  const replyHandler = reply => {
    postReply(reply)
    .then(response => {
      const newReply = response.data;
      setReplies([...replies, ...newReply]);
    })
    .catch(err => console.log(err))
  }

  const deleteHandler = id => {
    deleteReply(id)
    .then(res => {
      const newReplyList = replies.filter(reply => reply.id !== id);
      setReplies(newReplyList);
    })
  }

  const router = useRouter();
  const threadID = router.query.id;

  return (
    <div>
      <SelectedThread
      threads={selectedThread}
      threadID={threadID}
      loggedUser={loggedUser}
      />
      <PostReply
      replyHandler={replyHandler}
      threadID={threadID}
      loggedUser={loggedUser}
      />
      <Replies
      replies={replies}
      threadID={threadID}
      deleteHandler={deleteHandler}
      loggedUser={loggedUser}
      />
    </div>
  )
}

export default Thread
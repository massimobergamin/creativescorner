import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { getThreads } from '../../Services/Services'
import SelectedThread from '../../components/SelectedThread/index'
import PostReply from '../../components/PostReply/PostReply';
import Replies from '../../components/Replies/replies';
import { getReplies, postReply } from '../../Services/Services';

const Thread = () => {

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

  const router = useRouter();
  const threadID = router.query.id;

  return (
    <div>
      <SelectedThread
      threads={selectedThread}
      threadID={threadID}
      />
      <PostReply
      replyHandler={replyHandler}
      threadID={threadID}
      />
      <Replies
      replies={replies}
      threadID={threadID}
      />
    </div>
  )
}

export default Thread
import React, { useState } from 'react';

const PostReply = ({ replyHandler, threadID }) => {
  
  const initialState = {
    content: '',
    topicid: +threadID
  }

  const [ reply, setReply ] = useState(initialState);

  const onChange = (e) => {
    const { target: { name, value } } = e;
    setReply((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setReply(initialState);
  }

  const submitHandler = e => {
    e.preventDefault();
    replyHandler(reply);
    resetForm();
  }

  return (
    <div className="replyComponentContainer">
    <div className="postReply-box">
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="replyContainer">
        <textarea 
        className="replyBox"
        value={reply.content}
        type="text"
        name="content"
        id="content"
        onChange={onChange}
        required
        />
        <button className="reply" type="submit" disabled={!reply.content}>Reply</button>
      </div>
    </form>
      </div>
    </div>

  )
}

export default PostReply;
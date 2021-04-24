import React, { useState } from 'react';


const PostThread = ({ postHandler }) => {

  const initialState = {
    title: 'title',
    genre: 'genre',
    content: 'details'
  }

  const [ topic, setTopic ] = useState(initialState);

  const onChange = (e) => {
    const { target: { name, value  } } = e;
    setTopic((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setTopic(initialState);
  }

  const submitHandler = e => {
    e.preventDefault();
    postHandler(topic);
    resetForm();
  }

  return (
    <div className="threadPostComponent">
      <div className="threadPost-box">
        <form className="threadForm"
          onSubmit={(e) => submitHandler(e)}
        >
      <div className="topic-box">
          <input 
            className="topicInput"
            value={topic.title}
            type="text" 
            name="title" 
            id="title" 
            onChange={onChange} 
            required
          />
      </div>
      <div className="content-box">
          <textarea
            value={topic.content} 
            type="text" 
            name="content" 
            id="content" 
            onChange={onChange} 
            required
          />
      </div>
      <div className="col-xs-12">
      <div className="topic-box">
          <input 
            value={topic.genre}
            type="text"
            name="genre"
            id="genre"
            onChange={onChange}
            required
          />
      </div>
      </div>
          <button className="postThreadButton" type="submit" disabled={!topic.title && !topic.content}>
            Post Topic
          </button>
      
        </form>
      </div>
    </div>
  )
}

export default PostThread;
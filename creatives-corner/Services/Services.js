import axios from 'axios';

//Thread Services
export const getThreads = async() => {
  return await axios.get('http://localhost:3050/threads');
};

export const getSelectedThread = async (id) => {
  return await axios.get(`http://localhost:3050/thread/${id}`);
}

export const postThread = async (thread) => {
  console.log(thread)
  return await axios.post('http://localhost:3050/post', thread);
}

export const deleteThread = (id) => {
  return axios.delete(`http://localhost:3050/${id}`);
}

//Reply Services
export const getReplies = async () => {
  return await axios.get(`http://localhost:3050/replies`);
}

export const postReply = async (reply) => {
  return await axios.post('http://localhost:3050/reply', reply);
}

export const deleteReply = (id) => {
  return axios.delete(`http://localhost:3050/${id}`);
}

//Register User
export const createUser = async (user) => {
  return await axios.post('http://localhost:3050/user/register', user)
  .then((response) => response, err => err)
}

//Login User
export const loginUser = async (user) => {
  return await axios.post('http://localhost:3050/user/login', user, {credentials: true})
  .then((response) => response, err => err)
}
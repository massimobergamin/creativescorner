import moment from 'moment'
import { useRouter } from 'next/router';

const Replies = ({ replies, threadID, deleteHandler, loggedUser }) => {

  const threadReplies = replies.filter(reply => reply.topicid === +threadID);

  return (
    <div>
      <div className="repliesContainer">
        <ul className="repliesUL">
          {threadReplies.map(reply => (
            <div className="replyRowContainer">
            <li className="replyRow" key={ reply.id }>
              <div>
                {reply.username === loggedUser[0].username ? (
              <div className="buttonContainer">
                <button onClick={() => deleteHandler(reply.id)}className="delete">X</button>
              </div>
                 ) : null }
              <h2>{ reply.content }</h2>
              <h6>{ moment(reply.date).format('LL') }</h6>
              </div>
            </li>
            </div>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default Replies;
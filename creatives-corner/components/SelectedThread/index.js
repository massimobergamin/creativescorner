import { useRouter } from 'next/router';
import moment from 'moment';
import Linkify from 'react-linkify';

const SelectedThread = ( { threads, threadID, loggedUser } ) => {

  const selThread = threads.filter(thread => thread.id === +threadID)
  
  return (
    <div>
      <div className="selectedThreadContainer">
        <ul className="selectedThread">
        {selThread.map(thread => (
          <li className="selectedRow" key={ thread.id }>
            <div className="contentWrap">
              <div className="headerContainer">
                <div className="postedDetailsContainer">
                <p className="postedUser">by { thread.username }</p>
                <p className="postedDate">{moment(thread.date).format('MMMM Do YYYY')}</p>
                </div>
                <div clasName="titleContainer">
              <h3 className="titleSelected"> { thread.title } </h3>
                </div>
              </div>
            <Linkify>
            <div>
            <div className="contentContainer">
            <p> { thread.content } </p>
            </div>
            </div>
            </Linkify>
            </div>
            {thread.username === loggedUser.data.name ? (
              <div className="buttonContainer">
                <button onClick={() => deleteHandler(thread.id)}className="delete">X</button>
              </div>
              ) : null }
          </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default SelectedThread;
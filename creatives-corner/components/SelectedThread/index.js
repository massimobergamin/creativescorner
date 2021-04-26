import { useRouter } from 'next/router';
import moment from 'moment';
import Linkify from 'react-linkify';

const SelectedThread = ( { threads, threadID } ) => {
  
  const selThread = threads.filter(thread => thread.id === +threadID)
  
  return (
    <div>
      <div className="selectedThreadContainer">
        <ul className="selectedThread">
        {selThread.map(thread => (
          <li className="selectedRow" key={ thread.id }>
            <div className="contentWrap">
            <h6 className="dateOnSelected">{moment(thread.date).format('MMMM Do YYYY')}</h6>
            <h3 className="titleSelected"> { thread.title } </h3>
            <Linkify>
            <div>
            <div className="contentContainer">
            <p> { thread.content } </p>
            </div>
            </div>
            </Linkify>
            </div>
          </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default SelectedThread;
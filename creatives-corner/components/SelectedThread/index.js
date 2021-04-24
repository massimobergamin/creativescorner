import { useRouter } from 'next/router';
import moment from 'moment';

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
            <h2 className="titleSelected"> { thread.title } </h2>
            <h3> { thread.content } </h3>
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
import Link from 'next/link';
import moment from 'moment';

const ThreadList = ({ threads, deleteHandler }) => {

  return (
    <div className="threadsComponentContainer">
      <div className="ulContainer">
      {/* //<h2 className="pathTags">Threads</h2> */}
      <ul>
        {threads.map(thread => (
          <div className="rowWrap">
            <li className="threadRow" key={ thread.id }>
              <div className="threadAndDateContainer">
                <Link href={`/thread/${thread.id}`}>
                <a>
                <h2 className="threadTopic"> { thread.title } </h2>
                </a>
                </Link>
                {/* onClick - the reason we pass it as a function "() => deletedHandler" is to
                avoid having the button fire when the page renders. */}
                <h6 className="timeStamp">{moment(thread.date).format('MMMM Do YYYY')}</h6>
              </div>
              <div className="buttonContainer">
                <button onClick={() => deleteHandler(thread.id)}className="delete">X</button>
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

export default ThreadList;
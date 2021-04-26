import moment from 'moment';
import Link from 'next/link';

const Profile = ({loggedUser, threads}) => {

  console.log(loggedUser[0].name)
  console.log(threads)
  const selThread = threads.filter(thread => thread.username === loggedUser[0].name)
  console.log(selThread);

  return (
    <div className="profileComp">
      <div className="profileCcontainer">
        <div className="headers">
          <h2>{loggedUser[0].name}'s Threads</h2>
          </div>
          <div className="selectedThreadContainer">
            <ul className="selectedThread">
            {selThread.map(thread => (
              <li className="selectedRow" key={ thread.id }>
                <div className="contentWrap">
                <h6 className="dateOnSelected">{moment(thread.date).format('MMMM Do YYYY')}</h6>
                <Link href={`/thread/${thread.id}`}>
                <a>
                <h2 className="titleSelected"> { thread.title } </h2>
                </a>
                </Link>
                <h3> { thread.content } </h3>
                </div>
                <div className="buttonContainer">
                    <button onClick={() => deleteHandler(thread.id)}className="delete">X</button>
                  </div>
              </li>
              ))
            }
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Profile;
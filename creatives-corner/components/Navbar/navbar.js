import UserContext from '../../utils/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSound from 'use-sound';
import { Howl, Howler } from 'howler';
import ReactAudioPlayer from 'react-audio-player';
import song1 from '../../public/song1.mp3';



const Navbar = ({ setLoggedUser }) => {
  const router = useRouter();
  
  const logoutUser = () => {
    const logoutUserContext = {};
    //set authentication to false
    //remove user data from state
    //route to login page
    setLoggedUser(logoutUserContext);
    UserContext.logout(() => router.push('/login'));

    console.log("hello")
  }
    const playSong = () => {
      let sound = new Audio(song1)
      let sound2 = document.getElementById("audioplayer")
      sound2.play();
    }
  

  return (

    <div className="navbar">
      <div className="navContainer">
        <div className="navTagBoxContainer">
            <div className="musicButton">
              <button onClick={() => playSong()}>🎵</button>
              {/* <ReactAudioPlayer 
              controls
              src={'../../public/song1.mp3'}
              > */}
              <audio controls id="audioplayer">
                <source src={require("../../public/song1.mp3")} type='audio/mpeg'/>
              </audio>
              {/* </ReactAudioPlayer> */}
            </div>
        </div>
        <div className="navTagBoxContainer">
          <div className="navTagBox">
            <Link href="/home">
              <a>
              <h3>Home</h3>
              </a>
            </Link>
          </div>
        </div>
        <div className="navTagBoxContainer">
          <div className="navTagBox">
            <Link href="./profile">
              <a>
              <h3>My Profile</h3>
              </a>
            </Link>
          </div>
        </div>
        <div className="navTagBoxContainer">
          <div className="navTagBox">
            <Link href="/threads">
              <a>
              <h3>Threads</h3>
              </a>
            </Link>
          </div>
        </div>
        <div className="nagTagBoxContainer">
          <div className="navTagBox">
            <a href="/" onClick={()=> logoutUser()}>
            <h3>Logout</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
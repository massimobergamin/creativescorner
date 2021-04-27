import UserContext from '../../utils/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { logout } from '../../Services/Services'

const Navbar = ({ setLoggedUser, setAuthenticated }) => {
  const router = useRouter();
  
  const logoutUser = () => {
    logout();
    handleAuth();
    console.log("hello")
  }
  
  const handleAuth = () => {
    const logoutUserContext = {};
    setLoggedUser(logoutUserContext);
    setAuthenticated(false)
    UserContext.logout(() => router.push('/login'));
  }


  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navTagBoxContainer">
            <div className="musicButton">
              <audio id="player" volume="0">
              <source src="/song3.mp3" type='audio/mpeg'/>
              </audio>
              <button className="playButton"  onClick={() => document.getElementById('player').play()}>🎵</button> 
              <button className="pauseButton"  onClick={() => document.getElementById('player').pause()}>||</button> 
              {/* <button onclick={() => document.getElementById('player').volume += 0.1}>Vol +</button> 
              <button onclick={() => document.getElementById('player').volume -= 1}>Vol -</button>  */}
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
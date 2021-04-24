import Profile from '../components/Profile/index'
import auth from '../utils/auth';

const ProfileDashboard = () => {
  const insitialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div>
      <Profile
      setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  )
}

export default ProfileDashboard
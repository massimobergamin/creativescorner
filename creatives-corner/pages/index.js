import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function EntryPoint() {

  return (
    <div className={styles.container}>
      
      <Link href="./login">
        <a>
        <h3 className="pathTags">Login</h3>
        </a>
      </Link>

      <Link href="./register">
        <a>
        <h3 className="pathTags">Register</h3>
        </a>
      </Link>
  
    </div>
  )
}

import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.displayFlex} style={{ backgroundColor: '#4682B4' }}>
      <NavLink to="/" aria-label="Home">
        <div className={styles.title}>
          <h1>Community TV Data</h1>
        </div>
      </NavLink>
      <div className={styles.icons}>
        <FaMicrophone size={24} aria-label="Microphone" />
        <FaCog size={24} aria-label="Settings" />
      </div>
    </div>
  );
}

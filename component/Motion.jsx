import styles from "./Navbar.module.css";
import Link from "next/link"

const Motion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarActions}>
        <Link className={styles.active} href="/" >BACK TO TAGAYTAY WEBSITE</Link>
      </div>
    </div>
  );
};

export default Motion;
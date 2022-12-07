import styles from "./Navbar.module.css";
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarActions}>
        <Link className={styles.active} href="/" >HOME</Link>
        <Link className={styles.inactive} href="/tourist-spot" >TOURIST SPOT</Link>
        <Link className={styles.inactive} href="/food" >FOOD</Link>
        <Link className={styles.inactive} href="/about" >ABOUT</Link>
      </div>
    </div>
  );
};

export default Navbar;

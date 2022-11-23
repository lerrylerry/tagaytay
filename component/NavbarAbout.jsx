import styles from "./Navbar.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarActions}>
      <a className={styles.inactive} href="http://localhost:3000/home">HOME</a>
        <a className={styles.inactive} href="http://localhost:3000/tourist-spot">TOURIST SPOT</a>
        <a className={styles.inactive} href="http://localhost:3000/food">FOOD</a>
        <a className={styles.active} href="http://localhost:3000/about">ABOUT</a>
      </div>
    </div>
  );
};

export default About;

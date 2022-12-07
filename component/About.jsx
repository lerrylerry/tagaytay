import styles from "./About.module.css";
import Gap from "../component/Gap";
import Link from "next/link"

const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.gap}></div>
            <h1>About Us</h1>
            <hr/>
            <p>Explore and unwined in Tagaytay City! We offer a places to visit and<br/>delicious delicacies to try with. </p>
            <div className={styles.navbarActions}>
                <a className={styles.image1} href="https://www.facebook.com/"><img src="/images/facebook.png" alt="facebook" /></a>
                <a className={styles.image2} href="https://www.instagram.com"><img src="/images/instagram.png" alt="instagram" /></a>
                <a className={styles.image3} href="https://twitter.com"><img src="/images/twitter.png" alt="twitter" /></a>
                <a className={styles.image4} href="https://www.whatsapp.com"><img src="/images/WhatsApp.png" alt="whatsapp" /></a>
            </div>
            <small>Designed by Team RaspLerry Pi<br/>(Bautista, Baybay,  Fetalbo, Galano, Laungayan, and Mana-ay)</small>
            <Gap/>
            <div><Link className={styles.hl} href="/motion">click here</Link> to see other projects of our team...</div>
        </div>
    );
};

export default About;
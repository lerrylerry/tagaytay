import styles from "./Hero.module.css";

const Hero = () => {
    return(
        <div className={styles.container}>
            <div className={styles.transparent}>
                <h1>EXPLORE</h1>
                <h2>TAGAYTAY CITY</h2> 
            </div>
            <div className={styles.white}>
                <p>Explore and unwind in Tagaytay City! We offer a places to visit and<br/>delicious delicacies to try with. </p>
            </div>
        </div>
    );
};

export default Hero;
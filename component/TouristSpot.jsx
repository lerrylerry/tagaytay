import styles from "./TouristSpot.module.css";

const TouristSpot = () => {
    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col_1}>
                    <a className={styles.col_2} href="http://localhost:3000/skyranch">
                    <img src="/images/sky-ranch.png"/>
                    <p>SKYRANCH TAGAYTAY</p>
                    </a>

                    <a className={styles.col_2} href="http://localhost:3000/ourladylourdes">
                    <img src="/images/our-lady.png"/>
                    <p>OUR LADY OF LOURDES<br/>PARISH CHURCH</p>
                    </a>
                </div>
                <div className={styles.col_2}>
                    <a className={styles.col_2} href="http://localhost:3000/taalvolc">
                    <img src="/images/taal-aerial.png"/>
                    <p>TAAL VOLCANO</p>
                    </a>
                    
                    <a className={styles.col_2} href="http://localhost:3000/picnicgroove">
                    <img src="/images/picnic-groove.png"/>
                    <p>PICNIC GROOVE</p>
                    </a>
                </div>
                <div className={styles.col_3}>
                    <a className={styles.col_2} href="http://localhost:3000/puzzlemansion">
                    <img src="/images/picnic-groove.png"/>
                    <p>PUZZLE MANSION</p>
                    </a>

                    <a className={styles.col_2} href="http://localhost:3000/peoplespark">
                    <img src="/images/peoples-park.png"/>
                    <p>PEOPLES PARK IN<br/>THE SKY</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
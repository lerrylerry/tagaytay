import styles from "./TouristSpot.module.css";

const TouristSpot = () => {
    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col_1}>
                    <img src="/images/sky-ranch.png"/>
                    <p>SKYRANCH TAGAYTAY</p>
                    <img src="/images/our-lady.png"/>
                    <p>OUR LADY OF LOURDES<br/>PARIS CHURCH</p>
                </div>
                <div className={styles.col_2}>
                    <img src="/images/taal-aerial.png"/>
                    <p>TAAL VOLCANO</p>
                    <img src="/images/picnic-groove.png"/>
                    <p>PICNIC GROOVE</p>
                </div>
                <div className={styles.col_3}>
                    <img src="/images/puzzle-mansion.png"/>
                    <p>PUZZLE MANSION</p>
                    <img src="/images/peoples-park.png"/>
                    <p>PEOPLES PARK IN<br/>THE SKY</p>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
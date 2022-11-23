import styles from "./Food.module.css";

const Food = () => {
    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col_1}>
                    <img src="/images/bulalo.png"/>
                    <p>BULALO</p>
                    <img src="/images/buko-pie.png"/>
                    <p>BUKO PIE</p>
                </div>
                <div className={styles.col_2}>
                    <img src="/images/buko-tarts.png"/>
                    <p>CHAMPORADO</p>
                    <img src="/images/chicken-satay.png"/>
                    <p>BUKO TARTS</p>
                </div>
                <div className={styles.col_3}>
                    <img src="/images/champorado.png"/>
                    <p>CHICKEN SATAY</p>
                    <img src="/images/piaya.png"/>
                    <p>BALAY DAKO’S PIAYA &<br/>NAPOLEONES</p>
                </div>
            </div>
        </div>
    );
};

export default Food;
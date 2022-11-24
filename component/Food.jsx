import styles from "./Food.module.css";

const Food = () => {
    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col_1}>
                    <a className={styles.col_2} href="http://localhost:3000/bulalo">
                    <img src="/images/bulalo.png"/>
                    <p>BULALO</p>
                    </a>

                    <a className={styles.col_2} href="http://localhost:3000/bukopie">
                    <img src="/images/buko-pie.png"/>
                    <p>BUKO PIE</p>
                    </a>
                </div>
                <div className={styles.col_2}>
                    <a className={styles.col_2} href="http://localhost:3000/bukotart"> 
                    <img src="/images/buko-tarts.png"/>
                    <p>BUKO TARTS</p>
                    </a>

                    <a className={styles.col_2} href="http://localhost:3000/satay">
                    
                    <img src="/images/chicken-satay.png"/>
                    <p>CHICKEN SATAY</p>
                    </a>
                </div>
                <div className={styles.col_3}>
                    <a className={styles.col_2} href="http://localhost:3000/champorado">
                    <img src="/images/champorado.png"/>
                    <p>CHAMPORADO</p>
                    </a>

                    <a className={styles.col_2} href="http://localhost:3000/piaya">
                    <img src="/images/piaya.png"/>
                    <p>BALAY DAKO’S PIAYA &<br/>NAPOLEONES</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Food;
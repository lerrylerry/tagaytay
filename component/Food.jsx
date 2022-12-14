import styles from "./Food.module.css";
import Link from "next/link"

const Food = () => {
    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col_1}>
                    <Link className={styles.col_2} href="/bulalo">
                    <img src="/images/bulalo.png"/>
                    <p>BULALO</p>
                    </Link>

                    <Link className={styles.col_2} href="/bukopie">
                    <img src="/images/buko-pie.png"/>
                    <p>BUKO PIE</p>
                    </Link>
                </div>
                <div className={styles.col_2}>
                    <Link className={styles.col_2} href="/bukotart"> 
                    <img src="/images/buko-tarts.png"/>
                    <p>BUKO TARTS</p>
                    </Link>

                    <Link className={styles.col_2} href="/satay">
                    <img src="/images/chicken-satay.png"/>
                    <p>CHICKEN SATAY</p>
                    </Link>
                </div>
                <div className={styles.col_3}>
                    <Link className={styles.col_2} href="/champorado">
                    <img src="/images/champorado.png"/>
                    <p>CHAMPORADO</p>
                    </Link>

                    <Link className={styles.col_2} href="/piaya">
                    <img src="/images/piaya.png"/>
                    <p>BALAY DAKO’S PIAYA &<br/>NAPOLEONES</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;
import styles from "../styles/Details.module.sass";

const Details = () => {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.education}>
                    <h1 className={styles.title}>
                        We help schools and education
                    </h1>
                    <p className={styles.detail}>
                        The $79 iWork ’08 appears to be a good deal for anyone
                        needing an affordable office suite for the Mac. Apple
                        has finally added a spreadsheet application.
                    </p>
                    <button className={styles.button}>SHOW ME DETAILS</button>
                </div>
                <div className={styles.hospital}>
                    <h1 className={styles.title}>
                        We help hospitals and healthcare systems
                    </h1>
                    <p className={styles.detail}>
                        The $79 iWork ’08 appears to be a good deal for anyone
                        needing an affordable office suite for the Mac. Apple
                        has finally added a spreadsheet application.
                    </p>
                    <button className={styles.button}>SHOW ME DETAILS</button>
                </div>
                <div className={styles.startup}>
                    <h1 className={styles.title}>
                        We are friends with startups
                    </h1>
                    <p className={styles.detail}>
                        The $79 iWork ’08 appears to be a good deal for anyone
                        needing an affordable office suite for the Mac. Apple
                        has finally added a spreadsheet application.
                    </p>
                    <button className={styles.button}>SHOW ME DETAILS</button>
                </div>
                <div className={styles.corporation}>
                    <h1 className={styles.title}>
                        We are friends with corporations
                    </h1>
                    <p className={styles.detail}>
                        The $79 iWork ’08 appears to be a good deal for anyone
                        needing an affordable office suite for the Mac. Apple
                        has finally added a spreadsheet application.
                    </p>
                    <button className={styles.button}>SHOW ME DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default Details;

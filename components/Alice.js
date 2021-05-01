import Image from "next/image";
import styles from "../styles/Alice.module.sass";

const Alice = () => {
    return (
        <div className={styles.container}>
            <div className={styles.alice}>
                <div className={styles.image}>
                    <Image src="/alice.jpg" alt="alice" layout="fill" />
                </div>
                <h2 className={styles.subtitle}>24/7 EMERGENCY IT SUPPORT</h2>
                <h1 className={styles.title}>
                    Meet Alice, your assistant powered by AI
                </h1>
                <p className={styles.paragraph}>
                    Your 24/7 IT support specialist powered by cutting edge AI
                    technology. Alice works with a huge database of data,
                    supported by human operators to solve your problems in
                    minutes.
                </p>
                <button className={styles.button}>SHOW ME DETAILS</button>
            </div>
        </div>
    );
};

export default Alice;

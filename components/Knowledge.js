import Image from "next/image";
import styles from "../styles/Knowledge.module.sass";

const Knowledge = () => {
    return (
        <div className={styles.container}>
            <div className={styles.knowledge}>
                <h1 className={styles.title}>Use our knowledge base</h1>
                <div className={styles.image}>
                    <Image src="/knowledge.jpg" alt="knowledge" layout="fill" />
                </div>
                <h2 className={styles.subtitle}>
                    Sony Laptops Are Still Part Of The Sony Family
                </h2>
                <p className={styles.date}>10/06/2017</p>
                <p className={styles.paragraph}>
                    Do you want to download free song for ipod? If so, reading
                    this article could save you from getting in to a lot of
                    trouble! Downloading music to your Ipod has
                </p>
                <button className={styles.button}>SHOW ME DETAILS</button>
            </div>
        </div>
    );
};

export default Knowledge;

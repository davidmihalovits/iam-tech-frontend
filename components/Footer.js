import Image from "next/image";
import styles from "../styles/Footer.module.sass";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <div className={styles.image}>
                        <Image src="/logo.svg" alt="logo" layout="fill" />
                    </div>
                    <p className={styles.address}>
                        Virginia Office
                        <br />
                        19309 Winmeade Dr, Ste 107,
                        <br />
                        Lansdowne, VA 20176
                    </p>
                </div>
                <div className={styles.middle}>
                    <p className={styles.touch}>Get in touch with us!</p>
                    <p className={styles.phone}>803.126.126.</p>
                    <p className={styles.email}>info@iamtechnologies.com</p>
                </div>
                <div className={styles.right}>
                    <button className={styles.button}>About</button>
                    <button className={styles.button}>
                        24/7 IT emergency hotline
                    </button>
                    <button className={styles.button}>About our company</button>
                    <button className={styles.button}>Career</button>
                    <button className={styles.button}>Blog</button>
                    <button className={styles.button}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;

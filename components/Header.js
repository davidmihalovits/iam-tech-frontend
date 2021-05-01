import styles from "../styles/Header.module.sass";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    You just want your IT stuff to WORK. We know. We do it for
                    you.
                </h1>
                <p className={styles.slogan}>
                    All-around IT solutions, consultation and manage services.
                </p>
                <button className={styles.button}>GET IN TOUCH WITH US</button>
            </div>
        </div>
    );
};

export default Header;

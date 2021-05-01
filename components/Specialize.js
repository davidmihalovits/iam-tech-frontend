import Image from "next/image";
import styles from "../styles/Specialize.module.sass";

const Specialize = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="/working.jpg" alt="working" layout="fill" />
            </div>
            <div className={styles.specialize}>
                <h1 className={styles.title}>What we specialize in</h1>
                <p className={styles.paragraph}>
                    The $79 iWork ’08 appears to be a good deal for anyone
                    needing an affordable office suite for the Mac. Apple has
                    finally added a spreadsheet application.
                </p>
                <div className={styles.manage}>
                    <div className={styles.icon}>
                        <Image
                            src="/services-icon.svg"
                            alt="services-icon"
                            layout="fill"
                        />
                    </div>
                    <h2 className={styles.subtitle}>MANAGE SERVICES</h2>
                    <p className={styles.description}>
                        Over 92% of computers are infected with Adware and
                        spyware. Such software is rarely accompanied by.
                    </p>
                    <div className={styles.list}>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Real-time monitoring</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Disaster recovery</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Managed business</p>
                    </div>
                    <button className={styles.button}>Interested</button>
                </div>
                <div className={styles.development}>
                    <div className={styles.icon}>
                        <Image
                            src="/services-icon.svg"
                            alt="services-icon"
                            layout="fill"
                        />
                    </div>
                    <h2 className={styles.subtitle}>SOFTWARE DEVELOPMENT</h2>
                    <p className={styles.description}>
                        Over 92% of computers are infected with Adware and
                        spyware. Such software is rarely accompanied by.
                    </p>
                    <div className={styles.list}>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Real-time monitoring</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Disaster recovery</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Managed business</p>
                    </div>
                    <button className={styles.button}>Interested</button>
                </div>
                <div className={styles.solutions}>
                    <div className={styles.icon}>
                        <Image
                            src="/services-icon.svg"
                            alt="services-icon"
                            layout="fill"
                        />
                    </div>
                    <h2 className={styles.subtitle}>NETWORK SOLUTIONS</h2>
                    <p className={styles.description}>
                        Over 92% of computers are infected with Adware and
                        spyware. Such software is rarely accompanied by.
                    </p>
                    <div className={styles.list}>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Real-time monitoring</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Disaster recovery</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Managed business</p>
                    </div>
                    <button className={styles.button}>Interested</button>
                </div>
                <div className={styles.security}>
                    <div className={styles.icon}>
                        <Image
                            src="/services-icon.svg"
                            alt="services-icon"
                            layout="fill"
                        />
                    </div>
                    <h2 className={styles.subtitle}>CYBER SECURITY</h2>
                    <p className={styles.description}>
                        Over 92% of computers are infected with Adware and
                        spyware. Such software is rarely accompanied by.
                    </p>
                    <div className={styles.list}>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Real-time monitoring</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Disaster recovery</p>
                        <div className={styles.arrow}>
                            <Image
                                src="/arrow-right.svg"
                                alt="services-icon"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.item}>Managed business</p>
                    </div>
                    <button className={styles.button}>Interested</button>
                </div>
            </div>
        </div>
    );
};

export default Specialize;

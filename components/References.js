import Image from "next/image";
import styles from "../styles/References.module.sass";

const References = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TRUSTED BY</h1>
            <div className={styles.top}>
                <div className={styles.tmh}>
                    <Image
                        src="/miami.svg"
                        alt="The Miami Herald"
                        width={178}
                        height={30}
                        layout="fixed"
                    />
                </div>
                <div className={styles.dbr}>
                    <Image
                        src="/dbr.svg"
                        alt="Daily Business Review"
                        width={80}
                        height={52}
                        layout="fixed"
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.sfbj}>
                    <Image
                        src="/florida.svg"
                        alt="South Florida Business Journal"
                        width={76}
                        height={39}
                        layout="fixed"
                    />
                </div>
                <div className={styles.inc}>
                    <Image
                        src="/inc.svg"
                        alt="Inc."
                        width={68}
                        height={29}
                        layout="fixed"
                    />
                </div>
                <div className={styles.wsvn}>
                    <Image
                        src="/wsvn.svg"
                        alt="wsvn"
                        width={111}
                        height={36}
                        layout="fixed"
                    />
                </div>
            </div>
        </div>
    );
};

export default References;

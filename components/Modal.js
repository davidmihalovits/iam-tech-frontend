import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "../styles/Modal.module.sass";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.top}>
                <p className={styles.title}>Menu</p>
                <div
                    className={styles.close}
                    onClick={() => props.setModal(false)}
                >
                    <Image src="/close.svg" alt="close" layout="fill" />
                </div>
            </div>
            <div className={styles.pages}>
                <button className={styles.button}>Home page</button>
                <button className={styles.button}>Industry page</button>
                <button className={styles.button}>Contact page</button>
                <button className={styles.button}>Blog</button>
                <button className={styles.button}>Career</button>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "../styles/Navbar.module.sass";
import Modal from "./Modal";

const Navbar = () => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal) {
            //document.getElementById("__next").style.opacity = "0.1";
            document.body.classList.add("modal-open");
            document.getElementById("__next").style.pointerEvents = "none";
        } else {
            //document.getElementById("__next").style.opacity = "1";
            document.body.classList.remove("modal-open");
            document.getElementById("__next").style.pointerEvents = "auto";
        }
    }, [modal]);

    if (modal) {
        return ReactDOM.createPortal(
            <Modal modal={modal} setModal={setModal} />,
            document.getElementById("modal")
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <p className={styles.call}>Call us 24/7!</p>
                <a className={styles.phone} href="tel:15713226977">
                    (1) 571 322 6977
                </a>
                <div className={styles.menu} onClick={() => setModal(true)}>
                    <Image src="/menu.svg" alt="menu" layout="fill" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

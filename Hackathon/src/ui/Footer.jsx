import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.footerLinks}>
                    <FaInstagram className={styles.instagram} />
                    <FaFacebook className={styles.facebook} />
                    <FaTelegram className={styles.telegram} />
                </div>
                <div className={styles.coopyrigth}>© Universe, 2024. All rights reserved.</div>
                <div className={styles.contactUs}>
                    <div>
                        <div>Contact us:</div>
                        <div>universe@gmail.com</div>
                        <div>+777 888 999</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer1}>
                <div className={styles.headerTop}>
                    <div>
                        <select name="City" className={styles.city}>
                            <option value="Rzeszow">Rzeszow</option>
                        </select>

                        <select name="Language" className={styles.language}>
                            <option value="Polish">Polish</option>
                            <option value="English">English</option>
                        </select>
                        <div>
                            <Link className={styles.profile1}>
                                <FaRegUserCircle className={styles.profile2} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headerContainer2}>
                <div className={styles.headerBot}>
                    <Link to="/dashboard">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/create">Create Event</Link>
                    <Link to="/volunteers">Volunteers</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

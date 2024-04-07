import styles from "./DashboardOrganisator.module.css";

function DashboardOrganisator() {
    return (
        <div className={styles.container}>
            <div className={styles.organisator}>
                <div className={styles.organisatorTitle}>BECOME ORGANISATOR</div>
                <ul>
                    <li>Wanna make a great party?</li>
                    <li>Ready to network with industry leaders?</li>
                    <li>Make yourself inspired, empowered and motivated?</li>
                </ul>
            </div>
            <div className={styles.volunteer}>
                <div className={styles.volunteerTitle}>BECOME VOLUNTEER</div>
                <ul>
                    <li>Want to learn new skills and build your CV</li>
                    <li>Want to have fun while making a positive impact?</li>
                    <li>Ready to roll up sleeves and get involved?</li>
                </ul>
            </div>
        </div>
    );
}

export default DashboardOrganisator;

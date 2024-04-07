import styles from "./DashboardDate.module.css";

function DashboardDate() {
    return (
        <div className={styles.dateWrapper}>
            <div className={styles.dateBox}>
                <h3>Today</h3>
                <span>6 april</span>
            </div>
            <div className={styles.dateBox}>
                <h3>This week</h3>
                <span>1 - 7 april</span>
            </div>
            <div className={styles.dateBox}>
                <h3>On the weekend</h3>
                <span>6 - 7 april</span>
            </div>
            <div className={styles.dateBox}>
                <h3>This month</h3>
                <span>April</span>
            </div>
        </div>
    );
}

export default DashboardDate;

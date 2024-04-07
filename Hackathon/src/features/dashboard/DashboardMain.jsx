import { useState } from "react";
import DashboardDate from "./DashboardDate";
import styles from "./DashboardMain.module.css";
import DashboardPictureSlider from "./DashboardPictureSlider";

import { format, addDays } from "date-fns";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import DashboardEvents from "./DashboardEvents";
import DashboardOrganisator from "./DashboardOrganisator";

function DashboardMain() {
    const [date, setDate] = useState(0);
    const today = new Date();
    const days = Array.from({ length: 29 }, (_, i) => addDays(today, i));

    return (
        <div className={styles.container}>
            <DashboardDate />
            <DashboardPictureSlider />
            <div className={styles.kalendar}>
                <div className={styles.kalendarTop}>
                    <div className={styles.kalendarCity}>
                        <h2>Lecimy</h2>
                        <button>
                            Rzeszow <FaAngleDown />
                        </button>
                    </div>

                    <div className={styles.kalendarSearchBox}>
                        <FaSearch className={styles.kalendarSearch1} />
                        <input placeholder="Belt of impressions" className={styles.kalendarSearch2} />
                    </div>
                </div>

                <div className={styles.calendarContainer}>
                    <div className={styles.month}>{format(today, "MMMM yyyy")}</div>
                    <div className={styles.daysContainer}>
                        {days.map((day) => (
                            <button onClick={() => setDate(format(day, "d"))} key={day.toISOString()}>
                                <div key={day.toISOString()} className={styles.day}>
                                    <div>{format(day, "EE")}</div>
                                    <div className={styles.kalendarDay}>{format(day, "d")}</div>{" "}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.kalendarFiltering}>
                    <ul>
                        <li>All</li>
                        <li>Stand Up</li>
                        <li>Concerts</li>
                        <li>Sport</li>
                        <li>Entertainment</li>
                    </ul>
                </div>
            </div>
            <DashboardEvents />
            <DashboardOrganisator />
        </div>
    );
}

export default DashboardMain;

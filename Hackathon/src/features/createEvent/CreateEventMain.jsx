import styles from "./CreateEventMain.module.css";

function CreateEventMain() {
    return (
        <div className={styles.container}>
            <h2>Create Event</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="eventName" name="eventName" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="eventDescription">Event Description:</label>
                    <textarea id="eventDescription" name="eventDescription" className={styles.input}></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="eventCategory">Event Category:</label>
                    <select id="eventCategory" name="eventCategory" className={styles.input}>
                        <option value="sport">Sport</option>
                        <option value="concert">Concert</option>
                        <option value="exhibition">Exhibition</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="eventLocation">Event Location:</label>
                    <input type="text" id="eventLocation" name="eventLocation" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="eventImage">Event Image:</label>
                    <input type="file" id="eventImage" name="eventImage" accept="image/*" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="startTime">Start Time:</label>
                    <input type="datetime-local" id="startTime" name="startTime" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="endTime">End Time:</label>
                    <input type="datetime-local" id="endTime" name="endTime" className={styles.input} />
                </div>
                <button type="submit" className={styles.button}>
                    Create
                </button>
            </form>
        </div>
    );
}

export default CreateEventMain;

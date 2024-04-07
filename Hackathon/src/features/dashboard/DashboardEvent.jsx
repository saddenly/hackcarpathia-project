import styles from "./DashboardEvent.module.css";

function DashboardEvent({ image }) {
    return (
        <div key={image.name}>
            <div className={styles.sliderImage1} key={image.name}>
                <img src={image.image} alt={image.name} className={styles.sliderImage2} />
                <div className={styles.sliderInfo}>{image.description}</div>
            </div>
        </div>
    );
}

export default DashboardEvent;

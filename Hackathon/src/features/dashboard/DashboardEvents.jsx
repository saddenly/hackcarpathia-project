import DashboardEvent from "./DashboardEvent";
import styles from "./DashboardEvents.module.css";

const images = [
    { image: "../public/images/photo1712415953.png", name: "first", description: "Talent Show" },
    { image: "../public/images/photo1712416044.png", name: "second", description: "Christmas Party" },
    { image: "../public/images/Rectangle 34.png", name: "third", description: "Juwenalia 2024" },
    { image: "../public/images/Rectangle29.png", name: "fourth", description: "Asian Day" },
    { image: "../public/images/Rectangle31.png", name: "fifth", description: "IT Career Day" },
    { image: "../public/images/Rectangle32.png", name: "six", description: "Tour de WSIIZ" },
];

function DashboardEvents() {
    return (
        <div className={styles.container}>
            {images.map((image) => (
                <DashboardEvent image={image} key={image.name} />
            ))}
        </div>
    );
}

export default DashboardEvents;

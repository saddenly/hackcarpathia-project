import styles from "./EventsRightSide.module.css";

const images = [
    {
        image: "../public/images/Rectangle29.png",
        name: "first",
        title: "Asian Day",
        description:
            "Students from Asia shared the culture, history and traditions, of the countries they come from, and then their presentations were complemented by costume and dance shows and tasting of Asian dishes.",
    },
    {
        image: "../public/images/Rectangle 34.png",
        name: "second",
        title: "Meeting with People Can Fly",
        description:
            "Students of Game Design & Development had a unique opportunity to meet experts from the renowned People Can Fly, a Polish computer game producer.",
    },
    {
        image: "../public/images/Rectangle 35.png",
        name: "third",
        title: "Juwelina 2024",
        description:
            "29. edycja Rzeszowskich Juwenaliów to dwa dni wyśmienitej i wyczekiwanej zabawy, która rozpocznie się 10 maja tradycyjnym otwarciem na Rzeszowskim Rynku!",
    },
];

function EventsRightSide() {
    return (
        <div className={styles.container}>
            {images.map((image) => (
                <div key={image.title}>
                    <img src={image.image} alt={image.name} className={styles.ssss} />
                    <div className={styles.title}>{image.title}</div>
                    <div className={styles.description}>{image.description}</div>
                </div>
            ))}
        </div>
    );
}

export default EventsRightSide;

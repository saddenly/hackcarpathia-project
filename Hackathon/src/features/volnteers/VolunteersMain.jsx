import styles from "./VolunteersMain.module.css";

const images = [
    {
        image: "../public/images/Rectangle 51.png",
        name: "Mary I Holden",
        hobby: "Travel lover. Wannabe twitter ninja. Passionate social media enthusiast.",
    },
    {
        image: "../public/images/Rectangle 52.png",
        name: "Dennis S Blanford",
        hobby: "Internet Marketing,Foreign Languages,Geocaching",
    },
    {
        image: "../public/images/Rectangle 53.png",
        name: "Myra S Wilson",
        hobby: "Reader. Music enthusiast. Tv junkie. Creator. Amateur alcohol fanatic. Pop culture fanatic.",
    },
    { image: "../public/images/Rectangle 54.png", name: "Catherine S Escobedo", hobby: "Brokerage Clerk" },
    {
        image: "../public/images/Rectangle 55.png",
        name: "Dorothy T Smith",
        hobby: "Forestry and Conservation Science Teacher, Postsecondary",
    },
];

function VolunteersMain() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Volunteers</div>
            <div>
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

            {images.map((image) => (
                <div className={styles.volunterInfo} key={image.name}>
                    <div className={styles.volunterInfo1}>
                        <img src={image.image} className={styles.volunterInfo1} alt={image.name} />
                    </div>
                    <div className={styles.volunterInfo2}>
                        <p className={styles.namePerson}>{image.name}</p>
                        <p>{image.hobby}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VolunteersMain;

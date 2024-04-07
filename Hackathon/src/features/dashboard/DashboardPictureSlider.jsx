import styles from "./DashboardPictureSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    { image: "../public/images/photo1712415953.png", name: "first", description: "Talent Show" },
    { image: "../public/images/photo1712416044.png", name: "second", description: "Christmas Party" },
    { image: "../public/images/Rectangle 34.png", name: "third", description: "Juwenalia 2024" },
    { image: "../public/images/Rectangle29.png", name: "fourth", description: "Asian Day" },
    { image: "../public/images/Rectangle31.png", name: "fifth", description: "IT Career Day" },
    { image: "../public/images/Rectangle32.png", name: "six", description: "Tour de WSIIZ" },
];

function DashboardPictureSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {images.map((image) => (
                    <div className={styles.sliderImage1} key={image.name}>
                        <img src={image.image} alt={image.name} className={styles.sliderImage2} />
                        <div className={styles.sliderInfo}>{image.description}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default DashboardPictureSlider;

import { useState } from "react";
import styles from "./EventsLeftSide.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function EventsLeftSide() {
    const [priceRange, setPriceRange] = useState([0, 999]);

    const handlePriceChange = (event) => {
        const newPriceRange = [parseInt(event.target.value[0]), parseInt(event.target.value[1])];
        setPriceRange(newPriceRange);
    };

    return (
        <div className={styles.container}>
            <div className={styles.map1}>
                <MapContainer center={[50.04132, 21.99901]} zoom={7} scrollWheelZoom={false} className={styles.map}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[50.04132, 21.99901]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className={styles.categories}>
                <div>Categories</div>
                <ul>
                    <li>
                        <button>Sport</button>
                    </li>
                    <li>
                        <button>Concert</button>
                    </li>
                    <li>
                        <button>Exhibition</button>
                    </li>
                    <li>
                        <button>Entertainment</button>
                    </li>
                    <li>
                        <button>Master class</button>
                    </li>
                    <li>
                        <button>Stand-up</button>
                    </li>
                </ul>
            </div>
            <div className={styles.priceSlider}>
                <div>Price Range</div>
                <input type="range" min="0" max="999" step="1" className={styles.slider} />
                <div></div>
            </div>
        </div>
    );
}

export default EventsLeftSide;

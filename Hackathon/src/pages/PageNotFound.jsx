import styles from "./PageNotFound.module.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.middleNotFound}>
            <div>
                <h1>404</h1>
                <span>Not Found</span>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default PageNotFound;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div styles={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout;

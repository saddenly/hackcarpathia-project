import EventsLeftSide from "./EventsLeftSide";
import EventsRightSide from "./EventsRightSide";

function EventsMain() {
    return (
        <div style={{ display: "flex", width: "1170px", marginTop: "100px", justifyContent: "space-between" }}>
            <EventsLeftSide />
            <EventsRightSide />
        </div>
    );
}

export default EventsMain;

import { GoogleMap, MarkerF } from "@react-google-maps/api";
import LoadGoogleMaps from "./LoadGoogleMaps/LoadGoogleMaps";
import "./style.scss";

const EventLocation = () => {
  const markerPosition = {
    lat: -19.922660446548775,
    lng: -43.99225168075262,
  };

  return (
    <section className="event-location">
      <LoadGoogleMaps>
        <GoogleMap
          center={markerPosition}
          zoom={15}
          mapContainerStyle={{ height: "400px", width: "100%" }}
        >
          <MarkerF position={markerPosition} />
        </GoogleMap>
      </LoadGoogleMaps>
    </section>
  );
};

export default EventLocation;

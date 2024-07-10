// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./style.scss";

const EventLocation = () => {
  const markerPosition = {
    lat: -19.922660446548775,
    lng: -43.99225168075262,
  };

  return (
    <section className="event-location">
      {/* @ts-ignore */}
      {/* <Map
        google={google}
        zoom={15}
        initialCenter={markerPosition}
        center={markerPosition}
      >
        <Marker position={markerPosition} />
      </Map> */}
      <LoadScript googleMapsApiKey="AIzaSyDL-lJpjYLj-uezxBDFauPEYosi1eIEosc">
        <GoogleMap center={markerPosition} zoom={15}>
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

// export default GoogleApiWrapper((props) => ({
//   apiKey: "AIzaSyDL-lJpjYLj-uezxBDFauPEYosi1eIEosc",
// }))(EventLocation);

export default EventLocation;

// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./style.scss";
import Placeholder from "../../components/Placeholder";

const EventLocation = () => {
  const markerPosition = {
    lat: -19.922660446548775,
    lng: -43.99225168075262,
  };

  return (
    <section className="event-location">
      <LoadScript
        googleMapsApiKey="AIzaSyDL-lJpjYLj-uezxBDFauPEYosi1eIEosc"
        libraries={["places"]}
        loadingElement={<Placeholder />}
      >
        <GoogleMap center={markerPosition} zoom={15}>
          <MarkerF position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

export default EventLocation;

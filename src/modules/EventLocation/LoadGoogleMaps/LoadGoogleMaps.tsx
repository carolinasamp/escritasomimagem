import { LoadScript } from "@react-google-maps/api";
import Placeholder from "../../../components/Placeholder";

const LoadGoogleMaps = ({ children }: { children: JSX.Element }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDL-lJpjYLj-uezxBDFauPEYosi1eIEosc"
      libraries={["places"]}
      loadingElement={<Placeholder />}
    >
      {children}
    </LoadScript>
  );
};

export default LoadGoogleMaps;

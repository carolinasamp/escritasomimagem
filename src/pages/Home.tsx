import { banner1 } from "../assets";
import Carousel from "../components/Carousel";
import Schedule from "../components/Schedule";
import EventLocation from "../modules/EventLocation";
import NextPageBox from "../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../routes";

const slides = [
  {
    image: banner1,
    title: "title",
  },
  {
    image: "https://via.placeholder.com/900x500",
    title: "title",
  },
  {
    image: "https://via.placeholder.com/1000x600",
    title: "title",
  },
];

const Home = () => {
  return (
    <>
      <Carousel slides={slides} />
      <Schedule />
      <EventLocation />
      <NextPageBox
        url={RoutesURL.THEMATIC_AREAS}
        title={RoutesTitle.THEMATIC_AREAS}
      />
    </>
  );
};

export default Home;

import InternalTabs from "../../components/InternalTabs/InternalTabs";
import MusicProgrammingList from "../../infos/music-programming.list";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesTitle, RoutesURL, SubRoutesTitle } from "../../routes";
import "./style.scss";

const MusicProgramming = () => {
  return (
    <>
      <h3 className="title-page">{SubRoutesTitle.MUSIC_PROGRAMMING}</h3>
      <section className="esi-pages esi-music-programming box">
        <InternalTabs list={MusicProgrammingList} />
      </section>
      <NextPageBox url={RoutesURL.SPEAKERS} title={RoutesTitle.SPEAKERS} />
    </>
  );
};

export default MusicProgramming;

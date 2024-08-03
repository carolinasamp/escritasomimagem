import InternalTabs from "../../components/InternalTabs/InternalTabs";
import MusicProgrammingList from "../../infos/music-programming.list";
import { SubRoutesTitle } from "../../routes";
import "./style.scss";

const MusicProgramming = () => {
  return (
    <section className="esi-pages esi-music-programming box">
      <h3 className="title-page">{SubRoutesTitle.MUSIC_PROGRAMMING}</h3>

      <InternalTabs list={MusicProgrammingList} />
    </section>
  );
};

export default MusicProgramming;

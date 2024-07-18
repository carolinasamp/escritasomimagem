import { useState } from "react";
import Search from "../../components/Search";
import { SpeakersList } from "../../infos/speakers.list";
import ListPerson from "../../modules/ListPerson";
import { PersonType } from "../../modules/ListPerson/types";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";
import "./style.scss";
import { useViewport, ViewportEnum } from "../../context/Viewport.context";

const Speakers = () => {
  const viewport = useViewport();

  const [filteredList, setFilteredList] = useState<PersonType[]>(SpeakersList);

  const handleSearch = (results: PersonType[]) => {
    setFilteredList(results);
  };

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">Conferencistas</h3>
      )}
      <div className="esi-pages-search">
        <Search list={SpeakersList} onSearch={handleSearch} />
      </div>
      <section className="esi-pages speakers box">
        {filteredList.length ? (
          <ListPerson list={filteredList} className="list-person--speakers" />
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </section>
      <NextPageBox
        url={RoutesURL.SHORT_COURSES}
        title={RoutesTitle.SHORT_COURSES}
      />
    </>
  );
};

export default Speakers;

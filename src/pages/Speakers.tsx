import { SpeakersList } from "../infos/speakers.list";
import ListPerson from "../modules/ListPerson/ListPerson";
import NextPageBox from "../modules/NextPageBox";
import { RoutesTitle, RoutesURL } from "../routes";

const Speakers = () => {
  return (
    <>
      <section className="internal-pages speakers">
        <ListPerson list={SpeakersList} />
      </section>
      <NextPageBox
        url={RoutesURL.ORGANIZING_COMMITTEE}
        title={RoutesTitle.ORGANIZING_COMMITTEE}
      />
    </>
  );
};

export default Speakers;

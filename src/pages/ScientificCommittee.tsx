import { ScientificCommitteeList } from "../infos/scientific-committee.list";
import ListPerson from "../modules/ListPerson";
import NextPageBox from "../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../routes";

const ScientificCommittee = () => {
  return (
    <>
      <section className="internal-pages scientific-committee">
        <ListPerson list={ScientificCommitteeList} />
      </section>

      <NextPageBox url={RoutesURL.HOME} title={RoutesTitle.HOME} />
    </>
  );
};

export default ScientificCommittee;

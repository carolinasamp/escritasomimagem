import { ScientificCommitteeList } from "../../infos/scientific-committee.list";
import ListPerson from "../../modules/ListPerson";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";

const ScientificCommittee = () => {
  return (
    <>
      <section className="esi-pages esi-scientific-committee">
        <h3 className="title-page">Comitê cientifíco</h3>
        <div className="box">
          <ListPerson list={ScientificCommitteeList} />
        </div>
      </section>

      <NextPageBox url={RoutesURL.SERVICE} title={RoutesTitle.SERVICE} />
    </>
  );
};

export default ScientificCommittee;

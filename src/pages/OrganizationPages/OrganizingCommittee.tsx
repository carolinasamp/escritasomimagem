import { OrganizingCommitteeList } from "../../infos/organizing-committee.list";
import ListPerson from "../../modules/ListPerson";
import NextPageBox from "../../modules/NextPageBox";
import { SubRoutesTitle, SubRoutesURL } from "../../routes";

const OrganizingCommittee = () => {
  return (
    <>
      <section className="esi-pages esi-organizing-committee">
        <h3 className="title-page">Comissão organizadora</h3>
        <div className="box">
          <ListPerson list={OrganizingCommitteeList} />
        </div>
      </section>

      <NextPageBox
        url={SubRoutesURL.SCIENTIFIC_COMMITTEE}
        title={SubRoutesTitle.SCIENTIFIC_COMMITTEE}
      />
    </>
  );
};

export default OrganizingCommittee;

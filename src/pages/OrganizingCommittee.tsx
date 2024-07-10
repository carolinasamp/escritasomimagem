import { OrganizingCommitteeList } from "../infos/organizing-committee.list";
import ListPerson from "../modules/ListPerson";
import NextPageBox from "../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../routes";

const OrganizingCommittee = () => {
  return (
    <>
      <section className="internal-pages organizing-committee">
        <ListPerson list={OrganizingCommitteeList} />
      </section>

      <NextPageBox
        url={RoutesURL.SCIENTIFIC_COMMITTEE}
        title={RoutesTitle.SCIENTIFIC_COMMITTEE}
      />
    </>
  );
};

export default OrganizingCommittee;

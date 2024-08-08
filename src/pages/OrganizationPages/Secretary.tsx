import { imageUrls } from "../../assets";
import ListPerson from "../../modules/ListPerson";
import NextPageBox from "../../modules/NextPageBox";
import { SubRoutesURL, SubRoutesTitle } from "../../routes";

const Secretary = () => {
  return (
    <>
      <section className="esi-pages esi-scientific-committee">
        <h3 className="title-page">Secretária</h3>
        <div className="box">
          <ListPerson
            list={[
              { name: "Joicy Silva (UFMG)", picture: imageUrls.JoicySilva },
            ]}
          />
        </div>
      </section>

      <NextPageBox
        url={SubRoutesURL.MONITORS}
        title={SubRoutesTitle.MONITORS}
      />
    </>
  );
};

export default Secretary;

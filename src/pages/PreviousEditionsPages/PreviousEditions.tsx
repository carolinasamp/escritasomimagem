import { useViewport, ViewportEnum } from "../../context/Viewport.context";
import { PreviousEditionInfo } from "../../infos/previous-editions.list";
import "./style.scss";

const PreviousEdition = () => {
  const viewport = useViewport();

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">Edições anteriores</h3>
      )}
      <section className="esi-pages esi-previous-edition box">
        {PreviousEditionInfo.map((item, index) => {
          const { content, images } = item;
          return (
            <div key={index} className="esi-previous-edition-content">
              <p dangerouslySetInnerHTML={{ __html: content }} />
              <div className="esi-previous-edition-image-wrapper">
                {images.map((image, indexImage) => {
                  const { src, alt, link } = image;

                  return (
                    <div
                      key={indexImage}
                      className="esi-previous-edition-image-content"
                    >
                      <img {...{ src, alt }} />
                      {link && (
                        <a href={link} target="_blank">
                          Baixar
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PreviousEdition;

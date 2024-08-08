import LazyLoadImage from "../../components/LazyLoadImage";
import { useViewport, ViewportEnum } from "../../context/Viewport.context";
import { PreviousEditionInfo } from "../../infos/previous-editions.list";
import { RoutesTitle } from "../../routes";
import "./style.scss";

const PreviousEdition = () => {
  const viewport = useViewport();

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">{RoutesTitle.PREVIOUS_EDITION}</h3>
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
                      <LazyLoadImage {...{ src, alt }} />
                      <caption>{alt}</caption>
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

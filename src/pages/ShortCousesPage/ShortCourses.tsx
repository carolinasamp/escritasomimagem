import "./style.scss";
import { SubRoutesTitle, SubRoutesURL } from "../../routes";
import NextPageBox from "../../modules/NextPageBox";
import { ShortCoursesInfo } from "../../infos/short-courses.list";
import LazyLoadImage from "../../components/LazyLoadImage";
import { useViewport, ViewportEnum } from "../../context/Viewport.context";

const ShortCourses = () => {
  const viewport = useViewport();

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">Minicursos</h3>
      )}
      <section className="esi-pages esi-short-courses box">
        <ol className="esi-short-courses-wrapper">
          {ShortCoursesInfo.map((shourtCouse, index) => {
            const { title, taught_by, day_and_hour, content, images } =
              shourtCouse;

            return (
              <li key={index} className="esi-short-courses-item">
                <div className="esi-short-courses-content">
                  <h3>
                    {index + 1}. {title}
                  </h3>
                  {/* <b>Ministrada por: {taught_by}</b> */}
                  <div className="esi-short-courses-wrapper-schedule-images">
                    <b>{day_and_hour}</b>
                    <div className="esi-short-courses-wrapper-images">
                      {images.map((image, i) => {
                        const { src, alt } = image;
                        return (
                          <div className="esi-short-courses-image" key={i}>
                            <figure>
                              <LazyLoadImage src={src} alt={`Foto de ${alt}`} />
                            </figure>
                            <small className="esi-short-courses-image-caption">
                              {alt}
                            </small>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="esi-short-courses-content-image">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <NextPageBox
        url={SubRoutesURL.ORGANIZING_COMMITTEE}
        title={SubRoutesTitle.ORGANIZING_COMMITTEE}
      />
    </>
  );
};

export default ShortCourses;

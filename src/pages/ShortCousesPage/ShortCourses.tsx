import "./style.scss";
import { RoutesTitle, SubRoutesTitle, SubRoutesURL } from "../../routes";
import NextPageBox from "../../modules/NextPageBox";
import { ShortCoursesInfo } from "../../infos/short-courses.list";
import LazyLoadImage from "../../components/LazyLoadImage";
import { useViewport, ViewportEnum } from "../../context/Viewport.context";

const ShortCourses = () => {
  const viewport = useViewport();

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">{RoutesTitle.SHORT_COURSES}</h3>
      )}
      <section className="esi-pages esi-short-courses box">
        <ol className="esi-short-courses-wrapper">
          {ShortCoursesInfo.map((shourtCouse, index) => {
            const {
              title,
              day_and_hour,
              content,
              image: { alt, src },
            } = shourtCouse;

            return (
              <li key={index} className="esi-short-courses-item">
                <div className="esi-short-courses-content">
                  <h3>
                    {index + 1}. {title}
                  </h3>
                  <div className="esi-short-courses-wrapper-schedule-image">
                    <b>{day_and_hour}</b>
                    <figure>
                      <LazyLoadImage {...{ src, alt }} />
                    </figure>
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

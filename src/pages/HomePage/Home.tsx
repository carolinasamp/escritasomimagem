import { bannerPrimary, Video1 } from "../../assets";
import LazyLoadVideo from "../../components/LazyLoadVideo";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";
import "./style.scss";

const Home = () => {
  return (
    <div className="esi-pages esi-home">
      <img className="esi-home-primary-image" src={bannerPrimary} />
      <section className="esi-home-presentation box">
        <p>
          O grupo de pesquisa{" "}
          <strong>Intermídia: estudos sobre a intermidialidade</strong> promove,
          em parceria com o PPGLetras da PUC Minas, o PÓSLIT da UFMG, a Escola
          de Música da UFMG e o PROMEL da UFSJ, o{" "}
          <strong>IV Colóquio internacional escrita, som, imagem.</strong> Nesta
          edição, o evento propõe o tema{" "}
          <strong>Materialidades em questão.</strong> Por meio dele, busca-se
          refletir sobre o papel das condições técnicas de produção e recepção
          das obras artísticas e literárias no processo de construção de
          sentidos. Trata-se de uma questão que se tornou fundamental na
          contemporaneidade, uma vez que a expansão vertiginosa das tecnologias
          de produção, processamento, circulação e recepção da escrita, do som e
          da imagem vem provocando transformações profundas nas práticas
          sociais, culturais e nas formas de produção artística e literária.
          Para os estudos de intermidialidade, particularmente, a consciência da
          materialidade das mídias (artísticas ou não), seus suportes e
          tecnologias, e os modos possíveis de relações entre elas, seja como
          copresença, interação, transferência, circulação, entre outras, se
          constitui na sua própria condição de existência.
        </p>
      </section>
      <section className="esi-home-videos">
        <h2>Vídeos</h2>
        <LazyLoadVideo src={Video1} className="esi-home-videos-player" />
      </section>
      <NextPageBox url={RoutesURL.SPEAKERS} title={RoutesTitle.SPEAKERS} />
    </div>
  );
};

export default Home;

import { AnchorIcon, imageUrls } from "../../assets";
import LazyLoadImage from "../../components/LazyLoadImage";
import LazyLoadVideo from "../../components/LazyLoadVideo";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";
import "./style.scss";

const Home = () => {
  return (
    <div className="esi-pages esi-home">
      <section className="esi-home-banner-primary">
        <LazyLoadVideo src={imageUrls.BannerPrimaryVideo} autoPlay loop muted />
      </section>
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

        <a
          className="esi-home-presentation-link"
          target="_blank"
          href="https://www.even3.com.br/escritasomimagem4/"
        >
          Para se inscrever como ouvinte, clique aqui <AnchorIcon />
        </a>
      </section>
      <section className="esi-home-videos">
        <figure className="esi-home-image-with-text">
          <div className="esi-home-image-text">
            <p>Sobre o conceito de Materialidade, assista à</p>
            <h2>Capsula Intermídia</h2>
          </div>
          <LazyLoadImage src={imageUrls.Background} alt="Background padrão" />
        </figure>
        <LazyLoadVideo
          src={imageUrls.MaterialidadeVideo}
          className="esi-home-videos-player"
        />
      </section>
      <section className="esi-home-images">
        <figure className="esi-home-image-with-text">
          <div className="esi-home-image-text">
            <p>
              Os convidados internacionais do{" "}
              <i>IV Colóquio internacional escrita, som, imagem</i> também
              realizarão as seguintes atividades antes do início do evento:{" "}
            </p>
          </div>
          <LazyLoadImage src={imageUrls.Background} alt="Background padrão" />
        </figure>
        <div className="esi-home-images-wrapper">
          <LazyLoadImage src={imageUrls.Evento1} alt="Evento 1" />
          <LazyLoadImage src={imageUrls.Evento2} alt="Evento 2" />
        </div>
      </section>
      <NextPageBox url={RoutesURL.SPEAKERS} title={RoutesTitle.SPEAKERS} />
    </div>
  );
};

export default Home;

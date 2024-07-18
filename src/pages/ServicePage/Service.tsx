import { AnchorIcon } from "../../assets";
import { useViewport, ViewportEnum } from "../../context/Viewport.context";
import EventLocation from "../../modules/EventLocation";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";
import "./style.scss";

const Service = () => {
  const viewport = useViewport();

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">Serviços</h3>
      )}
      <section className="esi-pages esi-service box">
        <div className="esi-service-content">
          <p>
            Estamos muito felizes por receber você em Beagá! Separamos algumas
            dicas para que sua estadia na cidade seja agradável e cheia de boas
            experiências.
          </p>
          <br />
          <p>
            O <b>IV Colóquio Internacional Escrita, Som, Imagem</b> acontecerá
            no campus da{" "}
            <a target="_blank" href="https://maps.app.goo.gl/tBHP277wXCMAjJ9E7">
              PUC Minas, localizado no bairro Coração Eucarístico
              <AnchorIcon />
            </a>
            , localizado no bairro Coração Eucarístico. Porém, indicamos que
            você se hospede na Savassi ou no Lourdes, regiões que concentram
            alguns dos principais pontos de interesse da cidade. Na região da
            Savassi, próximo a Praça Liberdade, recomendamos o{" "}
            <a
              target="_blank"
              href="https://all.accor.com/hotel/5298/index.pt-br.shtml"
            >
              Ibis Belo Horizonte - Liberdade
              <AnchorIcon />
            </a>
            . Já na região mais próxima ao Lourdes e ao Centro, o{" "}
            <a target="_blank" href="https://www.bhplaza.com.br/">
              Hotel Belo Horizonte Plaza
              <AnchorIcon />
            </a>{" "}
            é uma boa escolha.
          </p>
          <br />
          <p>
            Separamos também algumas dicas de restaurantes. O histórico{" "}
            <a target="_blank" href="https://g.co/kgs/YEEgp5c">
              Edifício Arcângelo Maletta
              <AnchorIcon />
            </a>{" "}
            reúne bares, sebos e comércio variado. O restaurante mais
            tradicional é a{" "}
            <a target="_blank" href="https://www.cantinadolucas.com.br/">
              Cantina do Lucas
              <AnchorIcon />
            </a>
            , tombada como patrimônio cultural da cidade. Já no{" "}
            <a target="_blank" href="https://www.instagram.com/laschicasvegan/">
              Las Chicas Vegan
              <AnchorIcon />
            </a>
            , localizado na sobreloja do edifício, você encontra boas opções
            veganas.
          </p>
          <p>
            Uma opção tradicional para apreciar a culinária mineira é o
            restaurante{" "}
            <a target="_blank" href="https://www.donalucinha.com.br/">
              Dona Lucinha
              <AnchorIcon />
            </a>
            , mas na Savassi você encontrará muitas outras boas opções de
            alimentação. Já no Centro/Lourdes você pode aproveitar para conhecer
            os famosos pães de queijo recheados da{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/apaodequeijaria/"
            >
              Pão de Queijaria
              <AnchorIcon />
            </a>
            .
          </p>
          <p>
            Para quem se interessa por ambientes alternativos e não se incomoda
            com cadeiras desconfortáveis, a culinária irreverente da{" "}
            <a target="_blank" href="https://www.instagram.com/cozinhatupis/">
              Cozinha Tupis
              <AnchorIcon />
            </a>{" "}
            é imperdível. Em caso de filas, sugerimos incluir o nome e telefone
            na lista de espera e visitar as muitas lojinhas do Mercado Novo
            enquanto aguarda por sua mesa.
          </p>
          <br />
          <p>
            Caso queira tomar um café, temos algumas boas opções de ambientes
            aconchegantes na região. Localizado na Praça da Liberdade, no térreo
            do CCBB, você encontra o{" "}
            <a target="_blank" href="https://www.instagram.com/cafedomuseu/">
              Café do Museu
              <AnchorIcon />
            </a>
            . Caso opte por se hospedar na região central, o{" "}
            <a target="_blank" href="https://www.instagram.com/benditocafebh/">
              Bendito Café
              <AnchorIcon />
            </a>{" "}
            é uma boa escolha. Outra boa opção é o{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/cafe_com_letras/"
            >
              Café com Letras
              <AnchorIcon />
            </a>
            , com opções veganas e eventos culturais.
          </p>
          <br />
          <p>
            Por fim, a dica que não pode faltar: considere se organizar para
            ficar um dia a mais na cidade para visitar o{" "}
            <a target="_blank" href="https://www.inhotim.org.br/visite/">
              Instituto Inhotim
              <AnchorIcon />
            </a>
            . Localizado em Brumadinho, o Inhotim tem um importante acervo de
            arte contemporânea disposto em cerca de vinte galerias, cercadas por
            áreas de Mata Atlântica preservada e jardins. Você pode visitar o
            Inhotim de carro ou de ônibus. De terça a domingo, saem ônibus da
            Rodoviária de Belo Horizonte e do Hotel Holiday Inn, localizado na
            Savassi.
          </p>
          <p>Estamos aguardando você para o Colóquio!</p>
        </div>
        <EventLocation />
      </section>
      <NextPageBox
        url={RoutesURL.PREVIOUS_EDITION}
        title={RoutesTitle.PREVIOUS_EDITION}
      />
    </>
  );
};

export default Service;

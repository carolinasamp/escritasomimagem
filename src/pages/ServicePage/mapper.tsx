import { AnchorIcon, imageUrls } from "../../assets";
import LazyLoadImage from "../../components/LazyLoadImage";

const WhereToStay = () => {
  return (
    <>
      <p>
        O <b>IV Colóquio Internacional Escrita, Som, Imagem</b> acontecerá no
        campus da{" "}
        <a target="_blank" href="https://maps.app.goo.gl/tBHP277wXCMAjJ9E7">
          PUC Minas, localizado no bairro Coração Eucarístico
          <AnchorIcon />
        </a>
        <div className="esi-service-image">
          <LazyLoadImage src={imageUrls.PUCMinas} alt="Imagem da PUC Minas" />
          <caption>PUC Minas</caption>
        </div>
      </p>
      <br />
      <p>
        Caso opte por se hospedar em um Airbnb próximo à universidade, saiba
        que, em seu entorno, há grande oferta de serviços, como padarias,
        supermercados, farmácias, bares e restaurantes. Boa parte deles se
        concentram na Praça da Federação, mais conhecida como “
        <a
          target="_blank"
          href="https://bhideias.com.br/bares-coracao-eucaristico/"
        >
          pracinha do Coreu
          <AnchorIcon />
        </a>
        ”
      </p>
      <br />
      <p>
        Caso deseje se hospedar em um hotel próximo à PUC Minas, propomos as
        seguintes opções:
      </p>
      <ul className="esi-service-list-recommendations">
        <li>
          <a target="_blank" href="https://www.hotelbeagaconvention.com.br/">
            Hotel Beagá Convention Expominas by MHB
            <AnchorIcon />
          </a>
          <p>
            Av. Amazonas, 5110 Bairro Nova Suíssa, Belo Horizonte, Minas Gerais
            30421-026 Brasil.
          </p>
          <p>Telefone: (31) 3064-6900</p>
          <p>
            1.5 km de PUC MINAS - Pontifícia Universidade Católica De Minas
            Gerais
          </p>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.intercityhoteis.com.br/hotel-belo-horizonte/hotel-intercity-bh-expo/19/"
          >
            Intercity BH Expo
            <AnchorIcon />
          </a>{" "}
          <p>
            Avenida Amazonas 7702 Gameleira, Belo Horizonte, Minas Gerais
            30510-000 Brasil
          </p>
          <p>Telefones: (31) 3307-5800 | (31) 99559-4169.</p>
          <p>
            2.0 km de PUC MINAS - Pontifícia Universidade Católica De Minas
            Gerais
          </p>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.online-reservations.com/?hotelid=1044595&format=simple&lang=pt&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnW0rCDwARdRcqct3y9AY2_iGMtq1fC5qhkMaoDGVizEvwzo1iQHysIaAp_QEALw_wcB"
          >
            Front Expominas
            <AnchorIcon />
          </a>
          <p>
            Rua Curral Del Rei, 598 Padre Eustáquio, Belo Horizonte, Minas
            Gerais 30720-220 Brasil
          </p>
          <p>Telefone: (31) 3658-9832</p>
          <p>
            2.0 km de PUC MINAS - Pontifícia Universidade Católica De Minas
            Gerais
          </p>
        </li>
      </ul>
      <br />
      <p>
        Salientamos que, embora sejam hotéis próximos à universidade, o percurso
        entre eles e a PUC Minas não é muito agradável para ser realizado a pé,
        além de ser um trajeto complexo para quem não conhece a região. Assim, o
        traslado demandará uma corrida de táxi ou por aplicativo de transporte.
      </p>
      <br />
      <p>
        Caso deseje aproveitar a estadia para uma incursão pela vida cultural de
        Beagá, recomendamos que você se hospede na Savassi ou no Lourdes,
        regiões que concentram alguns dos principais pontos de interesse da
        cidade.
      </p>
      <br />
      <p>Nessa região, recomendamos os seguintes hotéis: </p>
      <ul className="esi-service-list-recommendations">
        <li>
          <a
            target="_blank"
            href="https://sandiegohoteis.com.br/san-diego-suites-lourdes/"
          >
            San Diego Suítes Lourdes
            <AnchorIcon />
          </a>
          <p>Av. Álvares Cabral, 1181 - Lourdes</p>
          <p>Telefones: (31) 3339-3000 | (31) 3181 – 0320</p>
        </li>
        <li>
          <a target="_blank" href=" https://www.h2platinum.com.br/">
            H2 Platinum - Belo Horizonte
            <AnchorIcon />
          </a>{" "}
          <p>Av. Olegário Maciel, 1748 - Lourdes</p>
          <p>Telefone: (31) 2125-3800</p>
          <p>WhatsApp: +55 31 2125-3800</p>
          <p>E-mail: reservas@h2platinum.com.br</p>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.ihg.com/holidayinn/hotels/br/pt/belo-horizonte/bhzbh/hoteldetail?cm_mmc=GoogleMaps--HI--BR-_-BHZBH "
          >
            H2 Platinum - Belo Horizonte
            <AnchorIcon />
          </a>{" "}
          <p>Rua Professor Moraes, 600 – Savassi</p>
          <p>Telefone: (31) 3064-6555</p>
          <p>Reservas: 0800 770 0858</p>
          <p>Contato: reservas.bhz@ihg.com</p>
        </li>
        <li>
          <a target="_blank" href="https://www.bhplaza.com.br/ ">
            Belo Horizonte Plaza
            <AnchorIcon />
          </a>
          <p>
            Rua dos Timbiras, 1660 - Lourdes, Belo Horizonte - MG, 30140-061
          </p>
          <p>Telefone: +55 (31) 3247-4700</p>
          <p>E-mail: reservas.bhpz@mhbhotelaria.com.br</p>
        </li>
      </ul>
      <br />
      <p>
        Por fim, a dica que não pode faltar: considere se organizar para ficar
        um dia a mais na cidade para visitar o{" "}
        <a target="_blank" href="https://www.inhotim.org.br/visite/">
          Instituto Inhotim
          <AnchorIcon />
        </a>
        . Localizado em Brumadinho, o Inhotim tem um importante acervo de arte
        contemporânea disposto em cerca de vinte galerias, cercadas por áreas de
        Mata Atlântica preservada e jardins. Você pode visitar o Inhotim de
        carro ou de ônibus. De terça a domingo, saem ônibus da Rodoviária de
        Belo Horizonte e do Hotel Holiday Inn, localizado na Savassi.
      </p>
      <p>Estamos aguardando você para o Colóquio!</p>
    </>
  );
};

const HowToGetThere = () => (
  <>
    <b>Aeroporto</b>
    <p>
      A principal porta de entrada para os turistas que chegam a Belo Horizonte
      é o Aeroporto Internacional de Belo Horizonte - Confins (CNF). O aeroporto
      está localizado no município de Confins, a 40 km do centro de BH, e nele
      chegam sempre os voos de São Paulo, Rio de Janeiro, Brasília, Salvador,
      Porto Alegre, Belém e outras cidades brasileiras, além de voos
      internacionais (Tap-Portugal).
    </p>
    <br />
    <b>Como chegar e/ou sair do Aeroporto de Confins?</b>
    <p>
      O percurso entre o Aeroporto de Confins e Belo Horizonte pode ser
      realizado de carro, em táxis credenciados, Uber ou nos ônibus da Conexão
      Aeroporto, que realizam a rota para pontos específicos do centro de BH.
      <br />A empresa Conexão Aeroporto oferece dois diferentes veículos, um
      econômico (para o Terminal Rodoviário) e outro executivo (para o Terminal
      Álvares Cabral). Os ônibus partem da entrada principal do aeroporto, onde
      há um guichê que realiza a venda das passagens. Quem quiser evitar filas
      pode fazer a compra do tíquete ainda na sala onde são retiradas as
      bagagens.
    </p>
    <br />
    <b>Rodoviária</b>
    <p>
      Outra forma de chegar é pelo Terminal Rodoviário, localizado na Praça Rio
      Branco, 100. Por estar no centro da cidade, a rodoviária possui fácil
      acesso a qualquer ponto através ônibus, táxi ou Uber.
    </p>
    <br />
    <h3>PUC Minas</h3>

    <b>De Uber ou 99</b>
    <p>
      A PUC Minas se encontra a mais ou menos 20 minutos do centro da cidade e
      as corridas ficam em média R$ 20,00 a R$ 25,00.
    </p>
    <br />
    <b>De ônibus ou metrô</b>
    <p>
      Prefere utilizar o transporte público? Recomendamos o uso dos aplicativos{" "}
      <i>Moovit e Google Maps</i> para checar quais as linhas e horários mais
      próximos de onde estiver hospedado. As passagens de ônibus custam R$ 5,25
      e as de metrô R$ 5,50. Se estiver em torno da Praça da Liberdade, na
      região da Savassi, recomendamos pegar a linha 4111, no ponto da Rua
      Alagoas, 549, descer no ponto da Rua Coração Eucarístico de Jesus, 340, e
      seguir na direção noroeste por 2 minutos até a entrada da universidade.
    </p>
  </>
);

const CafeRestaurantTips = () => {
  return (
    <>
      <p>
        Separamos também algumas dicas de restaurantes. O histórico{" "}
        <a target="_blank" href="https://g.co/kgs/YEEgp5c">
          Edifício Arcângelo Maletta
          <AnchorIcon />
        </a>{" "}
        reúne bares, sebos e comércio variado. O restaurante mais tradicional é
        a{" "}
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

      <br />
      <p>
        Uma opção tradicional para apreciar a culinária mineira é o restaurante{" "}
        <a target="_blank" href="https://www.donalucinha.com.br/">
          Dona Lucinha
          <AnchorIcon />
        </a>
        , mas na Savassi você encontrará muitas outras boas opções de
        alimentação. Já no Centro/Lourdes você pode aproveitar para conhecer os
        famosos pães de queijo recheados da{" "}
        <a target="_blank" href="https://www.instagram.com/apaodequeijaria/">
          Pão de Queijaria
          <AnchorIcon />
        </a>
        .
      </p>
      <p>
        Para quem se interessa por ambientes alternativos e não se incomoda com
        cadeiras desconfortáveis, a culinária irreverente da{" "}
        <a target="_blank" href="https://www.instagram.com/cozinhatupis/">
          Cozinha Tupis
          <AnchorIcon />
        </a>{" "}
        é imperdível. Em caso de filas, sugerimos incluir o nome e telefone na
        lista de espera e visitar as muitas lojinhas do Mercado Novo enquanto
        aguarda por sua mesa.
      </p>
      <br />
      <p>
        Caso queira tomar um café, temos algumas boas opções de ambientes
        aconchegantes na região. Localizado na Praça da Liberdade, no térreo do
        CCBB, você encontra o{" "}
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
        <a target="_blank" href="https://www.instagram.com/cafe_com_letras/">
          Café com Letras
          <AnchorIcon />
        </a>
        , com opções veganas e eventos culturais.
      </p>
    </>
  );
};

export { WhereToStay, HowToGetThere, CafeRestaurantTips };

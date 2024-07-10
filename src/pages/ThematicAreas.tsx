import "./style.scss";
import { RoutesTitle, RoutesURL } from "../routes";
import NextPageBox from "../modules/NextPageBox";

const ThematicAreas = () => {
  return (
    <>
      <section className="internal-pages thematic">
        <p>
          O grupo de pesquisa{" "}
          <strong>Intermídia: estudos sobre a intermidialidade</strong> convida
          pesquisadores e artistas interessados no estudo das relações entre a
          Literatura, as Artes e as Mídias a submeterem seus trabalhos no
          <strong> IV Colóquio internacional escrita, som, imagem.</strong>{" "}
          Nesta edição, o evento, organizado pelo Grupo Intermídia, pela PUC
          Minas, pela UFMG e pela UFSJ, propõe o tema{" "}
          <strong>Materialidades em questão.</strong> Por meio dele, espera-se
          receber contribuições que busquem refletir sobre o papel das condições
          técnicas de produção e recepção das obras artísticas e literárias no
          processo de construção de sentidos. Trata-se de uma questão que se
          tornou fundamental na contemporaneidade, uma vez que a expansão
          vertiginosa das tecnologias de produção, processamento, circulação e
          recepção da escrita, do som e da imagem vem provocando transformações
          profundas nas práticas sociais, culturais e nas formas de produção
          artística e literária. Para os estudos de intermidialidade,
          particularmente, a consciência da materialidade das mídias (artísticas
          ou não), seus suportes e tecnologias, e os modos possíveis de relações
          entre elas, seja como copresença, interação, transferência,
          circulação, entre outras, se constitui na sua própria condição de
          existência. Dentro dessa perspectiva, convidamos pesquisadores e
          artistas a submeterem seus trabalhos para um dos seguintes{" "}
          <strong>eixos temáticos:</strong>
        </p>
        <ol>
          <li>
            <h3>O livro como forma expressiva</h3>
            <p>
              Práticas editoriais; história dos objetos impressos; livro de
              artista; livro ilustrado e livro-objeto.
            </p>
          </li>
          <li>
            <h3>Materialidades dos suportes</h3>
            <p>
              Processos criativos de justaposição, sobreposição, combinação e
              colagem de palavras e imagens em páginas impressas, telas, muros,
              entre outros.
            </p>
          </li>
          <li>
            <h3>Poéticas digitais</h3>
            <p>
              Novas experiências de produção, circulação e recepção literária no
              mundo digital, como a instapoesia, o audiobook , a poesia digital,
              o Wattpad, entre outros.
            </p>
          </li>
          <li>
            <h3>Transposições e transmidiações</h3>
            <p>
              Análise das transformações entre produtos de mídia com atenção
              especialmente voltada aos modos como diferentes suportes, relações
              intersemióticas e condições históricas e culturais operam nos
              processos de construção de sentidos.
            </p>
          </li>
          <li>
            <h3>Multimodalidade e leitura</h3>
            <p>
              A experiência de leitura em diferentes suportes; o papel dos
              recusos multimodais nas práticas de leitura; processos
              perceptivo-cognitivos envolvidos na produção de significados em
              diferentes sistemas semióticos.
            </p>
          </li>
          <li>
            <h3>Reverberações sonoras</h3>
            <p>
              Relações entre palavra, som e música; canção; poesia sonora; voz e
              performance; poesia de slam; cultura sonora; o disco como objeto
              artístico; da partitura à gravação digital como suportes sonoros;
              a utilização musical de fontes sonoras menos tradicionais.
            </p>
          </li>
          <li>
            <h3>Espacialidades e sensorialidades</h3>
            <p>
              Formas de criação que, de alguma forma, envolvam processos de
              interação sensorial, como instalações, videogames, experiências
              hápticas proporcionadas pelo audiovisual ou técnicas mistas
              empregadas nas artes plásticas.
            </p>
          </li>
          <li>
            <h3>Materialidades e diferença cultural</h3>
            <p>
              Processos criativos que coloquem em evidência tanto técnicas e
              tecnologias de culturas não-hegemônicas quanto os modos como elas,
              em um ato de resistência, se apropriam e subvertem os usos
              habituais que as culturas hegemônicas dão ao corpo, aos
              dispositivos técnicos e às práticas artísticas.
            </p>
          </li>
          <li>
            <h3>Intermidialidade e arqueologia das mídias</h3>
            <p>
              História dos dispositivos e das técnicas de produção artística e
              literária; processos de remediação e representação de mídias;
              práticas de criação com o emprego de tecnologias anacrônicas.
            </p>
          </li>
          <li>
            <h3>Materialismos , ontologias , objetos</h3>
            <p>
              Implicações das novas concepções de materialismo da filosofia
              contemporânea para o estudo dos fenômenos artísticos, literários e
              midiáticos; realismo especulativo e ontologia orientada aos
              objetos; representação dos objetos na arte, na literatura e nas
              mídias.
            </p>
          </li>
        </ol>
      </section>
      <NextPageBox url={RoutesURL.SPEAKERS} title={RoutesTitle.SPEAKERS} />
    </>
  );
};

export default ThematicAreas;

import { imageUrls } from "../../assets";
import LazyLoadImage from "../../components/LazyLoadImage";
import ListPeople from "../../modules/ListPerson";
import { PersonType } from "../../modules/ListPerson/types";

const MusicsInfoPresentation1: PersonType[] = [
  {
    name: "Caroline Peres",
    picture: imageUrls.CarolinaPeres,
    details:
      "Natural de Porto Alegre, Rio Grande do Sul, bacharel em Canto lírico pela Universidade Federal de Pelotas–RS, mestre e doutoranda em Música na linha de pesquisa Performance Musical pela Universidade Federal de Minas Gerais, sob a orientação da Profa. Dra. Ana Cláudia Assis e coorientação da Profa. Dra. Cecília Nazaré de Lima. Sua pesquisa se desenvolve sobre questões identitárias regionais na canção de Câmara produzida no Rio Grande do Sul na primeira metade do século XX. Atualmente é professora substituta do curso de Bacharelado em Música – Canto, na Universidade Federal de Pelotas.",
  },
  {
    name: "Hélcio Vaz",
    picture: imageUrls.HelcioVaz,
    details:
      "Natural de Belo Horizonte-MG, graduou-se em piano pela Escola de Música da UFMG, na classe do prof. Miguel Rosselini, e é mestre em Performance Musical pela mesma instituição, orientado pela profa. Guida Borghoff. É detentor de diversos prêmios em concursos nacionais de piano, e participou dos festivais “Música nas Montanhas”, em Poços de Caldas (2005), FEMUSC, em Jaraguá do Sul (2007 e 2008), Semana da música de Ouro Branco (2007) e Semana de Música Antiga da UFMG (2007 e 2009). Helcio tem atuado como recitalista e camerista em Belo Horizonte e interior do estado, e, atualmente, é organista da Igreja de São Sebastião, em Belo Horizonte, pianista do Madrigal Concentus e pianista correpetidor da Escola de Música da UFMG.",
  },
  {
    name: "Frederico Richter (1932-2023)",
    picture: "",
    details:
      "Natural de Novo Hamburgo, Rio Grande do Sul, iniciou os seus estudos musicais ainda na infância. Estudou na Universidade Federal do Rio Grande do Sul e obteve o doutorado em 1962. Entre os anos de 1979 e 1981, realizou pós-doutorado na McGilll University, no Canadá. Richter adotou o cognome de Frerídio, pelo qual é conhecido na área musical. Foi professor da Universidade Federal de Santa Maria por 33 anos, dedicou-se à música moderna e pós-moderna, e foi o introdutor da música eletrônica no Rio Grande do Sul. ",
  },
];

const MusicsInfoPresentation2: PersonType[] = [
  {
    name: "Fernando Rocha",
    picture: imageUrls.FernandoRocha,
    details:
      "Professor de percussão da UFMG, formado pela UNESP, com Mestrado pela UFMG, Doutorado pela McGill University (Canadá) e Pós-Doutorado pela Universidade da Virgínia (EUA). Como intérprete de música contemporânea, estreou mais de 50 obras, colaborando com compositores como Douglas Boyce, Lewis Nielson (EUA), Almeida Prado, Silvio Ferraz, Roberto Victorio, Sérgio Freire, Maurício de Bonnis, Maurício Dottori, Sérgio Rodrigo, Alexandre Lunsqui (Brasil), Nicolas Gilbert, Brian Cherney, Geof Holbrook (Canadá), João Pedro Oliveira (Portugal) e Daniel Blinkhorn (Austrália). Já se apresentou nos mais importantes festivais de música do Brasil e também na Argentina, Chile, Uruguai, EUA, Portugal, França, Alemanha e Canadá. Seu trabalho contínuo em música de câmara inclui sua participação no grupo Plurisons, no Duo Qattus (com a celista Elise Pittenger) e no grupo Tectum (percussão e eletrônica). Ele também é diretor do grupo Sonante 21 (ligado ao programa de Pós-Graduação da UFMG) e fundador do Grupo de Percussão da UFMG. Fernando Rocha tem se dedicado a curadoria de eventos de música e, atualmente, é diretor do Conservatório UFMG.",
  },
];

const MusicsInfoPresentation3: PersonType[] = [
  {
    name: "Rogério Vasconcelos Barbosa ",
    picture: imageUrls.RogerioVasconcelos,
    details:
      "Graduou-se em Composição pela Escola de Música da UFMG, em Belo Horizonte. Completou o Doutorado em Composição no Instituto de Artes da UFRGS, em Porto Alegre.  Entre seus professores estão H. J. Koellreutter, Dante Grela, Oiliam Lana e Antônio Carlos Borges Cunha. Apresentou composições em diversos eventos de projeção nacional e internacional, em Belo Horizonte, Ouro Preto, Rio de Janeiro, São Paulo, Porto Alegre, Rosário (Argentina), Valdivia (Chile), Aveiro (Portugal), Lisboa (Portugal) e Münster (Alemanha). É professor associado da Escola de Música da UFMG, onde leciona composição, análise e disciplinas da área de tecnologia musical. Desde 2010 integra o corpo de professores do PPGMUS (Programa de Pós-graduação) na linha de pesquisa Processos Analíticos e Criativos. Em seu trabalho de composição, ferramentas tecnológicas participam de modo íntimo da gênese e desdobramento das ideias criativas. Sua produção inclui peças de câmara, orquestra e meios eletroacústicos.",
  },
];

const MusicsInfoPresentation4: PersonType[] = [
  {
    name: "Sérgio Freire",
    picture: imageUrls.SergioFreire,
    details:
      "Professor associado da Escola de Música da Universidade Federal de Minas Gerais, atuando nas áreas de composição, orquestração e sonologia. Desde 1998 coordena o Laboratório de Performance com Sistemas Interativos (LaPIS). É graduado em composição pela UFMG (1990), mestre em sonologia pelo Instituto de Sonologia, Haia, Holanda (1993). Possui doutorado em comunicação e semiótica pela PUC-SP (2004). Realizou estágio sandwich no Estúdio Eletrônico da Musik Akademie da Basileia, Suiça. Foi coordenador do Programa de Pós-Graduação em Música da UFMG, entre 2009 e 2015. Coordena, na UFMG, a colaboração internacional entre esta instituição e a Universidade McGill (Montreal, Canadá).",
  },
];

const MusicsInfoPresentation5: PersonType[] = [
  {
    name: "Caio Costa Campos",
    picture: imageUrls.CaioCostaCampos,
    details:
      "Compositor e improvisador natural de Belo Horizonte. Licenciado em música e bacharel em composição pela UFMG, atualmente é mestrando pela UFMG/UT Austin. Desenvolve pesquisa e trabalhos artísticos focados na compreensão de música e composição como performance, se apropriando de conhecimentos, inspirações e técnicas de outras artes performáticas na exploração do espaço performático da música. Tem experiência com programação criativa, sistemas interativos, eletrônica ao vivo e exploração da fisicalidade e práticas corporificadas em performances musicais. costacaiocampos@gmail.com",
  },
];

const MusicsInfoPresentation6: PersonType[] = [
  {
    name: "Sebastián Barroso",
    picture: imageUrls.SebastianBarroso,
    details:
      "Formado em violão pela Universidad Nacional de Cuyo. Nasceu na província de Mendoza, Argentina, em 1985, e começou sua formação musical aos 14 anos de idade. Em 2005, ingressou na FADUN Cuyo para formalizar seus estudos no curso de violão, sob a orientação da professora Cristina Dueñas. Possui mestrado em interpretação musical pela Universidade Federal de Minas Gerais. Atualmente, está cursando o doutorado no PPGMUS da Universidade Federal de Minas Gerais.",
  },
  {
    name: "Eduardo Campolina",
    picture: imageUrls.EduardoCampolina,
    details:
      "Professor da área de Composição na Escola de Música da Universidade Federal de Minas Gerais. Participa da Coordenação do ECrIS - Espaço de Criação e Investigação Sonora - no Conservatório UFMG, espaço dedicado à pesquisa e divulgação da música contemporânea ligada às tecnologias. Concentra suas pesquisas, atualmente, na área de Performance Experimental, com foco na ontologia de Gilles Deleuze/Félix Guattari, e na composição instrumental associada aos meios tecnológicos.",
  },
  {
    name: "Marina Marcon Moreira",
    picture: imageUrls.MarinaMarcon,
    details:
      "Possui doutorado em música pela Universidade Federal de Minas Gerais, sob a orientação do professor Dr. Rogério Vasconcelos Barbosa, e atua como sound designer para produções audiovisuais. Seu trabalho artístico surge da relação entre som e música para imagens em movimento.",
  },
];

const MusicProgrammingWednesday = () => {
  return (
    <div className="music-programming-wednesday">
      <header>
        <h2>Espetáculo Multimídia: Música, Tecnologia e Outras Artes</h2>
      </header>

      <section className="intro">
        <p>
          No início do século XX, várias correntes impulsionaram o pensamento
          musical para caminhos diversos de possibilidades expressivas, entre
          elas o dodecafonismo, que se apresentou como um novo formato de
          organização dos 12 sons musicais, diametralmente contrastante aos
          princípios da tonalidade. Também os avanços tecnológicos que
          decorreram a partir daquele século trouxeram não apenas novas formas
          de interação entre a música e outras artes, mas novas reflexões sobre
          a própria materialidade da arte musical. Nesse espetáculo,
          interpretado por professores, alunos e ex-alunos do Programa de
          Pós-Graduação em Música da UFMG, as peças são exemplares dos novos
          rumos da expressão musical, seja pelo uso de uma série dodecafônica
          nas canções de Richter, pela exploração de distintos objetos e fontes
          sonoras, pela experimentação de diferentes configurações
          performáticas, pela colaboração de sons eletrônicos, imagens e
          inteligência artificial na construção de sentidos, e, ainda, pelo
          deslocamento da ênfase no som para a ênfase na fisicalidade da
          performance.
        </p>
      </section>

      <section className="details">
        <h2>Direção Artística/Organização</h2>

        <ListPeople
          list={[
            {
              name: "Cecília Nazaré de Lima",
              picture: imageUrls.CeciliaNazare,
              details:
                "Compositora, membro do grupo de pesquisa Intermídia e professora da Escola de Música da UFMG",
            },
          ]}
        />

        <h3>Três Canções sobre uma Série (1969)</h3>
        <ul>
          <li>
            Intérpretes: Caroline Peres (voz/soprano) e Hélcio Vaz (piano)
          </li>
          <li>Compositor: Frederico Richter</li>
        </ul>
        <p>
          Frederico Richter (1932-2023), em 1969, durante a sua segunda fase
          composicional denominada atonal-serial, compôs o ciclo de canções para
          canto e piano “Três canções sobre uma série”. Os poemas utilizados por
          Richter e que deram o nome a cada uma das canções, Madrigal, O anel de
          vidro e A estrela, são de Manuel Bandeira, e o título do ciclo se
          refere ao fato de que as três canções são compostas sobre uma mesma
          série dodecafônica, princípio composicional explorado por compositores
          no início do século XX.
        </p>

        <ListPeople list={MusicsInfoPresentation1} />

        <h3>Starboard (2016)</h3>
        <ul>
          <li>Intérprete: Fernando Rocha</li>
          <li>Compositores: Fernando Rocha e Peter Bussigel</li>
        </ul>
        <p>
          “Starboard” é resultado da colaboração entre Fernando Rocha e o
          criador de instrumentos e artista multimídia Peter Bussigel. É um
          instrumento conectado a um computador e feito de madeira, pregos e
          molas, materiais que são explorados por diferentes baquetas e técnicas
          de execução, gerando uma variedade de sons que são amplificados e
          processados eletronicamente. Os sensores adicionados ao instrumento e
          sua manipulação criam duas texturas exploradas durante a peça: uma
          muito densa (como uma grande nuvem de sons) e a outra que traz uma
          sensação de groove, sobre o qual o performer improvisa. Todos os sons
          eletrônicos são criados em tempo real pelo computador.
        </p>

        <ListPeople list={MusicsInfoPresentation2} />

        <h3>Esboços (2024) – Animação de Curta Duração</h3>
        <ul>
          <li>Compositor: Rogério Vasconcelos</li>
        </ul>
        <p>
          “Esboços” consiste em três vídeos/animações de curta duração,
          experimentos com modelos de inteligência artificial para a geração de
          imagens. Cada vídeo gira ao redor de uma ideia central. A música cria
          uma camada adicional de sentidos, interagindo com as imagens e
          intensificando as sensações.
        </p>

        <ListPeople list={MusicsInfoPresentation3} />

        <h3>Pandora (2005/2023), para Caixa-Clara e Sistema Interativo</h3>
        <ul>
          <li>Intérprete: Sérgio Freire</li>
          <li>Compositor: Sérgio Freire</li>
        </ul>
        <p>
          Esta peça explora uma caixa-clara tocada à distância. A partir da
          simulação de toques e sonoridades tradicionais do instrumento, vai-se
          ampliando o leque de sonoridades e de seus gestos de controle: sons
          contínuos, vocálicos, iterativos, e citações percussivas. Se o
          instrumento modificado permanece o mesmo há quase 20 anos, o mesmo não
          acontece com os controladores digitais, que estão em sua quarta
          geração, e exigem um trabalho de transcrição gestual a cada nova
          versão. Pandora é também o nome desse instrumento que vem sendo
          utilizado em outras peças e por outros músicos, às vezes assumindo uma
          voz independente, às vezes funcionando como uma mini-sala com uma
          acústica própria, na qual diferentes sons se encontram.
        </p>

        <ListPeople list={MusicsInfoPresentation4} />

        <h3>Miniatura1 / facePiece (2024)</h3>
        <ul>
          <li>Intérpretes: Caio Costa Campos, Elisa Renner e Angel Blanco</li>
          <li>Compositor: Caio Costa Campos</li>
        </ul>
        <p>
          Rostos são fontes de expressão em diversas performances, sejam elas
          artísticas ou as mais corriqueiras e diárias. Essa peça é uma primeira
          exploração de faces em que os músculos faciais, com suas complexidades
          e limitações de movimento, são tomados como materiais base de uma
          composição performada em 'uníssono' por três rostos, buscando outras
          possíveis articulações de expressão, algumas destas, talvez, próximas
          de uma musicalidade.
        </p>

        <ListPeople list={MusicsInfoPresentation5} />

        <h3>
          Cheio de Dedos, para Violão, Trilha Eletroacústica e Vídeo (2023)
        </h3>
        <ul>
          <li>Intérprete: Sebastián Barroso (violão)</li>
          <li>
            Realizadores: Eduardo Campolina, Sebastián Barroso, Marina Marcon
          </li>
        </ul>
        <p>
          “Cheio de Dedos” é uma performance experimental construída a partir de
          duas referências principais: Cheio de Dedos, peça para violão solo do
          compositor e violonista brasileiro Guinga, e Mediocracia, gravura do
          artista plástico argentino Cristóbal Farmache. A performance se apoia
          na ontologia de Gilles Deleuze/Félix Guattari, e se caracteriza pela
          tentativa de associar manifestações artísticas de naturezas distintas,
          seja musical, pictórica, poética, teatral, visual (fotografia, vídeo,
          pintura), em um objeto artístico que pode se apresentar instável, pela
          diversidade dos materiais explorados, mas também coeso, pelas linhas
          de força colocadas em jogo em sua construção.
        </p>

        <ListPeople list={MusicsInfoPresentation6} />
      </section>
    </div>
  );
};

const MusicProgrammingThursday = () => {
  return (
    <div className="music-programming-thursday">
      <header>
        <h2>Apresentação do filme-concerto “Cantos da Memória”</h2>
      </header>

      <div className="esi-presentation-film">
        <LazyLoadImage
          src={imageUrls.BackgroundFilm}
          alt={`Imagem do filme "Contos da Memória"`}
        />
      </div>

      <section className="intro">
        <p>
          Em homenagem à querida colega <b>Mônica Pedrosa de Pádua</b> (1961 –
          2024)
        </p>
        <blockquote>
          <p>
            “Meu coração nesse momento é um castelo de cristal
            <br />
            transparente, emitindo e recebendo amor”
          </p>
          <footer>Mônica Pedrosa de Pádua</footer>
        </blockquote>
      </section>

      <section className="film-info">
        <h3>Cantos da Memória – Filme-Concerto</h3>
        <p>
          A cantora Mônica Pedrosa estrela o “filme-concerto” Cantos da Memória,
          que conta também com a participação do violonista Fernando Araújo. O
          filme é a versão autônoma do espetáculo multimídia homônimo, concebido
          pela cantora. Nele, mesclando música, cena e vídeo, ela e o violonista
          apresentam ao vivo o ciclo <strong>Canções de Adélia</strong> –
          composto por Paulo C. Chagas sobre poemas de Adélia Prado. Um dos
          elementos do espetáculo é um filme criado especialmente para dialogar
          com a música, dirigido por Leo Branco e Lucas Campos. Na versão
          autônoma que veremos, este filme é entremeado de trechos de uma
          performance do duo filmado no Culver Center for the Arts, em
          Riverside, Califórnia.
        </p>
        <p>
          No filme, cujo argumento foi criado pela cantora e a partir de poemas
          de Adélia Prado, escolhidos em estreita colaboração com o compositor,
          uma mulher “nem jovem nem velha” rememora sua história, enquanto
          pendura objetos em um varal, em um processo de autocompreensão e
          libertação.
        </p>
        <p>
          O trabalho é resultado de pesquisa de pós-doutorado de ambos os
          intérpretes, e teve apoio da FAPEMIG, do programa CAPES PrInt e do
          EARS - Experimental Acoustics Research Studio da Universidade da
          Califórnia, Riverside, onde foi gravada a trilha sonora.
        </p>
      </section>

      <section className="acknowledgments">
        <h3>Intérpretes</h3>
        <ul>
          <li>Mônica Pedrosa, soprano</li>
          <li>Fernando Araújo, violão</li>
        </ul>

        <h3>Compositor</h3>
        <p>Paulo C. Chagas (1953)</p>
        <p>
          <strong>Canções de Adélia</strong> [poemas de Adélia Prado (1935)]
        </p>
        <ul>
          <li>O intenso brilho</li>
          <li>Amor feinho</li>
          <li>A serenata</li>
          <li>Orfandade</li>
          <li>Meditação</li>
          <li>Contradança</li>
        </ul>

        <p>
          Filmado em Riverside (Califórnia), Rio Acima, Nova Lima e Belo
          Horizonte (MG)
        </p>
        <p>
          Áudio gravado no EARS – Experimental Acoustics Research Studios,
          University of California, Riverside
        </p>
        <p>Apoio financeiro: FAPEMIG</p>
        <p>
          Apoios: CAPES, Laboratório da Canção Brasileira da Escola de Música da
          UFMG, EARS/University of California, Riverside
        </p>
      </section>

      <section className="credits">
        <h3>Ficha Técnica</h3>
        <dl>
          <dt>Concepção, argumento e atuação:</dt>
          <dd>Mônica Pedrosa</dd>

          <dt>Direção e edição:</dt>
          <dd>Leonardo Branco e Lucas Campos</dd>

          <dt>Roteiro:</dt>
          <dd>Mônica Pedrosa, Leonardo Branco e Lucas Campos</dd>

          <dt>Direção de arte:</dt>
          <dd>Bruna Maynart</dd>

          <dt>Produção executiva e direção de produção:</dt>
          <dd>Gabriel Quintão</dd>

          <dt>Contrarregra e efeitos:</dt>
          <dd>Guilherme Gnomo</dd>

          <dt>Maquiagem:</dt>
          <dd>Lucas Taborda</dd>

          <dt>Pesquisa cênica:</dt>
          <dd>Bya Braga e Mônica Pedrosa</dd>

          <dt>Uma produção de:</dt>
          <dd>Limão Capeta Filmes</dd>

          <dt>Engenheiro de som:</dt>
          <dd>Bradley Butterworth</dd>

          <dt>Edição de som:</dt>
          <dd>Paulo C. Chagas</dd>

          <dt>Mixagem:</dt>
          <dd>Beto Machado</dd>

          <dt>Concerto filmado no:</dt>
          <dd>Culver Center for the Arts/UCR</dd>

          <dt>Filmagem:</dt>
          <dd>Nikolay Maslov</dd>
        </dl>
      </section>
    </div>
  );
};

export { MusicProgrammingWednesday, MusicProgrammingThursday };

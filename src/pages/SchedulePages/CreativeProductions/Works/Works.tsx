import { imageUrls } from "../../../../assets";
import LazyLoadImage from "../../../../components/LazyLoadImage";
import ListPeople from "../../../../modules/ListPerson";
import "../style.scss";

const Works = () => {
  return (
    <>
      <section className="esi-pages esi-creative-productions box">
        <div className="content-works">
          <h2>Eliana Ambrosio</h2>
          <a target="_blank" href="https://youtu.be/HbjZDiDqI7I">
            Ninhos
          </a>
          <p>
            Luz e água em sua vital miscibilidade conduzem a narrativa deste
            conjunto composto por oito imagens, fruto de um diário de
            isolamento. Uma configuração encontra-se suspensa, mas não
            inexistente; revela-se ao olhar sonhador. Pela feitura
            caleidoscópica, a potência irradia da semente, ninho em crisálida
            Aqua luminescente. A sequência parte da especulação visual de uma
            fotografia que se abstrai e requisita uma evasão das formas. O
            movimento rotacional revela a irradiação como princípio gerador e
            multiplicador de forças. A cada manipulação digital as imagens
            sutilmente se transformam, ganhando uma luminescência aquarelada que
            aguça os sentidos e cria relações simbólicas. A obra, concebida no
            momento da pandemia, traz angústias e ao mesmo tempo abertura para
            devaneios e vem ao encontro do uso de novas mídias, as gravuras
            digitais, na impossibilidade da utilização presencial do ateliê. A
            transparência existente nos meios virtuais se transforma ao ser
            materializada com a impressão Fine Art, ganhando outro corpo, ainda
            que de forma sutil e simbólica. Assim, mudança midiática do universo
            digital para a materialidade física do papel levam a questionamentos
            sobre a influência dos meios na leitura e recepção das imagens, algo
            tão caro de ser debatido em um momento de vertiginosa produção e
            disseminação imagética.
          </p>
        </div>
        <div className="content-works">
          <div className="content-works-title">
            <h2>Arthur Moura Campos</h2>
            <LazyLoadImage
              src={imageUrls.ArthurMouraCampos}
              alt="Arthur Moura Campos"
            />
          </div>

          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://www.amc.art.br/rodagira">RODAGIRA</a>`,
                picture: imageUrls.Rodagira,
                details: `RODAGIRA é o novo poemobjeto de Arthur Moura Campos. Sua forma é
                de um caleidociclo, brinquedo tridimensional que revela
                diferentes letras ao ser manuseado. O poema-objeto vem dentro de
                uma caixa com o título e letras em forma de setas carimbadas já
                indicando o movimento e circularidade propostos na obra. Para
                além das palavras que já estão no título, RODA e GIRA, outras
                combinações de letras podem surgir a partir do sentido e
                movimento com que interagimos com o objeto, tornando-o um poema
                aberto à ação de quem lê.
                <br />A multiplicidade de sentidos e o movimento presentes no
                desenho das letras e estrutura fazem referência a espiralidade
                do tempo e circularidade da vida, ideias caras ao pensamento
                afro diaspórico e das culturas tradicionais. Sua formas, sons,
                cheiros e texturas são um convite à poesia que é verso e
                reverso, causa e efeito, torto e direito, que é o que é.`,
              },
            ]}
          />

          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://www.amc.art.br/palavralada">palavralada</a>`,
                picture: imageUrls.Palavrada,
                details: `Jogo-poema em ambiente social virtual interativo que pode ser
                acessado por Computador e Óculos de Realidade Virtual. O jogo se
                inicia em um universo de ambiência sideral com formas
                geométricas e letras tridimensionais flutuando pelo espaço.
                <br />
                Esse mundo, que é composto por palavras, teve seu movimento
                paralizado por uma nuvem-nave que invadiu seu espaço. O objetivo
                do leitor-jogador é interagir com as palavras para reativar o
                movimento perdido.
                <br />
                A sua estrutura é composta por uma plataforma pentagonal central
                onde os jogadores iniciam sua partida. Dessa plataforma central
                se ramificam cinco percursos que são fases do jogo para serem
                realizadas. Conforme se interage com essas missões acumulam-se
                pontos que levam à conclusão do enredo.
                <br />
                Essa obra foi realizada em parceria com DIVE realities,
                interpretação em Libras por Mão Preta e apoio do Itaú Cultural
                (Chamamento para de projetos no metaverso - 2022.`,
              },
            ]}
          />
        </div>
        <div className="content-works">
          <h2>Rafael Baldam</h2>

          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://www.rafabaldam.com/arte/toda-palavra-leva-tempo">
            Toda palavra leva tempo
          </a>`,
                picture: imageUrls.RafaelBaldam,
                details: `Toda Palavra Leva Tempo é um projeto em desenvolvimento que explora
            diversas relações entre a palavra e o tempo. Toda palavra falada
            leva um tempo para ser dita, é impossível dizê-la toda ao mesmo
            tempo. De forma análoga, a palavra escrita ocupa um espaço por
            extenso, que também corresponde a um tempo a ser percorrido na
            escrita e na leitura. A partir do som e da imagem da palavra, este
            projeto explora maneiras de jogar com a compressão e expansão do
            tempo da fala, com a grafia da palavra, com a sobreposição das
            letras, entre outras formas para tensionar a ideia de que toda
            palavra leva tempo para ser dita. Também há outro sentido, que é a
            demora da palavra em ser construída enquanto ideia, conceito,
            sentimento. A partir de relatos de diversas pessoas, o vídeo revela
            histórias em que a palavra demorou um tempo para poder ser dita. A
            palavra nasce na gente e mora um tempo ali dentro, para depois
            conseguir sair. Um dos objetivos desse projeto é propor diversas
            formas de visualizar a relação entre a palavra e o tempo: gráfica,
            sonora, estática, movimento, texto, etc; justificando assim sua
            intermidialidade.`,
              },
            ]}
          />

          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://www.rafabaldam.com/arte/as-casas-de-dentro">As casas de dentro</a>`,
                picture: imageUrls.AsCasasDeDentro,
                details: `As Casas de Dentro é um projeto de autoria de Rafael Baldam e Bruno
            Geraldi Martins, de intervenção urbana que combina ilustração,
            poesia e espaço urbano para refletir sobre sensações e sentimentos
            que guardamos dentro da gente, dentro de nossas casas e cidades. O
            projeto consiste em 10 ilustrações de plantas arquitetônicas
            "impossíveis" colocadas em tamanho real no espaço público de
            Atibaia-SP. Cada planta indica uma "casa" imaginária que suscita uma
            sensação em relação ao local escolhido para sua implantação na
            cidade. Cada casa acompanha um trecho de um poema, também
            relacionado ao local de implantação e à planta arquitetônica. Este
            projeto foi vencedor do edital Ocupa Atibaia 2022, organizado pela
            Incubadora de Artistas e executado entre 9 e 15 de Maio de 2022 na
            cidade de Atibaia/SP, onde deve ficar por tempo indeterminado. A
            intermidialidade desse projeto se dá no cruzamento entre espaço
            urbano, ilustração e escrita, de modo que todas essas linguagens
            passam a ocupar um espaço físico na cidade, ao mesmo tempo em que
            indicam uma interpretação inversa, a de que estes espaços são
            reflexos de espaços interiores a nós.`,
              },
            ]}
          />
        </div>
        <div className="content-works">
          <h2>Rafael Baldam e Ana Cerqueira</h2>

          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://drive.google.com/drive/folders/16RiKzPclksXf1evUWlseNBBmu0DDRoV2">
            Corte-vivo, uma série de colagens animadas
          </a>`,
                picture: imageUrls.CorteVivo,
                details: `Série de vídeos-colagem que justapõe colagens analógicas com trilhas
            sonoras, animadas digitalmente. A elaboração dos vídeos ocorre em
            três etapas: primeiro, o improviso e a edição do som; segundo, a
            criação analógica das colagens, em papel, a partir do estímulo do
            som; e terceiro, a animação digital que sincroniza som e imagem. Se
            por um lado a atitude dos artistas nasce como um experimento, no
            sentido de criar poesia se afastando da linguagem verbal, por outro,
            é possível ler o movimento por uma chave, ainda assim, linguística.
            Para o Groupe µ a collage, gênero de significação pouco homogêneo, é
            um “ente retórico” (Revue d’Ésthétique n°3/4, 1978, p. 15), pois se
            estrutura em parâmetros e conceitos linguísticos. Isso porque “as
            operações de exclusão, adição, substituição e permutação pelas quais
            as práticas da retórica linguística são geralmente descritas” seriam
            comuns às operadas pela collage. A convivência dos processos
            criativos analógico e digital na produção da série e a combinação
            destas tecnologias fazem parte do processo de construção de sentido
            da obra. Desenvolvidas em formato retangular, as colagens animadas
            permitem exibição em telas ampliadas (como as de televisores), para
            que um observador, ao vê-las em série, visitem um ambiente
            sonoro-visual contínuo.`,
              },
            ]}
          />
        </div>
        <div className="content-works">
          <h2>Ana Cerqueira</h2>

          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://drive.google.com/drive/folders/1KonaeLxxsQ2ShwJ5Be5zVCZcz03Uf6Fw?usp=sharing">
            Febril
          </a><br /><a target="_blank" href="https://open.spotify.com/album/7gvGgf8hdGObdCZuhpc1EV?si=xmwwNQ5MTOK50-ikiwMLlw">
            Spotify
          </a>`,
                picture: imageUrls.Febril,
                details: `Febril é um álbum de seis poemas, resultado da colaboração entre a poeta Ana Persona e o compositor e produtor musical Filipe Miu. A ideia nasceu do desejo de oferecer ao texto um ambiente sonoro, uma expressão sonora que acompanhasse os versos entoados por sua autora. Os poemas foram escritos entre 2018 e 2019, gravados no ano seguinte e então entregues ao compositor da trilha. O músico, que também compõe para cinema, adicionou elementos sonoros à declamação dos poemas, e as imagens evocadas pelos versos encontram na música efeitos que as complementam ou lhes emprestam movimento. Assonâncias e aliterações presentes no texto recebem analogias na composição musical que ora cresce, ora oscila ou rompe com o andamento sem, todavia, cessar a relação dinâmica e interligada entre palavra e som.`,
              },
            ]}
          />
        </div>
        <div className="content-works">
          <div className="content-works-title">
            <h2>Raulino Junior</h2>
            <LazyLoadImage
              src={imageUrls.MovimentoTexto}
              alt="Raulino Junior"
            />
          </div>

          <div className="content-works-body">
            <a
              target="_blank"
              href="https://www.youtube.com/playlist?list=PLSp4O_NlhZMMGczzZHXgL52LKv8Cq9o0q"
            >
              MoViMeNtO-TeXtO
            </a>

            <p>
              MoViMeNtO-TeXtO é um projeto literário que tira o texto do seu
              lugar original, movimentando-o. Por isso, tem a rua como palco.
              Através de composições do cancioneiro nacional, Raulino Júnior,
              idealizador da proposta, declama, de forma dramatizada, as letras
              de canções famosas e também das não tão conhecidas pelo público.
              Para cada declamação, é pensada uma situação dramática. Então, a
              letra é o texto que é dito pelo personagem que Raulino interpreta
              em cada movimentação. É movimento porque faz com que o texto tenha
              outras interpretações possíveis. Um dos objetivos do projeto é
              valorizar os compositores brasileiros.
            </p>
          </div>
        </div>

        <div className="content-works obituario">
          <div className="content-works-title">
            <h2>Marcelo Perillo</h2>
            <LazyLoadImage
              src={imageUrls.MarceloPerillo}
              alt="Marcelo Perillo"
            />
          </div>
          <ListPeople
            list={[
              {
                name: `<a target="_blank" href="https://tropicalsombrio.wordpress.com/2024/04/08/adquira-seu-obituario/">
            Obituário
          </a>`,
                picture: imageUrls.Obituario,
                details: ` "Obituário” é uma obra literária do escritor Marcelo Perilo. Ela
            reúne ilustrações e 7 contos apresentados em folhas avulsas: sem
            cola, costura ou grampo. Essa obra dialoga intimamente com o eixo
            temático "O livro como forma expressiva", pois é um livro-objeto.
            <br />
            "Obituário” é uma produção criativa na intersecção entre literatura,
            design, artes plásticas e jogos. Ela está fortemente articulada à
            noção de "intermidialidade", como se observa a seguir.
            <br />
            1) Essa obra foi elaborada no estilo “tropical sombrio”. Esse estilo
            de escrita se nutre de referências artísticas e literárias lúgubres
            e soturnas;
            <br />
            2) O “tropical sombrio” orientou também a forma e a montagem da
            obra. “Obituário” é uma caixa em formato alusivo à gaveta mortuária.
            A caixa-gaveta serve como jazigo para as folhas avulsas;
            <br />
            3) Cada conto tem uma diagramação específica que se articula com
            cada narrativa. As inspirações para a diagramação são os obituários
            de jornais dos séculos 18 e 19; e poesia concretista;
            <br />
            4) Essa obra é um jogo de montagem. Em uma das faces de cada folha
            avulsa há um pedaço de ilustração inédita. Só é possível observar a
            ilustração na íntegra quando se associa as folhas avulsas.
            <br />
            Em "Obituário", algo está morto. E respira.`,
              },
            ]}
          />
        </div>

        <div className="content-works">
          <h2>Deborah Castro</h2>
          <div className="content-works-body">
            <a target="_blank" href="https://www.instagram.com/dbrh.cstr/">
              O que é esquecido não morre, destaque “não morre”
            </a>

            <p>
              A série O que é esquecido não morre fala, em baixo tom, das
              lembranças largadas em um ponto-cego, ou da eterna saudade do não
              vivido. As obras aqui apontam, com as mãos abaixadas, para as
              memórias que mergulham no esquecimento e se dissolvem no branco da
              página ou sob/sobre o peso de um livro. Entre o que não se sabe
              mais como foi e o que poderia ter sido, o esquecimento é tratado
              como um vazio que não pode ser ocupado. As obras aqui tratam da
              materialidade do livro, do livro-objeto, da página, comunicando
              além da palavra e circundando um silêncio abismal – um lugar onde
              só se enxergam sombras, só se escutam murmúrios. Embora exista
              aqui uma tentativa quase vã de lançarmos um pouco de luz ao
              invisível, sabemos, como afirma Jaa Torrano, que “o que passa
              despercebido, o que está oculto, o não-presente, é o que resvalou
              já no reino do Esquecimento e do Não-Ser.”
            </p>
          </div>
        </div>
        <div className="content-works">
          <div className="content-works-title">
            <h2>Alexandre Lopes</h2>
            <LazyLoadImage
              src={imageUrls.MovimentoTexto}
              alt="Alexandre Lopes"
            />
          </div>

          <div className="content-works-body">
            <a
              target="_blank"
              href="https://www.facebook.com/studio.oh/videos/831047077039995"
            >
              Facebook
            </a>

            <p>
              Proponho o resgate da produção de retratos a partir das construção
              e adaptação de equipamentos fotográficos tradicionais e novas
              tecnologias, criando assim obras únicas e resgatando procedimentos
              analógicos que somados a recursos contemporâneos levam ao público
              tanto o conhecimento destes afazeres históricos, como sua
              interação com memórias e novas possibilidades de produção
              artística.
            </p>
          </div>
        </div>
        <div className="content-works">
          <div className="content-works-title">
            <h2>Welington Dias</h2>
            <LazyLoadImage src={imageUrls.WelingtonDias} alt="Welington Dias" />
          </div>
          <ListPeople
            list={[
              {
                name: `  <a target="_blank" href="https://www.instagram.com/naturamovimento/">
            Naturamovimento
          </a>`,
                picture: imageUrls.Naturamovimento,
                details: `O projeto Naturamovimento tem evoluído ao longo de seis anos,
            estabelecendo conexões entre os Saberes Tradicionais e o Paisagismo.
            Nele se propõe a intervenção artística em espaços abertos,
            funcionando como um trabalho realizado em ateliê ao ar livre. Além
            disso, busca promover reflexões sobre a produção artística e a
            influência dos espaços sensoriais na promoção da saúde e do
            bem-estar. A abordagem inclui um relato da jornada imersiva do
            proponente no universo da Arte Ambiental, na Educação e nos estudos
            sobre Saúde Integral. Explorando experiências de ocupação de espaços
            sem visibilidade ou sem funcionalidade aparente, o projeto demonstra
            como essas experimentações podem gerar novas perspectivas nos
            processos criativos, integrando diversas áreas de conhecimento, como
            Artes Visuais, Botânica e Ciências Socioambientais.`,
              },
            ]}
          />
        </div>
        <div className="content-works">
          <h2>Adriana Ferreira</h2>
          <div className="content-works-body">
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1RUC9nrlOFmMjZfk9ji73zVPYd4B-ioZv"
            >
              Diálogo entre duas materialidades da imagem: Entre arte e
              catalogação científica
            </a>

            <p>
              Com a finalidade de explorar vários diálogos entre mídias, seus
              usos e materialidades (da imagem e do arquivo), essa
              exposição/comunicação confronta dois levantamentos catalográficos
              feitos em dois momentos da história do arquivo e da fotografia. O
              primeiro é aquele realizado pela botânica inglesa Anna Atkins na
              primeira metade do século XIX que gerou exsicatas em cianotipia e
              catalogou diversas espécies de algas das ilhas Britânicas
              publicando sob o título de Photographs of British algae: cyanotype
              impressions. O segundo é composto pelas imagens digitais de
              exsicatas das espécies ameaçadas da Serra do Curral em Belo
              Horizonte, acessadas online via Specieslink. O diálogo entre
              materialidades, diversos suportes e usos tomou forma como corpus
              de trabalho artístico feito a partir das imagens digitais das
              exsicatas em diálogo com o trabalho de Atkins e com a história da
              fotografia no contexto do Grupo Al-Químicos de Criação,
              Experimentação e Pesquisa em Fotografias de Base Química, e de uma
              pesquisa de doutorado em andamento no PPG-Artes da UFMG. Os
              trabalhos em cianotipia frutos desse diálogo entre diferentes
              materialidades e usos da imagem poderão ser apresentados em uma
              exposição no contexto do Colóquio.
            </p>
          </div>
        </div>
        <div className="content-works">
          <h2>Simone Moura</h2>
          <div className="content-works-body">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1p3T9EjUtAZqIheyfrxIIB67_g8ewUnFl/view?usp=sharing"
            >
              Google Drive
            </a>

            <p>
              O trabalho consiste na apresentação dos postais produzidos a
              partir das narrativas de vida de mulheres, idosas em sua maioria,
              moradoras do Aglomerado da Serra, complexo de oito vilas,
              localizadas na região centro-sul da capital. O projeto,
              desenvolvido entre 2019 e 2023, teve como objetivo contar a
              história dessa comunidade a partir do protagonismo das mulheres.
              Sendo assim, ao longo de quase quatro anos foram registradas e
              sistematizadas oitenta e oito entrevistas. A partir desse material
              foram produzidos uma série de relatos disponíveis no Instagram do
              projeto, o roteiro da ficção documental Matriarcas da Serra e os
              postais, mídia a partir da qual será tecido o relato durante o
              Colóquio. Essa partilha da envolvendo o processo de criação dos
              postais terá como foco refletir sobre o uso dessa peça artística e
              de comunicação na localidade periférica, revelando-se um
              importante dispositivo para ativação das narrações de histórias e
              experiências tanto pessoais, quanto coletivos, além de inspirar o
              surgimento de outras iniciativas envolvendo o resgate e a
              valorização de histórias e experiências femininas subalternizadas.
              Durante a apresentação será utilizada a versão digital dos
              postais.
            </p>
          </div>
        </div>
        <div className="content-works">
          <h2>Raul Hirsch</h2>
          <div className="content-works-body">
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1AAROm0ztlKQVV9J-DCpoRbILbMA45-V-?usp=sharing"
            >
              Algumas coisas no fundo do mundo
            </a>

            <p>
              O trabalho se constitui por uma série de poemas versados,
              desenhados ou plotados, organizados através de um livro digital.
              Para a apresentação no colóquio os poemas são disponibilizados,
              digitalmente, em formato de slides (arquivo pdf/pptx) para uma
              ocasional análise e declamação, e em forma de imagens (arquivo
              png) para veiculação em redes sociais. Da poesia, ressalta-se a
              articulação de um argumento implícito para qual a imagem e a
              linguagem compreendem instrumentos insuficientes em apresentar e
              representar o sentido das coisas no mundo em sua verdadeira
              complexidade. O argumento, por sua vez, implica uma posição:
              contestar a obviedade daquilo que nos aparece, daquilo que no
              cotidiano tomamos como verdade e sustentamos por convicção. Por
              isso, nota-se na poesia a exploração de um elemento narrativo
              espectral que contesta a edificação social da realidade, disposta
              no limite entre um passado que só a lembrança atesta e um futuro
              que só a fé garante. Ainda, o espectro rememora a coexistência do
              passado no presente possibilitada pela historicidade das
              ferramentas de representação da cultura humana. Como arquiteto, o
              autor incorpora o espaço enquanto dimensão do problema da
              realidade ao introduzir a linguagem de representação arquitetônica
              como ferramenta poética, conformando uma Arquitetura Estrutural de
              Palavras.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;

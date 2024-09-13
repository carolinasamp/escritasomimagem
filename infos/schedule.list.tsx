import ScheduleContent from "../modules/ScheduleContent";
import { ShortCoursesInfo } from "./short-courses.list";

const ScheduleTuesday = [
  {
    subtitle: ShortCoursesInfo[0].title,
    description: `${ShortCoursesInfo[0].speakers} <br /> <b>Sala: 205 </b>`,
  },
  { subtitle: "Abertura" },
  {
    subtitle: "A voz do poeta ingénuo na era da técnica",
    description: `Osvaldo Silvestre (Universidade de Coimbra, Portugal)
    <br />
    <strong>Local: Auditório do Museu de Ciências Naturais </strong>
    `,
  },
];

const ScheduleWednesday = [
  {
    subtitle:
      "L’avenir d’un champ d’études: quelles perspectives ouvertes par la revue <i>Intermédialités?</i>",
    description: `James Cisneros (Université de Montréal, Canadá)
    <br />
    <strong>Local: Auditório do Museu de Ciências Naturais </strong>
    `,
  },
  {
    description: "",
  },
  {
    description: `
    <ul>
    <li>Mesa 1 - Escritas em Expansão</li>
    <li>Mesa 2 - Fotografia e Literatura</li>
    <li>Mesa 3 - Quadrinhos e Romances Gráficos</li>
    <li>Mesa 4 - Intermidialidade: Provocações Conceituais</li>
    <li>Mesa 5 - Instapoesia, Booktok e Audiolivro</li>
    <li>Mesa 6 - Pensar a MPB</li>
    <li>Mesa 7 - Estudos de Adaptação</li>
    <li>Mesa 8 - Políticas das Imagens em Movimento</li>
    </ul>`,
  },
  {
    subtitle: ShortCoursesInfo[0].title,
    description: `${ShortCoursesInfo[0].speakers} <br /> <b>Sala: 205 </b>`,
  },
  {
    description: "",
  },
  {
    description: `
    <ul>
    <li>Mesa 9 - Pensar a Edição</li>
    <li>Mesa 10 - Palavra, Imagem, Narrativa</li>
    <li>Mesa 11 - Arqueologias da Escrita e da Imagem</li>
    <li>Mesa 12 - Escrever, desenhar, editar</li>
    <li>Mesa 13 - Ritmo e Poesia</li>
    <li>Mesa 14 - Autopublicação no Mundo Digital</li>
    <li>Mesa 15 - Políticas das Adaptações de Jane Austen</li>
    <li>Mesa 16 - Drama em Cena</li>
    <li>Mesa 17 - Multimodalidade e ensino</li>
    </ul>`,
  },
  {
    subtitle: ShortCoursesInfo[1].title,
    description: `${ShortCoursesInfo[1].speakers} <br /> <b>Sala: Laboratório do prédio 42 </b>`,
  },
  {
    description: "",
  },
  {
    description: `
    <div>
    <b>O gesto da performance: corporalidades políticas</b>
    <p>Hernán Ulm (Universidad Nacional de las Artes, Buenos Aires)</p>
    </div>
    <br />
    <div>
    <b>Intermedialidade antes da palavra: Arte total em África e na Afro-Diáspora</b>
    <p>Ricardo Aleixo (Poeta, músico, artista multimídia, performer, produtor cultural)</p>
    </div>
    <strong>Local: Auditório do Museu de Ciências Naturais </strong>
    `,
  },
  {
    subtitle: "Espetáculo multimídia: música, tecnologia e outras artes",
  },
];

const ScheduleThursday = [
  {
    subtitle: "Reescrituras em vertigem: a literatura é a arte do livro?",
    description: `Vera Follain de Figueiredo (PUC-Rio) <br />
    <strong>Local: Auditório do Museu de Ciências Naturais </strong>
    `,
  },
  {
    description: "",
  },
  {
    description: `
    <ul>
    <li>Mesa 18 - Políticas das imagens</li>
    <li>Mesa 19 - Poéticas Digitais</li>
    <li>Mesa 20 - Quadrinhos, Charges e Caricaturas</li>
    <li>Mesa 21 - Grafias de Luz</li>
    <li>Mesa 22 - O Som no Signo</li>
    <li>Mesa 23 - Poderes do Som</li>
    <li>Mesa 24 - Cordéis e Ilumiaras</li>
    <li>Mesa 25 - Corpo, Experiência e Picturalidade na Poesia de Ana Martins Marques</li>
    <li>Mesa 26 - Escrita e Montagem</li>
    </ul>`,
  },
  {
    subtitle: ShortCoursesInfo[2].title,
    description: `${ShortCoursesInfo[2].speakers} <br /> <b>Sala: Sala de aula do Museu</b>`,
  },
  {
    description: "",
  },
  {
    description: `
    <ul>
    <li>Mesa 27 - Arqueologia dos Sentidos</li>
    <li>Mesa 28 - Materialidades Fílmicas</li>
    <li>Mesa 29 - Práticas Editoriais</li>
    <li>Mesa 30 - Poéticas e Plásticas da Escrita</li>
    <li>Mesa 31 - Poesia e Tecnologia</li>
    <li>Mesa 32 - Afinidades Eletivas: Música, Pintura, Literatura</li>
    <li>Mesa 33 - Palavra, Imagem, Visualidade</li>
    <li>Mesa 34 - Transmidiações</li>
    <li>Mesa 35 - Pensar as Mídias no Ensino</li>
    </ul>`,
  },
  {
    subtitle: ShortCoursesInfo[1].title,
    description: `${ShortCoursesInfo[1].speakers} <br /> <b>Local: Laboratório do prédio 42</b>`,
  },
  {
    subtitle: ShortCoursesInfo[2].title,
    description: `${ShortCoursesInfo[2].speakers} <br /> <b>Local: Sala de aula do Museu</b>`,
  },
  {
    description: "",
  },
  {
    description: `
    <div>
    <b>O pensamento é fêmea: algumas observações acerca da relação entre palavra e imagem</b>
    <p>Verônica Stigger (Escritora, pesquisadora e crítica de arte)</p>
    </div>
    <br />
    <div>
    <b>Um breve passeio por algumas produções de poesia visual argentina</b>
    <p>Mario Cámara (Universidad de Buenos Aires/ Universidad de las Artes, Argentina)</p>
    </div>
    <strong>Local: Auditório do Museu de Ciências Naturais </strong>
   `,
  },
  {
    subtitle: "Apresentação do filme-concerto “Cantos da memória”",
  },
];

const ScheduleFriday = [
  {
    subtitle:
      "Fidelity, identity, cultural appropriation - What are the ethics of adaptation and why are they saying such awful things about it?",
    description:
      `Eckart Voigts (Technische Universität Braunschweig, Alemanha)
      <br />
      <strong>Local: Auditório do Museu de Ciências Naturais </strong>
      `,
  },
  {
    description: "",
  },
  {
    description: `
    <ul>
    <li>Mesa 36 - Materialidades nas Artes, na Literatura e no Teatro</li>
    <li>Mesa 37 - Políticas dos Suportes</li>
    <li>Mesa 38 - Ouvindo Vozes</li>
    <li>Mesa 39 - Cinema de Sensações</li>
    <li>Mesa 40 - Lendo Ambiências</li>
    <li>Mesa 41 - Materialidades dos Suportes</li>
    <li>Mesa 42 - Dimensões do Ritmo</li>
    <li>Mesa 43 - Game Studies, Mangás e Animações</li>
    </ul>`,
  },
  {
    subtitle: ShortCoursesInfo[3].title,
    description: `${ShortCoursesInfo[3].speakers} <br /> <b>Local: Sala 104</b>`,
  },
  {
    description: "",
  },
  {
    description: `
    <ul>
    <li>Mesa 44 - Novos Materialismos, Outras Ontologias</li>
    <li>Mesa 45 - Nas Tramas das Letras: Tradução, Tecelagem, Ilustração</li>
    <li>Mesa 46 - Adaptação, Transposição, Transmidiação</li>
    <li>Mesa 47 - Literatura e Digitalidade</li>
    <li>Mesa 48 - Artes Gráficas</li>
    <li>Mesa 49 - Corpos que Importam</li>
    <li>Mesa 50 - Regimes de Escuta</li>
    <li>Mesa 51 - Pensar a Écfrase</li>
    <li>Mesa 52 - Pensar a Colagem</li>
    <li>Mesa 53 - O Som na Literatura</li>
    <li>Mesa 54 - Memória, Ruínas e Experiência Urbana</li>
    </ul>`,
  },
  {
    subtitle: ShortCoursesInfo[4].title,
    description: `${ShortCoursesInfo[4].speakers} <br /> <b>Local: Sala Sala de aula do museu</b>`,
  },
  {
    description: "",
  },
  {
    description: `
    <div>
    <b>Remontagens de palavras e imagens: a materialidade do "cortar-colar"</b>
    <p>Márcia Arbex (UFMG)</p>
    </div>
    <br />
    <div>
    <b>Imagens em imagens: presenças da pintura no cinema</b>
    <p>Fernando Pérez Villalón (Universidad Alberto Hurtado, Chile)</p>
    </div>
    <strong>Local: Auditório do Museu de Ciências Naturais </strong>
    `,
  },
  {
    description: "<b>Sessão de encerramento</b>",
  },
];

const ScheduleList = [
  {
    id: "tuesday",
    tabName: "Terça 10/09",
    content: (
      <ScheduleContent
        items={ScheduleTuesday}
        hoursColumn={[
          {
            title: "Minicurso 1",
            hours: "10:40 - 12:20",
          },
          {
            title: "",
            hours: "18h - 18:20",
          },
          {
            title: "Materialidades da voz",
            hours: "18:20 - 20h",
          },
        ]}
      />
    ),
  },
  {
    id: "wednesday",
    tabName: "Quarta 11/09",
    content: (
      <ScheduleContent
        items={ScheduleWednesday}
        hoursColumn={[
          {
            title: "Questões sobre a intermidialidade",
            hours: "9h - 10:30",
          },
          {
            title: "Coffee Break",
            hours: "10:30 - 11h",
          },
          {
            title: "Mesas Temáticas",
            hours: "11h - 12:30",
          },
          {
            title: "Minicurso 1",
            hours: "11h - 12:30",
          },
          {
            title: "Pausa para almoço",
            hours: "12:30 - 14h",
          },
          {
            title: "Mesas Temáticas",
            hours: "14h - 15:30",
          },
          {
            title: "Minicurso 2",
            hours: "14h - 15:30",
          },
          {
            title: "Coffee Break",
            hours: "15:30 - 16h",
          },
          {
            title: "Materialidades do corpo em performance",
            hours: "16h - 18h",
          },
          {
            title: "Programação musical",
            hours: "18h - 19h",
          },
        ]}
      />
    ),
  },
  {
    id: "thursday",
    tabName: "Quinta 12/09",
    content: (
      <ScheduleContent
        items={ScheduleThursday}
        hoursColumn={[
          {
            title: "Questões sobre a intermidialidade",
            hours: "9h - 10:30",
          },
          {
            title: "Coffee Break",
            hours: "10:30 - 11h",
          },
          {
            title: "Mesas Temáticas",
            hours: "11h - 12:30",
          },
          {
            title: "Minicurso 3",
            hours: "11h - 12:30",
          },
          {
            title: "Pausa para almoço",
            hours: "12:30 - 14h",
          },
          {
            title: "Mesas Temáticas",
            hours: "14h - 15:30",
          },
          {
            title: "Minicurso 2",
            hours: "14h - 15:30",
          },
          {
            title: "Minicurso 3",
            hours: "14h - 15:30",
          },
          {
            title: "Coffee Break",
            hours: "15:30 - 16h",
          },
          {
            title: "Materialidades da escrita, da imagem e do som",
            hours: "16h - 18h",
          },
          {
            title: "Programação musical",
            hours: "18h - 19h",
          },
        ]}
      />
    ),
  },
  {
    id: "friday",
    tabName: "Sexta 13/09",
    content: (
      <ScheduleContent
        items={ScheduleFriday}
        hoursColumn={[
          {
            title: "Questões sobre a intermidialidade",
            hours: "9h - 10:30",
          },
          {
            title: "Coffee Break",
            hours: "10:30 - 11h",
          },
          {
            title: "Mesas Temáticas",
            hours: "11h - 12:30",
          },
          {
            title: "Minicurso 4",
            hours: "11h - 12:30",
          },
          {
            title: "Pausa para almoço",
            hours: "12:30 - 14h",
          },
          {
            title: "Mesas Temáticas",
            hours: "14h - 15:30",
          },
          {
            title: "Minicurso 5",
            hours: "13h - 16h",
          },
          {
            title: "Coffee Break",
            hours: "15:30 - 16h",
          },
          {
            title: "Materialidades plásticas",
            hours: "16h - 18h",
          },
          {
            title: "",
            hours: "18h",
          },
        ]}
      />
    ),
  },
];

export {
  ScheduleTuesday,
  ScheduleWednesday,
  ScheduleThursday,
  ScheduleFriday,
  ScheduleList,
};

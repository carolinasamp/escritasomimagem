import ScheduleContent from "../modules/ScheduleContent";
import { ShortCoursesInfo } from "./short-courses.list";

const ScheduleTuesday = [
  { description: "" },
  {
    subtitle: ShortCoursesInfo[0].title,
    description: ShortCoursesInfo[0].speakers,
  },
  { description: "" },
  {
    subtitle: "A voz do poeta ingénuo na era da técnica",
    description: "Osvaldo Silvestre (Universidade de Coimbra, Portugal)",
  },
];

const ScheduleWednesday = [
  {
    subtitle:
      "L’avenir d’un champ d’études: quelles perspectives ouvertes par la revue <i>Intermédialités?</i>",
    description: "James Cisneros (Université de Montréal, Canadá)",
  },
  {
    description: "",
  },
  {
    description: "",
  },
  {
    subtitle: ShortCoursesInfo[0].title,
    description: ShortCoursesInfo[0].speakers,
  },
  {
    description: "",
  },
  {
    description: "",
  },
  {
    subtitle: ShortCoursesInfo[1].title,
    description: ShortCoursesInfo[1].speakers,
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
    <p>Ricardo Aleixo (Poeta, músico, artista multimídia, performer, produtor cultural)</p>
    </div>
    `,
  },
  {
    subtitle: "Espetáculo multimídia: música, tecnologia e outras artes",
  },
];

const ScheduleThursday = [
  {
    subtitle: "Reescrituras em vertigem: a literatura é a arte do livro?",
    description: "Vera Follain de Figueiredo (PUC-Rio)",
  },
  {
    description: "",
  },
  {
    description: "",
  },
  {
    subtitle: ShortCoursesInfo[2].title,
    description: ShortCoursesInfo[2].speakers,
  },
  {
    description: "",
  },
  {
    description: "",
  },
  {
    subtitle: ShortCoursesInfo[1].title,
    description: ShortCoursesInfo[1].speakers,
  },
  {
    subtitle: ShortCoursesInfo[2].title,
    description: ShortCoursesInfo[2].speakers,
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
      "Eckart Voigts (Technische Universität Braunschweig, Alemanha)",
  },
  {
    description: "",
  },
  {
    description: "",
  },
  {
    subtitle: ShortCoursesInfo[3].title,
    description: ShortCoursesInfo[3].speakers,
  },
  {
    description: "",
  },
  {
    description: "",
  },
  {
    subtitle: ShortCoursesInfo[4].title,
    description: ShortCoursesInfo[4].speakers,
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
    `,
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
            title: "Simpósio temático",
            hours: "11h - 12:30",
          },
          {
            title: "Minicurso 1",
            hours: "11h - 12:30",
          },
          {
            title: "Materialidades da voz",
            hours: "16h - 18h",
          },
          {
            title: "",
            hours: "18h - 19h",
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
            title: "Simpósio temático",
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
            title: "Simpósio temático",
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
            title: "Reverberações sonoras",
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
            title: "Simpósio temático",
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
            title: "Simpósio temático",
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
            title: "Reverberações sonoras",
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
            title: "Simpósio temático",
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
            title: "Simpósio temático",
            hours: "14h - 15:30",
          },
          {
            title: "Minicurso 5",
            hours: "14h - 15:30",
          },
          {
            title: "Coffee Break",
            hours: "15:30 - 16h",
          },
          {
            title: "Materialidades plásticas",
            hours: "16h - 18h",
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

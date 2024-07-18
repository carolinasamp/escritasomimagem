import ScheduleContent from "../modules/ScheduleContent";

const ScheduleTuesday = [
  {
    title: "Mesas temáticas",
    description: "Minicurso 1",
    hour: "11h - 12:30",
  },
  {
    title: "Materialidades da literatura",
    description: "Osvaldo Silvestre",
    hour: "18h - 19h",
  },
];

const ScheduleWednesday = [
  {
    title: "Questões sobre a intermidialidade",
    description: "James Cisneros",
    hour: "9h - 10:30",
  },
  {
    title: "Coffee Break",
    description: "-",
    hour: "10:30 - 11h",
  },
  {
    title: "Mesas temáticas",
    description: "Minicurso 1",
    hour: "11h - 12:30",
  },
  {
    title: "Pausa para almoço",
    description: "-",
    hour: "12:30 - 14h",
  },
  {
    title: "Mesas temáticas",
    description: "Minicurso 2",
    hour: "14h - 15:30",
  },
  {
    title: "Coffee Break",
    description: "-",
    hour: "15:30 - 16h",
  },
  {
    title: "Materialidades em diálogo",
    description:
      "<strong>Materialidades da escrita e da imagem</strong><p>Verônica Stigger, Márcia Arbex</p>",
    hour: "16h - 18h",
  },
  {
    title: "Escola de música/UFMG",
    description: "-",
    hour: "18h - 19h",
  },
];

const ScheduleThursday = [
  {
    title: "Questões sobre a intermidialidade",
    description: "Vera Follain",
    hour: "9h - 10:30",
  },
  {
    title: "Coffee Break",
    description: "-",
    hour: "10:30 - 11h",
  },
  {
    title: "Mesas temáticas",
    description: "Minicurso 3",
    hour: "11h - 12:30",
  },
  {
    title: "Pausa para almoço",
    description: "-",
    hour: "12:30 - 14h",
  },
  {
    title: "Mesas temáticas",
    description: "Minicurso 2 - Minicurso 3",
    hour: "14h - 15:30",
  },
  {
    title: "Coffee Break",
    description: "-",
    hour: "15:30 - 16h",
  },
  {
    title: "Materialidades em diálogo",
    description:
      "<b>Materialidades do corpo em performance</b><p>Leda Maria Martins, Hernán Ulm</p>",
    hour: "16h - 18h",
  },
  {
    title: "Escola de música/UFMG",
    description: "-",
    hour: "18h - 19h",
  },
];

const ScheduleFriday = [
  {
    title: "Questões sobre a intermidialidade",
    description: "Ekhart Voigts",
    hour: "9h - 10:30",
  },
  {
    title: "Coffee Break",
    description: "-",
    hour: "10:30 - 11h",
  },
  {
    title: "Mesas temáticas",
    description: "Minicurso 4",
    hour: "11h - 12:30",
  },
  {
    title: "Pausa para almoço",
    description: "-",
    hour: "12:30 - 14h",
  },
  {
    title: "Mesas temáticas",
    description: "Minicurso 5",
    hour: "14h - 15:30",
  },
  {
    title: "Coffee Break",
    description: "-",
    hour: "15:30 - 16h",
  },
  {
    title: "Materialidades em diálogo",
    description:
      "<strong>Materialidades da voz</strong><p>Mario Câmara, Fernando Pérez Villalón</p>",
    hour: "16h - 18h",
  },
];

const ScheduleList = [
  {
    id: "tuesday",
    tabName: "Terça 10/09",
    content: <ScheduleContent items={ScheduleTuesday} />,
  },
  {
    id: "wednesday",
    tabName: "Quarta 11/09",
    content: <ScheduleContent items={ScheduleWednesday} />,
  },
  {
    id: "thursday",
    tabName: "Quinta 12/09",
    content: <ScheduleContent items={ScheduleThursday} />,
  },
  {
    id: "friday",
    tabName: "Sexta 13/09",
    content: <ScheduleContent items={ScheduleFriday} />,
  },
];

export {
  ScheduleTuesday,
  ScheduleWednesday,
  ScheduleThursday,
  ScheduleFriday,
  ScheduleList,
};

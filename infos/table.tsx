import {
  TablesFriday,
  TablesThursday,
} from "../pages/SchedulePages/CreativeProductions/Tables/tables.mapper";
import { ListThemedTableType } from "../pages/SchedulePages/ThemedTables/types";

const TableThursdayList: ListThemedTableType[] = [
  {
    table_number_title: "Mesa 1",
    table_title: "Produções Criativas",
    table_hours: "14h – 15:30",
    table_day: "Quinta 12/09",
    table_mediator: "Maria Cristina Ribas",
    table_room: "211",
    content: [
      {
        title_table: "MoViMeNtO-TeXtO",
        persons:
          "Raulino Santos Cerqueira Júnior <div>(Universidade Federal do Recôncavo da Bahia/ Centro de Cultura, Linguagens e Tecnologias Aplicadas – CECULT)</div>",
      },
      {
        title_table:
          "Febril, um álbum de poemas sonorosa <br /> Corte-vivo, uma série de colagens animadas",
        persons: "Ana Paula Cerqueira (UFSCar)",
      },
      {
        title_table: "Toda palavra leva tempo <br /> As casas de dentro",
        persons: "Rafael Baldam",
      },
    ],
  },
  {
    table_number_title: "Mesa 2",
    table_title: "Fotografia e Literatura",
    table_hours: "14h – 15:30",
    table_day: "Quinta 11/09",
    table_mediator: "Eliana Ribeiro Ambrosio Miyoshi",
    table_room: "212",
    content: [
      {
        title_table: "Ninhos",
        persons: "Eliana Ribeiro Ambrosio Miyoshi (UFMG)",
      },
      {
        title_table: "Retrato Artesanal - Mix de técnicas e tecnologias",
        persons: "Alexandre de Queiroz Lopes",
      },
      {
        title_table:
          "A poesia das ruas com gatos que moram no Parque Municipal de Belo Horizonte",
        persons:
          "Sergio Ribeiro Pereira <div>(Programa de Pós-Graduação em Estudos de Linguagens-POSLING do CEFET/MG)</div>",
      },
      {
        title_table: "O que é esquecido não morre",
        persons: "Deborah Walter de Moura Castro (UNIFAL-MG)",
      },
    ],
  },
];

const TableFridayList: ListThemedTableType[] = [
  {
    table_number_title: "Mesa 3",
    table_title: "Produções Criativas",
    table_hours: "14h – 15:30",
    table_day: "Sexta 13/09",
    table_mediator: "Tida Carvalho",
    table_room: "212",
    content: [
      {
        title_table: "Rodagira <br /> Palavralada",
        persons: "Arthur Moura Campos",
      },
      {
        title_table: "Postais do projeto Matriarcas da Serra",
        persons: "Simone Marques de Moura (PUC Minas)",
      },
      {
        title_table: "Obituário",
        persons: "Marcelo Perilo",
      },
    ],
  },
  {
    table_number_title: "Mesa 4",
    table_title: "Produções Criativas",
    table_hours: "14h – 15:30",
    table_day: "Sexta 13/09",
    table_mediator: "Daniella Almada",
    table_room: "213",
    content: [
      {
        title_table: "Algumas coisas no fundo do mundo",
        persons: "Raul Hirsch Nascimento Teixeira (UFMG)",
      },
      {
        title_table:
          "Diálogo entre duas materialidades da imagem: entre arte e catalogação científica",
        persons:
          "Adriana de Barros Ferreira Cunha <div>(EBA-UFMG / PUC Minas)</div>",
      },
    ],
  },
];

const TablesList = [
  {
    id: "thursday",
    tabName: "Quinta 12/09",
    content: <TablesThursday />,
  },
  {
    id: "friday",
    tabName: "Sexta 13/09",
    content: <TablesFriday />,
  },
];

export { TableThursdayList, TableFridayList, TablesList };

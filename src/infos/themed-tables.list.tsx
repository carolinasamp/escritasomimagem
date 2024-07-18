import ScheduleContent from "../modules/ScheduleContent";

const ThemedTablesWednesday = [
  {
    title: "mesa - quarta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - quarta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - quarta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - quarta",
    description: "descrição",
    hour: "12:00",
  },
];

const ThemedTablesThursday = [
  {
    title: "mesa - quinta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - quinta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - quinta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - quinta",
    description: "descrição",
    hour: "12:00",
  },
];

const ThemedTablesFriday = [
  {
    title: "mesa - sexta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - sexta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - sexta",
    description: "descrição",
    hour: "12:00",
  },
  {
    title: "mesa - sexta",
    description: "descrição",
    hour: "12:00",
  },
];

const ThemedTablesList = [
  {
    id: "wednesday",
    tabName: "Quarta 11/09",
    content: <ScheduleContent items={ThemedTablesWednesday} />,
  },
  {
    id: "thursday",
    tabName: "Quinta 12/09",
    content: <ScheduleContent items={ThemedTablesThursday} />,
  },
  {
    id: "friday",
    tabName: "Sexta 13/09",
    content: <ScheduleContent items={ThemedTablesFriday} />,
  },
];

export {
  ThemedTablesWednesday,
  ThemedTablesThursday,
  ThemedTablesFriday,
  ThemedTablesList,
};

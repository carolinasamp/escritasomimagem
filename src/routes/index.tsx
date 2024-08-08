import {
  Home,
  Service,
  Speakers,
  ShortCourses,
  PreviousEdition,
} from "../pages";
import Monitors from "../pages/OrganizationPages/Monitors";
import OrganizingCommittee from "../pages/OrganizationPages/OrganizingCommittee";
import ScientificCommittee from "../pages/OrganizationPages/ScientificCommittee";
import Secretary from "../pages/OrganizationPages/Secretary";
import GeneralSchedule from "../pages/SchedulePages/GeneralSchedule";
import MusicProgramming from "../pages/SchedulePages/MusicProgramming";
import ThemedTable from "../pages/SchedulePages/ThemedTables/ThemedTables";

export enum RoutesURL {
  HOME = "/",
  SPEAKERS = "/conferencistas",
  SHORT_COURSES = "/minicursos",
  SERVICE = "/servico",
  PREVIOUS_EDITION = "/edicoes-anteriores",
}

export enum RoutesTitle {
  HOME = "",
  SCHEDULE = "Programação",
  SPEAKERS = "Conferencistas",
  SHORT_COURSES = "Minicursos",
  ORGANIZATION = "Organização",
  SERVICE = "Como chegar/Onde ficar",
  PREVIOUS_EDITION = "Edições anteriores",
}

export enum SubRoutesURL {
  GENERAL_SCHEDULE = "/programacao-geral",
  THEMED_TABLES = "/mesas-tematicas",
  MUSIC_PROGRAMMING = "/programacao-musical",
  ORGANIZING_COMMITTEE = "/comissao-organizadora",
  SCIENTIFIC_COMMITTEE = "/comite-cientifico",
  SECRETARY = "/secretaria",
  MONITORS = "/monitoras",
}

export enum SubRoutesTitle {
  GENERAL_SCHEDULE = "Programação Geral",
  THEMED_TABLES = "Mesas Temáticas",
  MUSIC_PROGRAMMING = "Programação Musical",
  ORGANIZING_COMMITTEE = "Comissão Organizadora",
  SCIENTIFIC_COMMITTEE = "Comitê Científico",
  SECRETARY = "Secretária",
  MONITORS = "Monitoras",
}

export enum RoutesIDs {
  HOME = "home",
  SCHEDULE = "schedule",
  SPEAKERS = "speakers",
  SHORT_COURSES = "short-courses",
  ORGANIZATION = "organization",
  SERVICE = "service",
  PREVIOUS_EDITION = "previous-edition",
}

export enum SubRoutesIDs {
  GENERAL_SCHEDULE = "general-schedule",
  THEMED_TABLES = "themed-tables",
  MUSIC_PROGRAMMING = "music-programming",
  ORGANIZING_COMMITTEE = "organizing-committee",
  SCIENTIFIC_COMMITTEE = "scientific-committee",
  SECRETARY = "secretary",
  MONITORS = "monitors",
}

const RouteInformation = [
  {
    title: RoutesTitle.HOME,
    id: RoutesIDs.HOME,
    url: RoutesURL.HOME,
    element: <Home />,
  },
  {
    title: RoutesTitle.SCHEDULE,
    id: RoutesIDs.SCHEDULE,
    subRoutes: [
      {
        title: SubRoutesTitle.GENERAL_SCHEDULE,
        id: SubRoutesIDs.GENERAL_SCHEDULE,
        url: SubRoutesURL.GENERAL_SCHEDULE,
        element: <GeneralSchedule />,
      },
      {
        title: SubRoutesTitle.THEMED_TABLES,
        id: SubRoutesIDs.THEMED_TABLES,
        url: SubRoutesURL.THEMED_TABLES,
        element: <ThemedTable />,
      },
      {
        title: SubRoutesTitle.MUSIC_PROGRAMMING,
        id: SubRoutesIDs.MUSIC_PROGRAMMING,
        url: SubRoutesURL.MUSIC_PROGRAMMING,
        element: <MusicProgramming />,
      },
    ],
  },
  {
    title: RoutesTitle.SPEAKERS,
    id: RoutesIDs.SPEAKERS,
    url: RoutesURL.SPEAKERS,
    element: <Speakers />,
  },
  {
    title: RoutesTitle.SHORT_COURSES,
    id: RoutesIDs.SHORT_COURSES,
    url: RoutesURL.SHORT_COURSES,
    element: <ShortCourses />,
  },
  {
    title: RoutesTitle.ORGANIZATION,
    id: RoutesIDs.ORGANIZATION,
    subRoutes: [
      {
        title: SubRoutesTitle.ORGANIZING_COMMITTEE,
        id: SubRoutesIDs.ORGANIZING_COMMITTEE,
        url: SubRoutesURL.ORGANIZING_COMMITTEE,
        element: <OrganizingCommittee />,
      },
      {
        title: SubRoutesTitle.SCIENTIFIC_COMMITTEE,
        id: SubRoutesIDs.SCIENTIFIC_COMMITTEE,
        url: SubRoutesURL.SCIENTIFIC_COMMITTEE,
        element: <ScientificCommittee />,
      },
      {
        title: SubRoutesTitle.SECRETARY,
        id: SubRoutesIDs.SECRETARY,
        url: SubRoutesURL.SECRETARY,
        element: <Secretary />,
      },
      {
        title: SubRoutesTitle.MONITORS,
        id: SubRoutesIDs.MONITORS,
        url: SubRoutesURL.MONITORS,
        element: <Monitors />,
      },
    ],
  },
  {
    title: RoutesTitle.SERVICE,
    id: RoutesIDs.SERVICE,
    url: RoutesURL.SERVICE,
    element: <Service />,
  },
  {
    title: RoutesTitle.PREVIOUS_EDITION,
    id: RoutesIDs.PREVIOUS_EDITION,
    url: RoutesURL.PREVIOUS_EDITION,
    element: <PreviousEdition />,
  },
];

export default RouteInformation;

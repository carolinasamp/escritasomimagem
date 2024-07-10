import {
  Home,
  OrganizingCommittee,
  ScientificCommittee,
  Speakers,
  ThematicAreas,
} from "../pages";

export enum RoutesURL {
  HOME = "/",
  THEMATIC_AREAS = "/eixos-tematicos",
  SPEAKERS = "/conferencistas",
  ORGANIZING_COMMITTEE = "/comissao-organizadora",
  SCIENTIFIC_COMMITTEE = "/comite-cientifico",
}

export enum RoutesTitle {
  HOME = "Escrita, som, imagem",
  THEMATIC_AREAS = "Eixos temáticos",
  SPEAKERS = "Conferencistas",
  ORGANIZING_COMMITTEE = "Comissão organizadora",
  SCIENTIFIC_COMMITTEE = "Comitê científico",
}

const RouteInformation = [
  {
    title: RoutesTitle.HOME,
    url: RoutesURL.HOME,
    element: <Home />,
  },
  {
    title: RoutesTitle.THEMATIC_AREAS,
    url: RoutesURL.THEMATIC_AREAS,
    element: <ThematicAreas />,
  },
  {
    title: RoutesTitle.SPEAKERS,
    url: RoutesURL.SPEAKERS,
    element: <Speakers />,
  },
  {
    title: RoutesTitle.ORGANIZING_COMMITTEE,
    url: RoutesURL.ORGANIZING_COMMITTEE,
    element: <OrganizingCommittee />,
  },
  {
    title: RoutesTitle.SCIENTIFIC_COMMITTEE,
    url: RoutesURL.SCIENTIFIC_COMMITTEE,
    element: <ScientificCommittee />,
  },
];

export default RouteInformation;

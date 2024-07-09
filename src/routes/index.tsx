import {
  About,
  Home,
  OrganizingCommittee,
  ScientificCommittee,
  Speakers,
  ThematicAreas,
} from "../pages";

export enum RoutesURL {
  HOME = "",
  ABOUT = "/sobre",
  THEMATIC_AREAS = "/eixos-tematicos",
  SPEAKERS = "/conferencistas",
  ORGANIZING_COMMITTEE = "/comissao-organizadora",
  SCIENTIFIC_COMMITTEE = "/comite-cientifico",
}

const RouteInformation = [
  {
    title: "Home",
    url: RoutesURL.HOME,
    element: <Home />,
  },
  {
    title: "sobre",
    url: RoutesURL.ABOUT,
    element: <About />,
  },
  {
    title: "Eixos temáticos",
    url: RoutesURL.THEMATIC_AREAS,
    element: <ThematicAreas />,
  },
  {
    title: "Conferencistas",
    url: RoutesURL.SPEAKERS,
    element: <Speakers />,
  },
  {
    title: "Comissão organizadora",
    url: RoutesURL.ORGANIZING_COMMITTEE,
    element: <OrganizingCommittee />,
  },
  {
    title: "Comitê científico",
    url: RoutesURL.SCIENTIFIC_COMMITTEE,
    element: <ScientificCommittee />,
  },
];

export default RouteInformation;

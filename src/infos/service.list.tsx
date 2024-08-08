import {
  CafeRestaurantTips,
  HowToGetThere,
  WhereToStay,
} from "../pages/ServicePage/mapper";

const ServiceList = [
  {
    id: "HowToGetThere",
    tabName: "Como chegar?",
    content: <HowToGetThere />,
  },
  {
    id: "WhereToStay",
    tabName: "Onde se hospedar?",
    content: <WhereToStay />,
  },
  {
    id: "CafeRestaurantTips",
    tabName: "Dicas de cafés e restaurantes",
    content: <CafeRestaurantTips />,
  },
];

export default ServiceList;

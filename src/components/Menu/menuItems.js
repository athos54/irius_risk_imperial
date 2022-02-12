import { BiPlanet } from "react-icons/bi";
import { GiSpaceship } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaTruckMonster } from "react-icons/fa";
import { abbreviateNumber } from "helpers/abbreviateNumber";
import PopulationIcon from "components/PopulationIcon/PopulationIcon";

export const menuItems = [
  {
    entity: "planets",
    titleKey: "name",
    subtitleKey: "climate",
    descriptionKey: "population",
    otherKey: "population",
    url: "/planets",
    icon: <BiPlanet />,
    label: "Planets",
    descriptionString: (population) => {
      if (population === "unknown") {
        return "Unknown population";
      }
      return `Population of ${abbreviateNumber(population)}`;
    },
    otherString: (text) => {
      return text !== "unknown" ? <PopulationIcon /> : "";
    },
  },
  {
    entity: "starships",
    titleKey: "name",
    subtitleKey: "manufacturer",
    descriptionKey: "passengers",
    otherKey: "population",
    url: "/starships",
    icon: <GiSpaceship />,
    label: "Starships",
    descriptionString: (passengers) => {
      if (passengers === "unknown") {
        return "Unknown passengers";
      }
      return `Passengers: ${abbreviateNumber(passengers)}`;
    },
    otherString: (text) => {
      return "";
    },
  },
  {
    entity: "people",
    titleKey: "name",
    subtitleKey: "gender",
    descriptionKey: "height",
    otherKey: "population",
    url: "/people",
    icon: <BsFillPeopleFill />,
    label: "People",
    descriptionString: (height) => {
      return `Height: ${height} cm`;
    },
    otherString: (text) => {
      return "";
    },
  },
  {
    entity: "vehicles",
    titleKey: "name",
    subtitleKey: "model",
    descriptionKey: "passengers",
    otherKey: "population",
    url: "/vehicles",
    icon: <FaTruckMonster />,
    label: "Vehicles",
    descriptionString: (passengers) => {
      return `Passengers: ${passengers}`;
    },
    otherString: (text) => {
      return "";
    },
  },
];

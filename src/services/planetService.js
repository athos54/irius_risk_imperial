import { API } from "config/config";
import axios from "axios";

export const getPlanets = (filter) => {
  console.log("filter getPlanets", filter);
  const params = {
    search: filter.search,
    planet: filter.planet,
    ordering: filter.order === "asc" ? `name` : `-name`,
    page: filter.page,
  };
  return axios.get(`${API}/planets`, { params });
};

import { API } from "config/config";
import axios from "axios";

export const getData = (entity, filter) => {
  const params = {
    search: filter.search,
    planet: filter.planet,
    ordering: filter.order === "asc" ? `name` : `-name`,
    page: filter.page,
  };
  return axios.get(`${API}/${entity}`, { params });
};

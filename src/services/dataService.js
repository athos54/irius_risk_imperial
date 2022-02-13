import { API } from "config/config";
import axios from "axios";

export const getData = (entity, filter) => {
  const params = {
    search: filter.search,
    ordering:
      filter.order === "asc" ? `${filter.ordering}` : `-${filter.ordering}`,
    page: filter.page,
  };
  return axios.get(`${API}/${entity}`, { params });
};

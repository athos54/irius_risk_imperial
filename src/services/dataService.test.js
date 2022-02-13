/* eslint-disable jest/valid-title */
import { getData } from "./dataService";
import * as axios from "axios";
jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("getData service", () => {
  it("should call to with params", () => {
    const entity = "planets";
    const filter = {
      order: "desc",
      ordering: "name",
      search: "",
      page: 1,
    };
    getData(entity, filter);
    expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/planets", {
      params: {
        ordering: "-name",
        page: 1,
        search: "",
      },
    });
  });

  it("should call to with other params", () => {
    const entity = "planets";
    const filter = {
      order: "asc",
      ordering: "",
      search: "",
      page: 1,
      planet: 1,
    };
    getData(entity, filter);
    expect(axios.get).toHaveBeenCalledWith("https://swapi.dev/api/planets", {
      params: {
        ordering: "",
        page: 1,
        search: "",
      },
    });
  });
});

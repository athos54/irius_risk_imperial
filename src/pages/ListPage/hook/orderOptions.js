const orderOptions = {
  planets: [
    {
      value: "",
      label: "No filter",
      isNumberType: false,
    },
    {
      value: "climate",
      label: "Climate",
      isNumberType: false,
    },
    {
      value: "orbital_period",
      label: "Orbital period",
      isNumberType: false,
    },
    {
      value: "population",
      label: "Population",
      isNumberType: true,
    },
  ],
  starships: [
    {
      value: "",
      label: "No filter",
      isNumberType: false,
    },
    {
      value: "crew",
      label: "Crew",
      isNumberType: true,
    },
    {
      value: "cargo_capacity",
      label: "Cargo capacity",
      isNumberType: true,
    },
    {
      value: "passengers",
      label: "Passengers",
      isNumberType: true,
    },
  ],
  people: [
    {
      value: "",
      label: "No filter",
      isNumberType: false,
    },
    {
      value: "gender",
      label: "Gender",
      isNumberType: false,
    },
    {
      value: "height",
      label: "Height",
      isNumberType: true,
    },
    {
      value: "mass",
      label: "Mass",
      isNumberType: true,
    },
  ],
  vehicles: [
    {
      value: "",
      label: "No filter",
      isNumberType: false,
    },
    {
      value: "crew",
      label: "Crew",
      isNumberType: true,
    },
    {
      value: "cargo_capacity",
      label: "Cargo capacity",
      isNumberType: true,
    },
    {
      value: "passengers",
      label: "Passengers",
      isNumberType: true,
    },
  ],
};

export default orderOptions;

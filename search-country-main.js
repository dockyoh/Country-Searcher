import { countryList } from "./search-country.js";

const inputElement = document.querySelector("#input-country");

inputElement.addEventListener("keyup", (event) => {
  // console.log(inputElement.value);
  countryList(inputElement.value);
});

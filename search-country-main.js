import { countryList } from "./search-country.js";

const inputElement = document.querySelector("#input-country");

countryList(inputElement.value);

inputElement.addEventListener("keyup", (event) => {
  // console.log(inputElement.value);
  countryList(inputElement.value);
  // console.log(event);
});

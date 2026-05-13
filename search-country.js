// countryList();

export async function countryList(input) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name",
    );

    const data = await response.json();

    filteredSearchCountries(data, input);
  } catch (error) {
    console.error("Oops! something went wrong", error);
  }
}

function filteredSearchCountries(data, input) {
  // const input = "NOR";
  let countries = [];

  data.forEach((country) => {
    countries.push(country.name.common);
  });

  const filteredCountries = countries.filter((country) => {
    return country.toLowerCase().includes(input.toLowerCase());
  });

  filteredCountries.map((resultCountry) => {
    console.log(resultCountry);
    renderCountries(resultCountry);
  });

  console.log(filteredCountries.length);
}

function renderCountries(resultCountry) {
  const listContainerEl = document.querySelector(".list-container");

  const liEl = document.createElement("li");
  const pEl = document.createElement("p");

  liEl.classList.add("list-name");
  pEl.textContent = resultCountry;

  liEl.appendChild(pEl);
  listContainerEl.appendChild(liEl);
}

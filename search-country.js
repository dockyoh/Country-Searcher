// countryList();

export async function countryList(input) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name",
    );

    const data = await response.json();

    renderListCountry(data, input);
  } catch (error) {
    console.error("Oops! something went wrong", error);
  }
}

function renderListCountry(data, input) {
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
  });

  console.log(filteredCountries.length);
}

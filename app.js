const loadCounties = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countries) => {
  console.log(countries[0]);
  const container = document.getElementById("country");
  const countryHTML = countries.map((country) => getCountryHTML(country));
  container.innerHTML = countryHTML[0];
  console.log(countryHTML[0]);
};

const getCountryHTML = (country) => {
  return `
    <div>
        <h2>${country.name}</h2>
        <h4>Capital: ${country.capital}</h4>
        <img src="${country.flag}">
    </div>
    `;
};

loadCounties();

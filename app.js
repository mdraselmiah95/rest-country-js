const loadCounties = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countries) => {
  console.log(countries[0]);
  const container = document.getElementById("country");
  const countryHTML = countries.map((country) => getCountryHTML(country));
  container.innerHTML = countryHTML.join(" ");
  console.log(countryHTML[0]);
};

const getCountryHTML = (country) => {
  const { name, capital, flag, nativeName } = country;
  return `
    <div>
        <h2>${name}</h2>
        <h4>Capital: ${capital}</h4>
        <h5>Native Name: ${nativeName}</h5>
        <img src="${flag}">
    </div>
    `;
};

loadCounties();

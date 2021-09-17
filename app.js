const loadCounties = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countries) => {
  console.log(countries);
};

loadCounties();

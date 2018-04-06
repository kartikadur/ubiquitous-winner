(function(window, document, undefined) {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = [];
  const searchInput = document.querySelector(".search");
  const suggestionList = document.querySelector(".suggestions");

  fetch(endpoint)
    .then(body => body.json())
    .then(data => cities.push(...data));

  function findMatches(toMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(toMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  // https://stackoverflow.com/a/2901298
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  function displayMatches(e) {
    const filteredCities = findMatches(this.value, cities);

    const regex = new RegExp(this.value, "gi");
    const html = filteredCities
      .map(place => {
        // using $& instead of ${this.value} ensures 
        // that the matched string is used instead of the value to match against
        // this ensures that letter cases are preserved in output
        const cityName = place.city.replace(
          regex,
          `<span class="hl">$&</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">$&</span>`
        );
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
      });
    
    suggestionList.innerHTML = html.join("");
  }

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
})(window, document);
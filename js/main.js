document.getElementById("fetchCountryBtn").addEventListener("click", fetchData);

function fetchData() {
	const countryName = document.getElementById("countryInput").value;
	const url = `https://restcountries.com/v3.1/name/${countryName}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const countryData = data[0];
			document.getElementById("nameOfCountry").textContent =
				countryData.name.common;
			document.getElementById("capital").textContent =
				"Capital: " + countryData.capital[0];
			document.getElementById("borders").textContent =
				"Borders: " + countryData.borders.join(", ");
			document.getElementById("coatOfArms").src = countryData.coatOfArms.png;
			document.getElementById("continent").textContent =
				"Continent: " + countryData.continents[0];
			document.getElementById("independent").textContent =
				"Independent: " + (countryData.independent ? "Yes" : "No");

			const languageCode = Object.keys(countryData.languages)[0];
			const languageName = countryData.languages[languageCode];
			document.getElementById("languages").textContent =
				"Language: " + languageName;

			document.getElementById("mapLink").href = countryData.maps.googleMaps;
			document.getElementById("timezone").textContent =
				"Timezone: " + countryData.timezones[0];
			document.getElementById("region").textContent =
				"Region: " + countryData.region;
			document.getElementById("population").textContent =
				"Population: " + countryData.population;

			const currencyCode = Object.keys(countryData.currencies)[0];
			const currencyName = countryData.currencies[currencyCode].name;
			document.getElementById("currencies").textContent =
				"Currency: " + currencyName;

			// unhiding the output
			document.getElementById("output").style.display = "block";
		})
		.catch((error) => {
			console.error("Error fetching country data:", error);
		});
}

const apiPath = 'https://restcountries.com/v3.1/all/';

const countries = document.getElementById('countries');

async function getCountries() {
    try {
        const response = await fetch(apiPath);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCountries(data);
        } else {
            throw new Error("Error:", await response.text());
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayCountries(data) {
    const countryOptions = data
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((country) => {
        // console.log(country.name.common);
        return `<option value="${country.name.common}">${country.name.common}</option>`;
    }).join('');

    countries.innerHTML = countryOptions;
}

getCountries();

const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const figureCaption = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=81b5e2c74822f8180b695cd8afd4aff1';

// ?lat=49.75&lon=6.64&units=metric&appid=81b5e2c74822f8180b695cd8afd4aff1;

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello');

    currentTemp.innerHTML = `${data.main.temp}&deg C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',`${data.weather[0].description}`);
    figureCaption.innerHTML = data.weather[0].description;
}

apiFetch();
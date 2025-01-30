const jsonFile = './data/member.json';

async function getMemberData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    // console.log(data.members);
    displaySpotlights(data.members);
}

function displaySpotlights(members) {
    const filteredMembers = members.filter(member => 
    ["Gold", "Silver"].includes(member.membership_level)
    );

    // console.log('These items are filtered:',filteredMembers);

    const shuffleArray = array => array.sort(() => Math.random() - 0.5);
    const selectedMembers = shuffleArray(filteredMembers).slice(0, 3);
    // console.log('These items are sliced:', selectedMembers);

    document.getElementById('spotlights-container').innerHTML = '';

    selectedMembers.forEach(member => {

       
        const memberCard  = document.createElement('div');
        memberCard.classList.add('spotlight-card');

        const headerTagline = document.createElement('section')
        headerTagline.classList.add('header-tagline')
        headerTagline.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.business_tagline}</p>
        `
        
        memberCard.innerHTML = `
        <hr>
        <img src= "${member.imageURL}" alt= "${member.name} image" width ="250" height="150">
        <p><strong>EMAIL: </strong>${member.email}</p>
        <p><strong>PHONE: </strong>${member.phone}</p>
        <p>URL: <a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        if(memberCard.firstChild) {
            memberCard.insertBefore(headerTagline, memberCard.firstChild);
        } else{
            memberCard.appendChild(headerTagline);
        }
        document.getElementById('spotlights-container').appendChild(memberCard);
        
      

    });

}

getMemberData();

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.86&lon=-0.67&units=metric&appid=81b5e2c74822f8180b695cd8afd4aff1';
const forecastInfo = document.querySelector('.forecast-info');


async function fetchApi() {
    try {
        const response =  await fetch(apiUrl);
        if (response.ok) {
            let data = await response.json();
            displayForecast(today, data);
            // console.log(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

const newDay = new Date()
const today = newDay.getDay()
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function displayForecast(today, data) {
    forecastInfo.innerHTML =  `
        <p><strong>Today</strong> ${data.list[0].main.temp}&degC</p>
        <p><strong>${dayNames[today]}</strong> ${data.list[8].main.temp}&degC</p>
        <p><strong>${dayNames[today + 1]}</strong> ${data.list[16].main.temp}&degC</p>
    `;
}

fetchApi()
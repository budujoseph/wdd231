

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Update: ${lastModified}`;

const hamburger = document.getElementById('trygram');
const menuLinks = document.querySelector('#nav-animation');

hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
})

document.addEventListener("DOMContentLoaded", () => {
    const gridBtn = document.getElementById('grid-button');
    const listBtn = document.getElementById('list-button');

    businessCards.classList.add('grid-view');

    gridBtn.addEventListener('click', () => {
        businessCards.classList.remove('list-view');
        businessCards.classList.add('grid-view');
    });

    listBtn.addEventListener('click', () => {
        businessCards.classList.remove('grid-view')
        businessCards.classList.add('list-view')
    });
});

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if(link.href.includes(activePage)){
        link.classList.add('active');
    }
})




const jsonFilePath = './data/member.json';
const businessCards = document.getElementById('business-cards');

async function getMemberData() {
    const response = await fetch(jsonFilePath);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}


const displayMembers = (members) => {
    members.forEach((member) => {
        

        let card = document.createElement('section');
        card.classList.add('business');

        let img = document.createElement('img');
        let businessName = document.createElement('h3');
        let  address = document.createElement('address');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');

        img.setAttribute('src', member.imageURL);
        img.setAttribute('alt', `Picture of ${member.name}`);
        // img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');

        businessName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        website.innerHTML = `<a href= ${member.website} target="_blank">Website</a>`;
        phone.textContent = `${member.phone}`
        level.textContent = ` Level: ${member.membership_level}`;

        card.appendChild(img);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        businessCards.appendChild(card);
    })
}


// homepage scripts

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.86&lon=-0.67&units=metric&appid=81b5e2c74822f8180b695cd8afd4aff1';

const iconImg = document.getElementById('iconImg');
const iconDescrip = document.getElementById('icon-descrip');
const currentWeatherContainer = document.getElementById('current-info');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
            
        }
    } catch (error) {
        console.error(error);
        
    }
}

 function displayCurrentWeather(data) {
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconImg.innerHTML = `
        <img src= "${iconSrc}" alt="${ data.weather[0].description}">
    `
    

    const tempPara = document.createElement('p');
    const humidityPara = document.createElement('p');
    const sunrisePara = document.createElement('p');
    const sunsetPara = document.createElement('p');

    const sunriseTimeStamp = data.sys.sunrise;
    const sunriseDate = new Date (sunriseTimeStamp * 1000);
    const sunriseToUTC = sunriseDate.toLocaleTimeString();

    const sunsetTimeStamp = data.sys.sunset;
    const sunsetDate = new Date(sunsetTimeStamp * 1000);
    const sunsetToUTC = sunsetDate.toLocaleTimeString();


    tempPara.innerHTML = `${data.main.temp}&deg C`;
    humidityPara.textContent = `Humidity: ${data.main.humidity}%`;
    sunrisePara.textContent = `Sunrise: ${sunriseToUTC}`;
    sunsetPara.textContent = `Sunset: ${sunsetToUTC}`;

    currentWeatherContainer.appendChild(tempPara);
    currentWeatherContainer.appendChild(humidityPara);
    currentWeatherContainer.appendChild(sunrisePara);
    currentWeatherContainer.appendChild(sunsetPara);
    
}




getMemberData();

apiFetch();

// scripts for join page

const showBtn = document.querySelectorAll('.show-dialog');
const closeBtn = document.querySelectorAll('.close-dialog');

showBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        myDialog = btn.nextElementSibling;
        if(myDialog) {
            myDialog.showModal();
        }
    });

});

closeBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const dialog = button.closest("dialog");
        if(dialog) {
            dialog.close();
        }
    });
});


const currentPage = window.location.href;
console.log(currentPage);

const allUrl = currentPage.split('?');
console.log(allUrl);

const formInfo = allUrl[1].split('&');
console.log('Form Data:',formInfo); 

const formDetails  = document.getElementById('form-details');

function displayForm(detail) {
    formInfo.forEach((el) => {
        console.log(el);
        if(el.startsWith(detail)) {
            result = el.split('=')[1].replace("%40","@");
        }
    });

    return result;
}

//const applyTime = document.getElementById('timestamp');


formDetails.innerHTML = `
    <p>First Name: ${displayForm("first")}</p>
    <p>Last Name: ${displayForm("last")}</p>
    <p>Email: ${displayForm("email")}</p>
    <p>Business Name: ${displayForm("business").replaceAll("+", ' ')}</p>
    <p>Phone Number: ${displayForm("telephone").split('B')[1]}</p>

`;






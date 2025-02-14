import {athletes} from "../data/athletes.mjs";
console.log(athletes);




const fballBtn = document.querySelector('.fball-btn');
const bballBtn = document.querySelector('.bball-btn');
const vballBtn = document.querySelector('.vball-btn');

function displayAthletes(athletes) {
    document.getElementById('athletes-container').innerHTML = '';
    athletes.forEach(athlete => {
        let athleteCard = document.createElement('div');
        athleteCard.classList.add('athleteCard');

        let name = document.createElement('h3');
        let sports = document.createElement('p');
        let age = document.createElement('p');
        let country = document.createElement('p');
        let portrait = document.createElement('img');

        portrait.setAttribute('src', athlete.imgUrl);
        portrait.setAttribute('alt', `Portrait of ${athlete.name}`);
        portrait.setAttribute('loading', 'lazy');

        name.textContent = athlete.name
        sports.innerHTML = `Sports: ${athlete.sport}`;
        age.innerHTML = `Age: ${athlete.age}`;
        country.innerHTML = `Country: ${athlete.country}`;

        athleteCard.appendChild(name);
        athleteCard.appendChild(portrait);
        athleteCard.appendChild(sports);
        athleteCard.appendChild(age);
        athleteCard.appendChild(country);
        

        document.getElementById('athletes-container').appendChild(athleteCard);

    });
}

displayAthletes(athletes);





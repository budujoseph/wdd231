
import {places} from "../data/places.mjs";

console.log(places);

function displayPlaces(places) {
    const cardsContainer = document.querySelector(".cards-container");

    places.forEach((place) => {
        let card = document.createElement('section');
        card.classList.add('card')
        card.innerHTML = `
            <figure>
            <img src=${place.imgUrl} alt=${place.name}>
            <figcaption>
            <p>${place.description}</p>
            <address>${place.address}</address>
            </figcaption>
            </figure>
            <h2>${place.name}</h2>
            
        `;

        const cardBtn = document.createElement('button');
        cardBtn.textContent = "Learn More";
        cardBtn.classList.add('card-btn');

        cardsContainer.appendChild(card);
        card.appendChild(cardBtn);

    })
}

displayPlaces(places);


const greetingMsg = document.getElementById("message-content");

const lastVisit = localStorage.getItem('lastVisit');
console.log(lastVisit);

const currentDate = new Date();
// console.log(currentDate);

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions"
} else {
    const lastVisitDate = new Date(lastVisit);
    // console.log(lastVisitDate);

    const timeDifference = currentDate - lastVisitDate;
    // console.log(timeDifference);

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // console.log(daysDifference);

    if (daysDifference < 1) {
        message = "Back so soon! Awesome!"
        console.log(message)
    } else {
        message = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago`;
        console.log(message);
    }
}

greetingMsg.textContent = message;
localStorage.setItem("lastVisit", currentDate);


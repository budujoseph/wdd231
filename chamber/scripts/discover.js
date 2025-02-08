
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
greetingMsg.textContent = "Yo wossop";


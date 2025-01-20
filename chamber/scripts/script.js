

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Update: ${lastModified}`;

const hamburger = document.getElementById('trygram');
const menuLinks = document.querySelector('.menu-navs');

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




const jsonFilePath = './data/member.json';
const businessCards = document.getElementById('business-cards');

async function getMemberData() {
    const response = await fetch(jsonFilePath);
    const data = await response.json();
    console.log(data.members);
    displayMemebrs(data.members);
}


const displayMemebrs = (members) => {
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
        img.setAttribute('height', '180');

        businessName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        website.innerHTML = `<a href = ${member.website}>Website</a>`;
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

getMemberData();


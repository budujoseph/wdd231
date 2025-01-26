const jsonFile = './data/member.json';

async function getMemberData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    console.log(data.members);
    displaySpotlights(data.members);
}

function displaySpotlights(members) {
    const filteredMembers = members.filter(member => 
    ["Gold", "Silver"].includes(member.membership_level)
    );

    console.log('These items are filtered:',filteredMembers);

    const shuffleArray = array => array.sort(() => Math.random() - 0.5);
    const selectedMembers = shuffleArray(filteredMembers).slice(0, 3);
    console.log('These items are sliced:', selectedMembers);

    document.getElementById('spotlights-container').innerHTML = '';

    selectedMembers.forEach(member => {

       
        const memberCard  = document.createElement('div');
        memberCard.classList.add('spotlight-card');
        
        memberCard.innerHTML = `
        <p>${member.name}</p>
        <p>${member.business_tagline}</p>
        <hr>
        <img src= "${member.imageURL}" alt= "${member.name} image" width ="250" height="150">
        <p><strong>EMAIL: </strong>${member.email}</p>
        <p><strong>PHONE: </strong>${member.phone}</p>
        <p>URL: <a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        document.getElementById('spotlights-container').appendChild(memberCard);

    });

}

getMemberData();
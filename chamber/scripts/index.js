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
            memberCard.insertBefore(headerTagline, memberCard.firstChild)
        } else{
            memberCard.appendChild(headerTagline);
        }
        document.getElementById('spotlights-container').appendChild(memberCard);
        
      

    });

}

getMemberData();
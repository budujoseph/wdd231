
const jsonFilePath = "./data/events.json";
const eventsContainer = document.querySelector('.events-container');

 async function getEventsInfo() {
    try {
        const response = await fetch(jsonFilePath);
        
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayEvents(data.events);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error)
    }
 }



 function displayEvents(events) {
    events.forEach((event) => {
        
        let eventCard = document.createElement('section');
        eventCard.classList.add('events-card');

        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.name}" loading="lazy">
            <h3>${event.name}</h3>
            <button class="openDialog">Learn More</button>
            <dialog>
            <p>${event.description}</p>
            <button class="closeDialog">Close</button>
            </dialog>
        `;

        eventsContainer.appendChild(eventCard);

        let dialog = eventCard.querySelector("dialog");
        let openDialog = eventCard.querySelector(".openDialog");
        let closeDialog = eventCard.querySelector(".closeDialog")

        openDialog.addEventListener('click', (event) => {
            event.preventDefault();

            dialog.showModal();
        });

        closeDialog.addEventListener('click', (event) => {
            event.preventDefault();

            dialog.close();
        })
    });

        
 }

 getEventsInfo();



 


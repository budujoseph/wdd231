const currentUrl = window.location.href;
console.log(currentUrl);

const everything = currentUrl.split('?');
console.log(everything);

let formData = everything[1].split('&');
console.log(formData);

const showInfo = document.querySelector('#results');

function show(cup) {
    console.log(cup);
    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@");;
            // result = result.replace("%40", "@");
        }
    })

    return(result);
} 

showInfo.innerHTML = show("email");


setInterval(setClock, 1000);


//selectors
const hoursHand = document.querySelector('[data-hours-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');


function setClock() {
///dates
    let currentDate = new Date();
    let getSeconds = currentDate.getSeconds() / 60;
    let getMinutes = (getSeconds + currentDate.getMinutes()) / 60;
    let getHours = (getMinutes + currentDate.getHours()) / 60;

    setRotation(hoursHand,getHours);
    setRotation(minutesHand,getMinutes);
    setRotation(secondsHand,getSeconds);
}

function setRotation(element, ratio) {
    element.style.setProperty('--rotation', ratio * 360);
}


//at time set
setClock();
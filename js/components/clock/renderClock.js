import { countTimeDiff } from "./clockTimeDiff.js";

// Target date is a new year evening.
// 2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris rodo kiek liko laiko iki artimiausiu Naujuju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys
 * @returns {boolean} Jei funkcija sekmingai ivykdo savo funkcionaluma, tai grazina `true`, priesingu atveju - `false`
 */

 function renderClock(selector) {
     if (typeof selector !== 'string') {
         console.error('ERROR: selektorius turi buti tekstinio tipo.');
        return false;
     }
     if (selector == '') {
         console.error('ERROR: seleltorius negali buti tuscias tekstas.');
         return false;
     }
     const DOM = document.querySelector(selector);
     if (!DOM) {
         console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio HTML turini.');
         return false;
     }
     const time = countTimeDiff();

     const HTML = `<div class="time-box">
                    <div class="time">${time.days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;

                DOM.innerHTML = HTML;
                const timesDOM = DOM.querySelectorAll(' .time');

                //palaidziame laikrodzio mechanika
                let timePassed = 0; 

                setInterval(() => {
                    const time = countTimeDiff();
                    timesDOM[0].innerHTML = time.days;
                    timesDOM[1].innerHTML = time.hours;
                    timesDOM[2].innerHTML = time.minutes;
                    timesDOM[3].innerHTML = time.seconds;
                }, 1000);
return true;

 }

 export { renderClock }
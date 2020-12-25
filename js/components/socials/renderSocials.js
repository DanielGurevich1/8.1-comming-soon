import { isInputValid } from "./isInputValid.js";
import { isValidSocialItem } from './isValidSocialItem.js';

/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinas `false`, o funkcijai suveikus teisingai - `true`
 */
function renderSocials(data) {
    
    // logic
    const socialsDOM = document.querySelector('footer > .row');
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        
        const item = data[i]; 
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string') {
            continue;
        }
        // if (typeof item.icon !== 'string') {
        //     continue;
        // }
         HTML += (`<a href="${item.link}" target="_blank" class="social fa fa-${item.icon}" aria-hidden="true"></a>`);
        }
        
        //post logic validation
        if (HTML === '') {
            console.error('ERROR: nepavyko sugeneruoti social items.');
        }

        socialsDOM.innerHTML = HTML;
    }


    
    // if (!isValidSocialItem(item)) {
    //     continue;
    // input validation
//     if (!isInputValid(selector, data)) {
//         return false;
//     }  



//     // logic
//     const socialsDOM = document.querySelector(selector);
//     if (!socialsDOM) { 
//         console.error('ERROR: nerasta turinio generavimo vieta');
//         return false;
//     }

//     let HTML = '';

    
//         HTML += `<a href="${item.link}" target="_blank" class="social fa fa-${item.icon}" aria-hidden="true"</a>`;

//     }
    
//     // post logic validation
//     if (HTML === '') {
//         console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu.');
//         return false;
//     }

//     // return
//     socialsDOM.innerHTML += HTML;
//     return true;
// }

export { renderSocials }
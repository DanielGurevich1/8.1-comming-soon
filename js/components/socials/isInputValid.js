/**
 * renderSocial() funkcijai skirtu ivesties duomenu (input params) validacija
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju - `true`
 */
function isInputValid(data) {

    if (typeof selector !== 'string') {
        console.error('ERROR: selector turo buti tekstinio tipo. ');
        return false;
    }
    if (selector !== '') {
        console.error('ERROR: selector negali buti tuscias');
        return false;
    }
    if (!Array.isArray(data)) {
        console.error('ERROR: nerastas duomenu masivas.');
        return;
    }
    if (data.length === 0) {
        console.error('ERROR: doumenu sarasas negali buti tuscias.'); 
        return false;
    }
    return true;
}

export { isInputValid }
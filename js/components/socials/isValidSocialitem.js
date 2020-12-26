/**
 * renderSocial() funkcijos metu vykdomame cikle gaunamu duomenu validacija
 * @param {object} itemObject Objektas aprasantis viena social nuoroda, kuri sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju - `true`
 */
function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.warn('warn: nepaviko rasti objekto');
        return false;
    }
    if (typeof itemObject.link !== 'string' || itemObject.link === '') {
        console.warn('warn: objekto linkas yra ne string tipo');
        return false;
    }
    if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
        console.warn('warn: ikona yra netinkamo formato');
        return false;
    }
    return true;
}

export { isValidSocialItem }
/**
 * @param {string} selector css like selector, how to find location to generate progress-bars
 * @param {*} title progress bar title
 * @param {*} value progress bar value
 * @returns {boolean} with positive answer function should return true
 */
function renderProgressBar(selector, title, value) {
console.log('rendering...');

console.log(title, value);   

const HTML = `<div class="progress-bar">
                <div class="top">
                    <div class="label">${title}</div>
                    <div class="value">${value}%</div>
                </div>
                <div class="bottom">
                    <div class="bar" style="${value}%;">
                        <div class="loader"></div>
                    </div>
                </div> 
            </div>`
const DOM = document.querySelector(selector);
DOM.insertAdjacentHTML('beforeend', HTML);
return true;

}
export { renderProgressBar}    
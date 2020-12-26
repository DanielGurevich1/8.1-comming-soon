// import { progressBarData } from "../../data/progressBarData";

function isValidSingleProgressBar(progressBar) {
if (typeof progressBarData !== 'object') {
    console.error('ERROR: turi buti objektas')
    return false;
}
if (!progressBar.selector || progressBar.selector !== 'string' || progressBar.selector === '') {
    console.error('ERROR: objekto selectorius turi buti ne tuscias');
    return false;
    }
    if (!progressBar.title || progressBar.title !== 'string' || progressBar.title === '') {
        console.error('ERROR: objekto selectorius turi buti ne tuscias');
        return false;
    }
    if (!progressBar.value || 
        progressBar.value !== 'number' || 
        progressBar.value < 0 ||
        progressBar.value > 100 ||
        progressBar.value % 1 !== 0 ) {
        console.error('ERROR: objekto reiksme turi buti sveikas skaicius nuo 0 iki 100');
        return false;
    }
}  

export { isValidSingleProgressBar }
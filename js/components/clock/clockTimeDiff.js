function countTimeDiff() {

    // current year (2020)
    const date = new Date();
    const currentYear = date.getFullYear();

    //new year = currentyear + 1
    const newYear = currentYear +1;

    // construction of a full date: ${newYear} - 01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();

    // current time
    const currentTimeMiliseconds = date.getTime();

    // calculate time difference
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    let secondsLeft = timeLeft / 1000;

    // from difference calc days, hours, minutes, seconds
    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft -= days * 60 * 60 * 24;

    const hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft -= hours * 60 * 60;

    const minutes = Math.floor(secondsLeft / 60);

    const seconds = Math.floor(secondsLeft - minutes * 60);
    
    return {
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds,
    }
}
export { countTimeDiff }
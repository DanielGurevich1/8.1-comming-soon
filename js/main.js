import { renderClock } from "./components/clock/renderClock.js"

import { socialsData } from ".js/data/socialsData.js"

renderClock(' .clock');

renderSocials('footer > .row',  socialsData);
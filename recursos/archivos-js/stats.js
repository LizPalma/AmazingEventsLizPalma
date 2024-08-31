import {displayStatistics  } from './modules/functions.js';


 
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // convierte de txt a (objeto) en json 
    .then(info => { 
        console.log(info);

        displayStatistics(info.events);
    

    })
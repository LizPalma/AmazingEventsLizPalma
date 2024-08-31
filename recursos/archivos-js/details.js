import { displayEventDetails } from '../modelos/funciones.js';

 
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // convierte de txt a (objeto) en json 
    .then(info => { 
        console.log(info);

        displayEventDetails(info.events)
        

    })

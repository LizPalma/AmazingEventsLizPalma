import { displayEvents, generateFilters, getSelectedCategories, filterEvents, setupEventListeners, filterPastEvents } from '../modelos/funciones.js';

//  const currentDate = new Date('2023-03-10');

 
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // convierte de txt a (objeto) en json 
    .then(info => { 
        console.log(info);

        displayEvents(info.events);
        getSelectedCategories(info);
        generateFilters(info);
        filterEvents (info) 
        setupEventListeners(info);
        filterPastEvents(info)

    })
  

  



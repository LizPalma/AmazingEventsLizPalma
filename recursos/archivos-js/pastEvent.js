
  import { displayEvents, generateFilters, getSelectedCategories, filterEvents, setupEventListeners, filterEventsByCategory } from '../modelos/funciones.js';

 
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // convierte de txt a (objeto) en json 
    .then(info => { 
      
      displayEvents(info.events);
      getSelectedCategories(info);
      generateFilters(info);
      filterEvents (info) 
      setupEventListeners(info);
      filterEventsByCategory(info)

    })

 
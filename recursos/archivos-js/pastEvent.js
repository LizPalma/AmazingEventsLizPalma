
  import { displayEvents, generateFilters,getSelectedCategories,filterEvents,setupEventListeners } from '../modelos/funciones.js';

 
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // convierte de txt a (objeto) en json 
    .then(info => { 
        console.log(info);

        displayEvents(info.events);
        getSelectedCategories(info);
        generateFilters(info);
        filterEvents (info) 
        setupEventListeners(info);


    })

  // const displayEvents = (events) => {
  //   const container = document.getElementById('container');
  //   container.innerHTML = ""; 
  
  //   events.forEach(event => {
  //     const eventDiv = document.createElement('div');
  //     eventDiv.classList.add('event','col-12', 'col-sm-6', 'col-lg-3', 'mb-3' );
  
  //     eventDiv.innerHTML = `
  //       <div class="card text-bg-light bg-opacity-50 h-100">
  //         <img src="${event.image}" class="card-img-top" alt="${event.name}">
  //         <div class="card-body d-flex flex-column">
  //           <h5 class="card-title">${event.name}</h5>
  //           <p class="card-text">${event.description}</p>
  //           <div class="d-flex justify-content-between align-items-center mt-auto">
  //             <p class="mb-0">${event.price}$</p>
  //              <a href="details.html?id=${event._id}" class="btn btn-secondary">Details</a>
  //           </div>
  //         </div>
  //       </div>
  //     `
  
  //     container.appendChild(eventDiv);
  //   });
  // };
  
  
  // const generateFilters = () => {
  //   const category = document.getElementById('category');
    
    
  //   const categoryFilterDiv = document.createElement('div');
  //   categoryFilterDiv.classList.add('d-flex', 'flex-wrap', 'mb-2','mt-3');
    
   
  //   const categories = [...new Set(data.events.map(event => event.category))];
    
  //   categories.forEach((category, index) => {
  //     const filterDiv = document.createElement('div');
  //     filterDiv.classList.add('form-check', 'form-check-inline');
      
  //     const checkbox = document.createElement('input');
  //     checkbox.classList.add('form-check-input');
  //     checkbox.type = 'checkbox';
  //     checkbox.id = `inlineCheckbox${index + 1}`;
  //     checkbox.value = category;
  
  //     const label = document.createElement('label');
  //     label.classList.add('form-check-label');
  //     label.htmlFor = checkbox.id;
  //     label.textContent = category;
  
  //     filterDiv.appendChild(checkbox);
  //     filterDiv.appendChild(label);
  //     categoryFilterDiv.appendChild(filterDiv);
  //   });
    
    
  //   const searchDiv = document.createElement('div');
  //   searchDiv.classList.add('navbar', 'bg-body-tertiary');
  //   searchDiv.innerHTML = `
  //     <div class="container-fluid">
  //       <form class="d-flex" role="search">
  //         <input id="searchInput" class="form-control me-2" type="text" placeholder="Search" aria-label="Search">
  //         <button id="searchButton" class="btn btn-outline-secondary" type="button">Search</button>
  //       </form>
  //     </div>
  //   `;
    
  //   category.appendChild(categoryFilterDiv);
  //   category.appendChild(searchDiv);
  // };
  
  
  // const getSelectedCategories = () => {
  //   const checkboxes = document.querySelectorAll('#category .form-check-input');
  //   const selectedCategories = [];
  //   checkboxes.forEach(checkbox => {
  //     if (checkbox.checked) {
  //       selectedCategories.push(checkbox.value);
  //     }
  //   });
  //   return selectedCategories;
  // };
  
 
  // const filterEvents = () => {
  //   const searchInput = document.getElementById('searchInput').value.toLowerCase();
  //   const selectedCategories = getSelectedCategories();
  
  //   const filteredEvents = data.events.filter(event => {
  //     const isNameMatch = event.name.toLowerCase().includes(searchInput);
  //     const isCategoryMatch = selectedCategories.length ? selectedCategories.includes(event.category) : true;
  //     return isNameMatch && isCategoryMatch;
  //   });
  
  //   displayEvents(filteredEvents);
  // };
  
  
  // const setupEventListeners = () => {
  //   document.querySelectorAll('#category .form-check-input').forEach(checkbox => {
  //     checkbox.addEventListener('change', filterEvents);
  //   });
  
  //   document.getElementById('searchButton').addEventListener('click', filterEvents);
  //   document.getElementById('searchInput').addEventListener('input', filterEvents);
  // };
  

  // document.addEventListener('DOMContentLoaded', () => {
  //   generateFilters();
  //   displayEvents(data.events);
  //   setupEventListeners();
  // });

  
  
  // document.addEventListener('DOMContentLoaded', () => {
  //   filterPastEvents();
  // });
  
  // const filterEventsByCategory = (events) => {
  //   const selectedCategories = Array.from(document.querySelectorAll('#categoryFilter input[type="checkbox"]:checked'))
  //                                   .map(checkbox => checkbox.value);
    
  //   if (selectedCategories.length === 0) {
  //     return events; 
  //   }

  //   return events.filter(event => selectedCategories.includes(event.category));
  // };

 
  // const filterPastEvents = () => {
  //   const pastEvents = data.events.filter(event => new Date(event.date) < new Date(data.currentDate));
  //   const filteredEvents = filterEventsByCategory(pastEvents);
  //   displayEvents(filteredEvents);
  // };

 
  // document.getElementById('categoryFilter').addEventListener('change', () => {
  //   filterPastEvents();
  // });

  
  // document.getElementById('searchInput').addEventListener('input', (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   const pastEvents = data.events.filter(event => new Date(event.date) < new Date(data.currentDate));
  //   const filteredEvents = filterEventsByCategory(pastEvents).filter(event => event.name.toLowerCase().includes(searchTerm));
  //   displayEvents(filteredEvents);
  // });

  
  // document.addEventListener('DOMContentLoaded', () => {
  //   filterPastEvents();
  // });
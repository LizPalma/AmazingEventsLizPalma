

//conexion api


// export function fetchData() {
//     return fetch('https://aulamindhub.github.io/amazing-api/events.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('HTTP error! status:, ${response, status}'); //alerta

//         }
//         return response.json();
//     })
//     .then(jsonData =>{
//         data = jsonData;
//         return data;
//     })
//     .catch(error =>{
//         console.error ('error fetching data:', error); //si se genera un error, se muestra una alerta y se lanza el error.
//         throw error;
//     })
// }

// exports
//Home cards
export function displayEvents(events) {
    const container = document.getElementById('container');
    container.innerHTML = "";
    events.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('event','col-12', 'col-sm-6', 'col-lg-3', 'mb-3' );
      eventDiv.innerHTML = `
        <div class="card text-bg-light bg-opacity-50 h-100">
          <img src="${event.image}" class="card-img-top" alt="${event.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <p class="mb-0">${event.price}$</p>
               <a href="./recursos/pages/details.html?id=${event._id}" class="btn btn-secondary">Details</a>
            </div>
          </div>
        </div>
      `
  
      container.appendChild(eventDiv);
    });
}

// Home filtros 

export function generateFilters(data) {
    const category = document.getElementById('category');
    
  
   
    const categoryFilterDiv = document.createElement('div');
    categoryFilterDiv.classList.add('d-flex', 'flex-wrap', 'mb-2','mt-3');
    
  
    const categories = [...new Set(data.events.map(event => event.category))];
    
    categories.forEach((category, index) => {
      const filterDiv = document.createElement('div');
      filterDiv.classList.add('form-check', 'form-check-inline');
      
      const checkbox = document.createElement('input');
      checkbox.classList.add('form-check-input');
      checkbox.type = 'checkbox';
      checkbox.id = `inlineCheckbox${index + 1}`;
      checkbox.value = category;
  
      const label = document.createElement('label');
      label.classList.add('form-check-label');
      label.htmlFor = checkbox.id;
      label.textContent = category;
  
      filterDiv.appendChild(checkbox);
      filterDiv.appendChild(label);
      categoryFilterDiv.appendChild(filterDiv);
    });
    
  
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('navbar', 'bg-body-tertiary');
    searchDiv.innerHTML = `
      <div class="container-fluid">
        <form class="d-flex" role="search">
          <input id="searchInput" class="form-control me-2" type="text" placeholder="Search" aria-label="Search">
          <button  id="searchButton" class="btn btn-outline-secondary" type="button">Search</button>
        </form>
      </div>
    `;
    
    category.appendChild(categoryFilterDiv);
    category.appendChild(searchDiv);
  };
  // filtro categorias 
  
  export function getSelectedCategories() {
    const checkboxes = document.querySelectorAll('#category .form-check-input');
    const selectedCategories = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedCategories.push(checkbox.value);
      }
    });
    return selectedCategories;
  };
  
  // filtro search
  export function filterEvents() {
    console.log("filterEvents");
    
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategories = getSelectedCategories();
  
    const filteredEvents = data.events.filter(event => {
      
      const isNameMatch = event.name.toLowerCase().includes(searchInput);
      console.log(isNameMatch, "contenido de match");
      console.log(selectedCategories, "seleccion de categorias");
      
      
      const isCategoryMatch = selectedCategories.length ? selectedCategories.includes(event.category) : true;
      return isNameMatch && isCategoryMatch;
    });
  console.log("--------------------");
  
    displayEvents(filteredEvents);
  };
  // filtro combinado
  
  export function setupEventListeners(info) {
    console.log(info, "setupEvent");
    
    displayEvents(info.events)
        generateFilters(info)
        getSelectedCategories()
        filterEvents(info)
    document.querySelectorAll('#category .form-check-input').forEach(checkbox => {
      checkbox.addEventListener('change', filterEvents);
    });
  
    document.getElementById('searchButton').addEventListener('click', filterEvents);
    document.getElementById('searchInput').addEventListener('input', filterEvents);
  };
  
  
 //..........................up coming Events


//  export function setupEventListeners() {
//     document.querySelectorAll('#category .form-check-input').forEach(checkbox => {
//       checkbox.addEventListener('change', filterEvents);
//     });
  
//     document.getElementById('searchButton').addEventListener('click', filterEvents);
//     document.getElementById('searchInput').addEventListener('input', filterEvents);
//   };

  // filtro eventos past de up coming
  export function filterPastEvents() {
    const pastEvents = data.events.filter(event => new Date(event.date) > new Date(data.currentDate));
    displayEvents(pastEvents);
  };

  //...........................pastEvents

  export function filterEventsByCategory (events){
    const selectedCategories = Array.from(document.querySelectorAll('#categoryFilter input[type="checkbox"]:checked'))
                                    .map(checkbox => checkbox.value);
    
    if (selectedCategories.length === 0) {
      return events; 
    }

    return events.filter(event => selectedCategories.includes(event.category));
  };

 
  // export function filterPastEvents (data) {
  //   const pastEvents = data.events.filter(event => new Date(event.date) < new Date(data.currentDate));
  //   const filteredEvents = filterEventsByCategory(pastEvents);
  //   displayEvents(filteredEvents);
  // };

 
//................details

export function displayEventDetails  ( events){
  const eventDetails = document.getElementById('eventDetails');
  if (eventDetails && events) {
    eventDetails.innerHTML = `
      <div class="card mb-3" style="max-width: 740px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${events.image}" class="img-fluid rounded-start" alt="${events.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${events.name}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Date: ${events.date}</li>
                <li class="list-group-item">Description: ${events.description}</li>
                <li class="list-group-item">Category: ${events.category}</li>
                <li class="list-group-item">Place: ${events.place}</li>
                <li class="list-group-item">Capacity: ${events.capacity}</li>
                <li class="list-group-item">Assistance: ${events.assistance || 'N/A'}</li>
                <li class="list-group-item">Price: $${events.price}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>`
    ;
  } 
};


//.................stats

export function displayStatistics(data) {
  const now = new Date();
  const pastEvents = data.events.filter(event => new Date(event.date) < now);
  const upcomingEvents = data.events.filter(event => new Date(event.date) >= now);

  // 1. Statistics for Past Events
  const highestAttendanceEvent = getHighestAttendanceEvent(pastEvents);
  const lowestAttendanceEvent = getLowestAttendanceEvent(pastEvents);
  const largestCapacityEvent = getLargestCapacityEvent(pastEvents);

  document.querySelector('#events-statistics tr td:nth-child(1)').textContent = highestAttendanceEvent ? highestAttendanceEvent.name : 'N/A';
  document.querySelector('#events-statistics tr td:nth-child(2)').textContent = lowestAttendanceEvent ? lowestAttendanceEvent.name : 'N/A';
  document.querySelector('#events-statistics tr td:nth-child(3)').textContent = largestCapacityEvent ? largestCapacityEvent.name : 'N/A';

  // 2. Upcoming Events Statistics by Category
  const upcomingCategoryStats = getCategoryStats(upcomingEvents, true);
  const upcomingEventsBody = document.getElementById('upcoming-events');
  upcomingEventsBody.innerHTML = '';
  for (const [category, stats] of Object.entries(upcomingCategoryStats)) {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${category}</td>
          <td>${stats.revenue.toFixed(2)}</td>
          <td>${((stats.estimatedAttendance / stats.totalCapacity) * 100).toFixed(2)}%</td>
      `;
      upcomingEventsBody.appendChild(row);
  }

  // 3. Past Events Statistics by Category
  const pastCategoryStats = getCategoryStats(pastEvents, false);
  const pastEventsBody = document.getElementById('past-events');
  pastEventsBody.innerHTML = '';
  for (const [category, stats] of Object.entries(pastCategoryStats)) {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${category}</td>
          <td>${stats.revenue.toFixed(2)}</td>
          <td>${((stats.attendance / stats.totalCapacity) * 100).toFixed(2)}%</td>
      `;
      pastEventsBody.appendChild(row);
  }
}

// Get the event with the highest percentage of attendance
export function getHighestAttendanceEvent(events) {
  return events.reduce((max, event) => {
      const attendanceRate = event.assistance / event.capacity;
      return (!max || attendanceRate > (max.assistance / max.capacity)) ? event : max;
  }, null);
}

// Get the event with the lowest percentage of attendance
export function getLowestAttendanceEvent(events) {
  return events.reduce((min, event) => {
      const attendanceRate = event.assistance / event.capacity;
      return (!min || attendanceRate < (min.assistance / min.capacity)) ? event : min;
  }, null);
}

// Get the event with the largest capacity
export function getLargestCapacityEvent(events) {
  return events.reduce((largest, event) => {
      return (!largest || event.capacity > largest.capacity) ? event : largest;
  }, null);
}

// Get category statistics
export function getCategoryStats(events, isUpcoming) {
  const categoryStats = {};
  events.forEach(event => {
      if (!categoryStats[event.category]) {
          categoryStats[event.category] =  {  revenue: 0, estimatedAttendance: 0, attendance: 0, totalCapacity: 0 };
      }
      const stats = categoryStats[event.category];
      const price = event.price || 0;
      const capacity = event.capacity || 0;
      const assistance = event.assistance || 0;

      stats.revenue += price * (isUpcoming ? capacity : assistance);
      stats.totalCapacity += capacity;
      if (!isUpcoming) {
          stats.attendance += assistance;
      } else {
          stats.estimatedAttendance += capacity;
      }
  });
  return categoryStats;
}
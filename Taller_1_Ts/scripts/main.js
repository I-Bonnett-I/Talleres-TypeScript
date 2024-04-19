"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("../data.js");
let seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
const averageSeasonsElm = document.getElementById("averageSeasons");
let cardsDiv = document.getElementById('cards');
if (cardsDiv) {
    data_js_1.series.forEach(serie => {
        let cardHTML = createCardHTML(serie);
        cardsDiv.insertAdjacentHTML('beforeend', cardHTML);
    });
}
renderSeriesInTable(data_js_1.series);
averageSeasonsElm.innerHTML = `${getAverageNumSeasons(data_js_1.series)}`;
function renderSeriesInTable(series) {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.idSerie}</td>
                           <th><a href="#card-${serie.name}" id="${serie.idSerie}" class="serie-link">${serie.name}</a></th>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageNumSeasons(series) {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;
    return averageSeasons;
}
function createCardHTML(serie) {
    return `
    <div class="card" id="card-${serie.idSerie}" style="display: none;">
      <img src="${serie.img}" class="card-img-top"">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webSite}" class="card-text">${serie.webSite}</a>
      </div>
    </div>
  `;
}
document.querySelectorAll('.serie-link').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        if (event.target) {
            let id = event.target.id;
            document.querySelectorAll('.card').forEach(card => {
                card.style.display = 'none';
            });
            let card = document.getElementById(`card-${id}`);
            if (card) {
                card.style.display = 'block';
            }
        }
    });
});

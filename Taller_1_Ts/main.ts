import { series } from './data.js';
import { Serie } from './serie.js';

const table: HTMLElement = document.getElementById('table')!;
creacionTabla(series);

function creacionTabla(series: Serie[]){
  const body: HTMLElement = document.createElement('tbody');

  series.forEach(serie =>{
    const row: HTMLElement = document.createElement('tr')

    row.innerHTML = `
      <td>${serie.idSerie}</td>
      <td><a href='#' id=tarjeta${serie.idSerie}>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`
    body.appendChild(row);
  });
  table.appendChild(body);
}

const promedioNum: HTMLElement = document.getElementById('promedio')!;
calcularTemporadasPromedio(series);
function calcularTemporadasPromedio(series: Serie[]){
  let totalTemporadas = 0;
  series.forEach(serie =>{
    totalTemporadas += serie.seasons;
  });
  promedioNum.innerHTML = `${totalTemporadas/series.length}`;
}
viewTarjeta(series);
function viewTarjeta(series: Serie[]){
  series.forEach(serie =>{
    let name: HTMLElement = document.getElementById(`tarjeta${serie.idSerie}`)!;
    name.addEventListener('click', ()=>{
      const tarjeta: HTMLElement = document.getElementById('tarjeta')!;
      let tarjetaInfo: HTMLElement = document.createElement('div');
      tarjetaInfo.innerHTML = `
      <div class="card" style="width: 20rem;">
      <img src="${serie.img}" class="img-fluid">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.webSite}" class="btn btn-primary">serie.webSite</a>
        </div>
      </div>`
      tarjeta.appendChild(tarjetaInfo);
      tarjeta.replaceChild(tarjetaInfo, tarjeta.childNodes[0]);
    });
  });

}
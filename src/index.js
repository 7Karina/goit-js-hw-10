import { fetchBreeds } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const pTextEl = document.querySelector('.loader');
const pErrorEl = document.querySelector('.error');
const infoEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', handlerClick);

function addClassListHidden(element) {
  return element.classList.add('is-hidden');
}

function removeClassListHidden(element) {
  return element.classList.remove('is-hidden');
}

function createMarkup(name, description, temperament, life_span, origin, url) {
  const total = `<img class="cat-info-img src = "${url}">
  <div class = "cat-info_box-name">
  <h2 class = "box-name-title">${name}</h2>
  <p class = "box-text">${description}</p>
  <p class = "box-text"><span class = "text">Temperament:</span>${temperament}</p>
  <p class = "box-text"><span class = "text">life span:</span>${life_span}</p>
  <p class = "box-text"><span class = "text">Country of Origin:</span>${origin}</p>
  </div>`;
  return infoEl.innerHTML = total;
}

function handlerClick() {}

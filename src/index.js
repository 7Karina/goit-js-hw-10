import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

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
  const total = `
    <img class="cat-info-img" src="${url}">
    <div class="cat-info_box-name">
      <h2 class="box-name-title">${name}</h2>
      <p class="box-text">${description}</p>
      <p class="box-text"><span class="text">Temperament:</span>${temperament}</p>
      <p class="box-text"><span class="text">life span:</span>${life_span}</p>
      <p class="box-text"><span class="text">Country of Origin:</span>${origin}</p>
    </div>`;
  infoEl.innerHTML = total;
}

function handlerClick() {
  const target = this.value;
  removeClassListHidden(pTextEl);
  addClassListHidden(infoEl);
  fetchCatByBreed(target)
    .then(data => {
      const { name, description, temperament, life_span, origin } =
        data[0].breeds[0];
      const { url } = data[0];
      const valid = pErrorEl.classList.contains('is-hidden');
      if (!valid) return addClassListHidden(pErrorEl);
      removeClassListHidden(infoEl);
      createMarkup(name, description, temperament, life_span, origin, url);
    })
    .catch(() => {
      removeClassListHidden(pErrorEl);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      addClassListHidden(pTextEl);
    });
}

function getList(data) {
  const optionsHTML = data
    .map(({ name, id }) => `<option value="${id}">${name}</option>`)
    .join('\n');
  selectEl.innerHTML =
    '<option data-placeholder="true"></option>' + optionsHTML;
}

function resultFetshBreeds() {
  removeClassListHidden(pErrorEl);
  fetchBreeds()
    .then(data => {
      getList(data);
    })
    .then(data => {
      new SlimSelect({
        select: '#placeholder',
        settings: {
          placeholderText: 'Custom Placeholder Text',
        },
      });
    })
    .catch(err => {
      removeClassListHidden(pErrorEl);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      addClassListHidden(pErrorEl);
    });
}

resultFetshBreeds();

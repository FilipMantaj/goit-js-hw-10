import axios from 'axios';
import Notiflix from 'notiflix';

export const selectInput = document.querySelector('.breed-select');
const cats = [];

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
  'live_BLkodkHx9tp9PtJk7v5re2FylCWP0AvATCQFnQsf2FeX2z4qs5MD3uRC0Hux64I6';

  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      response.data.map(({ id, name }) => {
        cats.push({ text: name, value: id });
      });
      return cats;
    })
    .catch(() => {
      Notiflix.Notify.failure('Something went wrong. Try reloading the page!');
    });
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(() => {
      Notiflix.Notify.failure('Something went wrong. Try reloading the page!');
    });
};
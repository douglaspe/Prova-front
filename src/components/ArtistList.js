import axios from 'axios';
import API_URL from '../services/config';

function createMarkup(data) {
  return data.map((artist, index) => `
  <article>
    <a href="${artist.url}">
      <img class="img-artist" src="${artist.pic_medium}" alt='artist ${artist.name}' />
      <img class="img-play img-fluid" src="../assets/images/play.png" alt="Imagem do Play" />
      <h5 id='artist${index}'>${artist.name}</h5>
    </a>
    <div class="subtitle">
      Road Trippin
    </div>
    </article>`).join('');
}

function renderArtists(data, element) {
  const markup = createMarkup(data);

  element.innerHTML = markup;
}

export default function fetchArtists(element) {
  axios.get(API_URL)
    .then(res => {
      renderArtists(res.data.art.week.all, element);
    })
    .catch(err => {
      console.log(err);
    });
}

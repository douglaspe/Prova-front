import axios from 'axios';
import API_URL from '../services/config';

function createMarkup(data) {
  return data.map((artist, index) => `
  <article>
    <a href="${artist.url}">
        <img class="img-artist" src="${artist.pic_medium}" alt="Card cap" />
        <img class="img-play" src="../assets/images/play.png" alt="Card cap" />
      <div class="title">
        <h5>"${artist.name}"</h5>
      </div>
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

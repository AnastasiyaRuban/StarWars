import { typeOfRender } from "./type-render.js";

export function render({ results }) {
  const container = document.createElement('div');
  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'py-4'
  );

  results.forEach(film => {
    const card = document.createElement('div'),
      imgCard = document.createElement('img'),
      cardBody = document.createElement('a'),
      episodeNumber = document.createElement('p'),
      title = document.createElement('h5'),
      screenWidth = window.screen.width;

    imgCard.src = `./img/${film.title}.jpg`;
    imgCard.style.width = '100%';
    card.style.width = '33%';
    card.style.marginBottom = '20px';
    episodeNumber.style.marginBottom = '15px';
    card.classList.add('card');
    cardBody.classList.add('card-body');
    episodeNumber.classList.add('card-text');
    title.classList.add('card-title');

    cardBody.href = `/?film=${(film.url).split('films/').pop()[0]}`;
    episodeNumber.textContent = `Episode ${(film.url).split('films/').pop()[0]}`
    title.textContent = film.title;

    if (screenWidth < 400) {
      episodeNumber.style.fontSize = '14px';
      title.style.fontSize = '14px'
    } else if (screenWidth < 600) {
      episodeNumber.style.fontSize = '16px';
      title.style.fontSize = '16px'

    }


    cardBody.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', cardBody.href);
      typeOfRender();
    });

    cardBody.append(imgCard, episodeNumber, title);
    card.append(cardBody);
    container.append(card);
  });

  return container
}

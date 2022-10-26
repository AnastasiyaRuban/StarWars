import { renderPage } from "./main.js";

export function typeOfRender() {

  const searchParams = new URLSearchParams(location.search),
    film = searchParams.get('film');
  if (film) {
    renderPage(
      './film-details.js',
      `https://swapi.dev/api/films/${film}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css',
    );
  } else {
    renderPage(
      './films-list.js',
      'https://swapi.dev/api/films/',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css',
    );
  }
}

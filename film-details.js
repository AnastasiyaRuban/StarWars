import { renderList } from "./render-list.js";
import { renderButtonBack } from "./render-buttonBack.js";

export function render(data) {
  const listLoaded = [data.planets, data.species, data.starships];
  const container = document.createElement('div');
  new Promise(resolve => {
    const loadedData = renderList(listLoaded);

    resolve(loadedData);
    return (loadedData);
  })
    .then(filmDetails => {
      return createPage(filmDetails, data);
    }).then(res => {
      container.append(res)
    })
  return container;
}

async function createPage(filmDetails, data) {
  const containerApp = document.createElement('div'),
    container = document.createElement('div'),
    blockInfo = document.createElement('div'),
    blockInfoText = document.createElement('div'),
    poster = document.createElement('img'),
    title = document.createElement('h1'),
    episodeNumber = document.createElement('p'),
    openingCrawl = document.createElement('p'),
    planets = document.createElement('div'),
    planetsTitle = document.createElement('h2'),
    species = document.createElement('div'),
    speciesTitle = document.createElement('h2'),
    characters = document.createElement('div'),
    charactersTitle = document.createElement('h2'),
    blockLists = document.createElement('div'),
    planetsLists = document.createElement('div'),
    speciesLists = document.createElement('div'),
    charactersLists = document.createElement('div'),
    buttonBack = renderButtonBack(),
    planetsArray = filmDetails.planetsArray,
    speciesArray = filmDetails.speciesArray,
    charactersArray = filmDetails.charactersArray;

  title.textContent = data.title;
  episodeNumber.textContent = `Episode ${createEpisodeNumber(data.episode_id)}`;
  openingCrawl.textContent = data.opening_crawl;
  planetsTitle.textContent = 'Planets:';
  speciesTitle.textContent = 'Species:';
  charactersTitle.textContent = 'Starships:';

  poster.src = `./img/${data.title}.jpg`;

  container.style.marginBottom = '50px';
  poster.style.height = '100%';
  poster.style.minWidth = '300px';
  poster.style.objectFit = 'contain';
  poster.style.marginBottom = 'auto';
  poster.style.marginRight = '50px';
  episodeNumber.style.fontStyle = 'oblique';
  document.body.style.backgroundColor = 'rgba(214, 179, 223, 0.5)';

  containerApp.classList.add('container');
  blockInfo.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'py-4'
  );
  planetsLists.classList.add(
    'd-flex',
    'flex-wrap',
    'flex-start'
  );
  speciesLists.classList.add(
    'd-flex',
    'flex-wrap',
    'flex-start'
  );
  charactersLists.classList.add(
    'd-flex',
    'flex-wrap',
    'flex-start'
  );

  planetsArray.forEach(planet => {
    let cardPlanet = createCardPlanet(planet);
    cardPlanet.style.width = '280px';
    cardPlanet.style.marginBottom = '30px';
    cardPlanet.style.marginRight = '10px';

    planetsLists.append(cardPlanet);
  });

  speciesArray.forEach(specy => {
    let cardSpecies = createCardSpecies(specy);
    cardSpecies.style.width = '280px';
    cardSpecies.style.marginBottom = '30px';
    cardSpecies.style.marginRight = '10px';

    speciesLists.append(cardSpecies);
  });

  charactersArray.forEach(character => {
    let cardCharacters = createCardCharacters(character);
    cardCharacters.style.width = '280px';
    cardCharacters.style.marginBottom = '30px';
    cardCharacters.style.marginRight = '10px';


    charactersLists.append(cardCharacters);
  });

  planets.append(planetsTitle, planetsLists);
  species.append(speciesTitle, speciesLists);
  characters.append(charactersTitle, charactersLists)

  blockLists.append(planets, species, characters);
  blockInfoText.append(title, episodeNumber, openingCrawl);

  blockInfo.append(poster, blockInfoText);

  container.append(blockInfo, blockLists);
  containerApp.append(container, buttonBack);

  return containerApp;

}

function createCardPlanet(objectPlanet) {
  const card = document.createElement('div'),
    cardHeader = document.createElement('div'),
    cardList = document.createElement('ul'),
    cardInfo = [
      `climate: ${objectPlanet.climate}`,
      `diameter: ${objectPlanet.diameter}`,
      `gravity: ${objectPlanet.gravity}`,
      `orbital period: ${objectPlanet.orbital_period}`,
      `population: ${objectPlanet.population}`,
      `rotation period: ${objectPlanet.rotation_period}`,
      `surface water: ${objectPlanet.surface_water}`,
      `terrain: ${objectPlanet.terrain}`,
    ]

  cardHeader.textContent = objectPlanet.name;
  cardHeader.classList.add('card-header');
  cardHeader.style.backgroundColor = 'rgb(222, 168, 227)'

  card.classList.add('card');
  card.style.backgroundColor = 'rgb(227, 195, 229)';
  card.append(cardHeader);

  let cardBody = createCardList(cardInfo, cardList);
  cardBody.classList.add('card-body');

  card.append(cardHeader, cardBody)

  return card
}

function createCardSpecies(objectSpecies) {
  const card = document.createElement('div'),
    cardHeader = document.createElement('div'),
    cardList = document.createElement('ul'),
    cardInfo = [
      `average height: ${objectSpecies.average_height}`,
      `average lifespan: ${objectSpecies.average_lifespan}`,
      `classification: ${objectSpecies.classification}`,
      `designation: ${objectSpecies.designation}`,
      `eye colors: ${objectSpecies.eye_colors}`,
      `language: ${objectSpecies.language}`,
      `skin colors: ${objectSpecies.skin_colors}`,
    ]

  cardHeader.textContent = objectSpecies.name;
  cardHeader.classList.add('card-header');
  cardHeader.style.backgroundColor = 'rgb(222, 168, 227)'

  card.classList.add('card');
  card.style.backgroundColor = 'rgb(227, 195, 229)';
  card.append(cardHeader);

  let cardBody = createCardList(cardInfo, cardList);
  cardBody.classList.add('card-body');

  card.append(cardHeader, cardBody)

  return card
}

function createCardCharacters(objectCharacters) {
  const card = document.createElement('div'),
    cardHeader = document.createElement('div'),
    cardList = document.createElement('ul'),
    cardInfo = [
      `MGLT: ${objectCharacters.MGLT}`,
      `cargo capacity: ${objectCharacters.cargo_capacity}`,
      `consumables: ${objectCharacters.consumables}`,
      `cost in credits: ${objectCharacters.cost_in_credits}`,
      `crew: ${objectCharacters.crew}`,
      `hyperdrive rating: ${objectCharacters.hyperdrive_rating}`,
      `length: ${objectCharacters.length}`,
      `manufacturer: ${objectCharacters.manufacturer}`,
      `max atmosphering speed: ${objectCharacters.max_atmosphering_speed}`,
      `model: ${objectCharacters.model}`,
      `passengers: ${objectCharacters.passengers}`,
      `starship class: ${objectCharacters.starship_class}`,
    ]

  cardHeader.textContent = objectCharacters.name;
  cardHeader.classList.add('card-header');
  cardHeader.style.backgroundColor = 'rgb(222, 168, 227)'

  card.classList.add('card');
  card.style.backgroundColor = 'rgb(227, 195, 229)';
  card.append(cardHeader);

  let cardBody = createCardList(cardInfo, cardList);
  cardBody.classList.add('card-body');

  card.append(cardHeader, cardBody)

  return card
}

function createCardList(array, parent) {
  array.forEach(item => {
    let element = document.createElement('li');
    element.textContent = item;
    element.style.listStyleType = 'none';

    parent.append(element)
  });
  return parent
}

function createEpisodeNumber(number) {
  switch (number) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV'
    case 5:
      return 'V'
    case 6:
      return 'VI'
    default:
      break;
  }
}




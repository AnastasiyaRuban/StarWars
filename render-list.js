export function fetchJson(url) {
  return fetch(url).then(res => res.json());
}

export function getItemData(item) {
  return Promise.all(item
    .map(src => fetchJson(src)))
    .then(res => {
      return res
    })
}

export function renderList(uploadedData) {
  return Promise.all(uploadedData
    .map(dataElem => {

      return getItemData(dataElem);
    }))
    .then(([planetsArray, speciesArray, charactersArray]) => {
      return { planetsArray, speciesArray, charactersArray };
    })
}

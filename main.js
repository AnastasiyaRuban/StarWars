import { render } from "./films-list.js";
import { preloader } from "./preloader.js";
import { typeOfRender } from "./type-render.js";

export const cssPromises = {};
const appContainer = document.getElementById('app');

preloader();

function loadResource(src) {
  if (src.endsWith('.js')) {
    return import(src);
  }
  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.href = src;
      link.rel = 'stylesheet';
      cssPromises[src] = new Promise(resolve => {
        link.addEventListener('load', () => resolve());
      })
      document.head.append(link);
    }
    return cssPromises[src];
  }
  return fetch(src).then(res => res.json());
}

export function renderPage(moduleName, apiUrl, css) {
  Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
    .then(([pageModule, data]) => {
      appContainer.innerHTML = '';
      appContainer.append(pageModule.render(data))
    })
}
typeOfRender();

window.addEventListener('popstate', () => {
  typeOfRender();
});



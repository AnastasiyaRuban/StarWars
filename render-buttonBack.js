import { typeOfRender } from "./type-render.js";

export function renderButtonBack() {
  const buttonBlock = document.createElement('div'),
    buttonBack = document.createElement('a');

  buttonBack.textContent = 'Back to episodes';
  buttonBack.style.fontSize = '30px'
  buttonBack.style.position = 'fixed'
  buttonBack.style.bottom = '30px'
  buttonBack.style.right = '10px'


  buttonBlock.classList.add(
    'd-flex',
    'justify-content-center'
  );
  buttonBack.classList.add(
    'btn',
    'btn-outline-secondary'
  )

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
    typeOfRender();
  })

  buttonBlock.append(buttonBack);

  return buttonBlock;
}


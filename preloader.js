export function preloader() {
  const preloaderBlock = document.createElement('div'),
    imgPreloader = document.createElement('img');

  preloaderBlock.style.position = 'fixed';
  preloaderBlock.style.left = '0px';
  preloaderBlock.style.top = '0px';
  preloaderBlock.style.width = '100%';
  preloaderBlock.style.height = '100%';
  preloaderBlock.style.zIndex = '999999';
  preloaderBlock.style.transition = 'all 0.5s';
  preloaderBlock.style.opacity = '1';
  imgPreloader.style.width = '100%';
  imgPreloader.style.height = '100%';
  imgPreloader.style.objectFit = 'cover';

  imgPreloader.src = './img/preloader.jpg';
  preloaderBlock.append(imgPreloader);
  document.body.append(preloaderBlock);

  window.onload = function () {
    preloaderBlock.style.zIndex = '-10';
    preloaderBlock.style.opacity = '0';
  };
}



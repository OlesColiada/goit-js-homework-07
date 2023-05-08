import { galleryItems } from './gallery-items.js';
// Change code below this line

//Вибираєм елемент списку галереї 
const mainGalleryUl = document.querySelector('.gallery')

//формуємо структуру галереї 
const newGalleryStructure = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')

//Додаємо структуру в існуючий Ул 
mainGalleryUl.insertAdjacentHTML('afterbegin', newGalleryStructure);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom',
        captionType: 'attr'})

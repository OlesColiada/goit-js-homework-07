import { galleryItems } from './gallery-items.js';

//1)вибираємо елемент галереї - головний ул. Додаємо клас 
const mainUlGallery = document.querySelector('.gallery')

//2) Формуємо нову галерею з використанням шаблонних рядків і 
const newGallery = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </li>`)
.join('')

// 3) Вставляємо сформований джойном рядок в ул галереї
mainUlGallery.insertAdjacentHTML('afterbegin', newGallery)

// 4) Додаємо слухач подій на галерею
mainUlGallery.addEventListener('click', (e) => {
    e.preventDefault();

    //відсікаємо всю зону поза картинками
    if(e.target.nodeName !== 'IMG'){return};

    //Надаємо додатковий клас вибраній картинці
    const activePicture = document.querySelector('.current_pic');
    if(activePicture){activePicture.classList.remove('current_pic')};

    const nextActivePicture = e.target;
    nextActivePicture.classList.add('current_pic')
    //Підключаємо змінну з basicLightbox
    const zoomNextActivePicture = basicLightbox.create(`
    <img src="${nextActivePicture.dataset.source}" width="800" height="600">`)
    zoomNextActivePicture.show();
    //Закриття на Esc
    const closeIfEsc =(e) => {
        if(e.key === 'Escape'){zoomNextActivePicture.close()}
    }
    document.addEventListener('keydown', closeIfEsc)
})
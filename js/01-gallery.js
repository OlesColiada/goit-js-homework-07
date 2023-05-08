import { galleryItems } from './gallery-items.js';

const mainUlGallery = document.querySelector('.gallery')

const newGallery = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </li>`)
.join('')

mainUlGallery.insertAdjacentHTML('afterbegin', newGallery)

// 4) Додаємо слухач подій на галерею
mainUlGallery.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG'){return};

    //Надаємо додатковий клас вибраній картинці
    const activePicture = document.querySelector('.current_pic');
    if(activePicture){activePicture.classList.remove('current_pic')};

    const nextActivePicture = e.target;
    nextActivePicture.classList.add('current_pic')
    
    //Підключаємо змінну з basicLightbox
    const closeIfEsc =(e) => {
        if(e.key === 'Escape'){zoomNextActivePicture.close()}
    }
    const zoomNextActivePicture = basicLightbox.create(`
    <img src="${nextActivePicture.dataset.source}" width="800" height="600">`, {
        onShow: (instance) => {document.addEventListener('keydown', closeIfEsc)},
        onClose: (instance) => {document.removeEventListener('keydown', closeIfEsc)}
    })
    zoomNextActivePicture.show();
})
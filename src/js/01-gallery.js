import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

const listRef = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('');

listRef.insertAdjacentHTML('beforeend', markup)

listRef.addEventListener('click', openModalWnd);

function openModalWnd (event) {
    event.preventDefault();

if(event.target.nodeName !== 'IMG') {
    return;
} 

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
    onShow: () => window.addEventListener('keydown', onEscKeyPress),
    onClose: () => window.removeEventListener('keydown', onEscKeyPress),
});

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        instance.close();
    }
 }

instance.show()
};



  
 

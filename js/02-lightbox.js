import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
const markupItems = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML(`afterbegin`, markupItems);

function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `    
            <a class="gallery__item" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                alt="${description}" />
            </a>
            `;
        })
        .join(``);
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionPosition: `bottom`,
    captionDelay: 250,
});

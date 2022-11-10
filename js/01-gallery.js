import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

galleryContainer.insertAdjacentHTML(`afterbegin`, createGalleryItems(galleryItems));

// galleryContainer.addEventListener(`click`, onGalleryContainerClick);

console.log(createGalleryItems(galleryItems));

function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `    
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
                </div>
            `;
        })
        .join(``);
}

function createModalWindow(src) {
    const instance = basicLightbox.create(
    `
    <img src="${src}>
    `);
    instance.show()
}

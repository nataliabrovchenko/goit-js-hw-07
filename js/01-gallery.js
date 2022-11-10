import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

galleryContainer.insertAdjacentHTML(`afterbegin`, createGalleryItems(galleryItems));

galleryContainer.addEventListener(`click`, onClick);

function createGalleryItems (galleryItems) {
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

function onClick (event) {
    event.preventDefault();
    if(!event.target.classList.contains(`.gallery__item`)) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `);
    instance.show();
}

// function onPressEscape (event) {
//     console.log(event.code);
//     if(event.code === `Escape`) {
//         instance.close();
//     }
// }



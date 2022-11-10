import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

galleryContainer.insertAdjacentHTML(`afterbegin`, createGalleryItems(galleryItems));

// galleryContainer.addEventListener(`click`, onClick);

function createGalleryItems (galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `    
            <a class="gallery__item" href="#{original}">
                <img class="gallery__image"
                src="#{preview}"
                alt="#{description}" />
            </a>
            `;
        })
        .join(``);
}



// console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector("div.gallery");
const galleryItemsElement = galleryItems
      .map(element => {
            const image = `<a class="gallery__item" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
      title="${element.description}"
    />
  </a>`;
      return image;
      })
      .join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryItemsElement);

new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log(galleryItems);

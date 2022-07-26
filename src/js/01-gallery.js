// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgBox = document.querySelector('.gallery');

const markup = galleryItems.map((galleryItem) => 
`<a class="gallery__item" href="${galleryItem.original}" >
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`).join('');

imgBox.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery a', 
    {captions: true, 
    captionsData: 'alt', 
    captionDelay: 250});


console.log(galleryItems);

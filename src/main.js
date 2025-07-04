
import { getAllImages } from './js/pixabay-api';
import {imagesTemplate } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
let lightbox;

refs.form.addEventListener('submit', searchImages);

function searchImages(e) {
  e.preventDefault();
  showLoader();
  const message = e.target.elements.search.value.trim();
  refs.gallery.innerHTML = '';
  getAllImages(message)
    .then(arr => {
      if (arr.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FFFFFF',
          backgroundColor: '#B51B1B',
          position: 'topRight',
          messageSize: '16px',
          messageLineHeight: '24px',
          maxWidth: '432px',
        });

      } else {
        const markup = imagesTemplate(arr);
        refs.gallery.innerHTML = markup;

        if (lightbox) {
          lightbox.refresh();
        } else {
          lightbox = new SimpleLightbox('.gallery a');
        }
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        messageSize: '16px',
        messageLineHeight: '24px',
        maxWidth: '432px',
      });
      console.log(error);
    })
    .finally(hideLoader);

  e.target.reset();
}

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.gallery.classList.add('hidden');

}

function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}
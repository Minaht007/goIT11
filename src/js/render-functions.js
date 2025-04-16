
import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';  


const lightbox = new SimpleLightbox('.gallery a');  

export function createGallery(images) {  
    const galleryContainer = document.querySelector('.gallery'); 
    const galleryMarkup = images.map(({ largeImageURL, webformatURL
, tags }) => `  
        <a href="${largeImageURL}" class="gallery__item">  
            <img src="${webformatURL}" alt="${tags}" class="gallery__image" width={600} height={600} />  
        </a>  
    `).join('');  

    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);  
    lightbox.refresh(); 
}  

export function clearGallery() {  
    const galleryContainer = document.querySelector('.gallery');  
    galleryContainer.innerHTML = ''; 
}  

export function showLoader() {  
    const loader = document.querySelector('.loader');   
    loader.classList.add('visible');  
}  

export function hideLoader() {  
    const loader = document.querySelector('.loader');  
    loader.classList.remove('visible');  
}  
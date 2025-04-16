
// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';  


// const lightbox = new SimpleLightbox('.gallery a');  

// export function createGallery(images) {  
//     const galleryContainer = document.querySelector('.gallery'); 
//     const galleryMarkup = images.map(({ largeImageURL, webformatURL
// , tags }) => `  
//         <a href="${largeImageURL}" class="gallery__item">  
//             <img src="${webformatURL}" alt="${tags}" class="gallery__image" width={600} height={600} />  
//         </a>  
//     `).join('');  

//     galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);  
//     lightbox.refresh(); 
// }  

// export function clearGallery() {  
//     const galleryContainer = document.querySelector('.gallery');  
//     galleryContainer.innerHTML = ''; 
// }  

// export function showLoader() {  
//     const loader = document.querySelector('.loader');   
//     loader.classList.add('visible');  
// }  

// export function hideLoader() {  
//     const loader = document.querySelector('.loader');  
//     loader.classList.remove('visible');  
// }  

export function imageTemplate(item) {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = item;
  
    return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}" onclick="return false;">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <div class="gallery-wrapper">
              <ul class="gallery-group">
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Likes</h2>
                  <p class="gallery-txt">${likes}</p>
                </li>
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Views</h2>
                  <p class="gallery-txt">${views}</p>
                </li>
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Comments</h2>
                  <p class="gallery-txt">${comments}</p>
                </li>
                <li class="gallery-list">
                  <h2 class="gallery-subtitle">Downloads</h2>
                  <p class="gallery-txt">${downloads}</p>
                </li>
              </ul>
            </div>
          </li>`;
  }
  
  export function imagesTemplate(arr) {
    return arr.map(imageTemplate).join('');
  }
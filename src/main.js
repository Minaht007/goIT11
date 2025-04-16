import { fetchImages } from './js/pixabay-api'; 
// const { fetchImages } = require('./js/pixabay-api')
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';  
import iziToast from 'izitoast';  


const form = document.querySelector('.form');  

form.addEventListener('submit', async (event) => {  
    event.preventDefault();  
    
    const query = document.querySelector('input[name="search-text"]').value;  

    clearGallery();   
    showLoader();   

    try {  
        const response = await fetchImages(query); 
        const images = response.hits;  

        if (images.length > 0) {  
            createGallery(images); 
        } else {  
            iziToast.error({  
                title: 'Error',  
                message: 'Sorry, there are no images matching your search query. Please try again.',  
            });  
        }  
    } catch (error) {  
        console.error('There was an error!', error);  
        iziToast.error({  
            title: 'Error',  
            message: 'There was an error reaching the API. Please try again later.',  
        });  
    } finally {  
        hideLoader();   
    }  
});  


document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const query = document.querySelector('input[name="search-text"]').value;
  const API_KEY = '33135653-4734ab6feb6e20c316e4b7aea'
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safeSearch=true`;

  axios
    .get(url)
    .then(response => {
      if (response.data.hits.length > 0) {
        console.log(response.data.hits);
      } else {
        iziToast.error({  
            title: 'Error',  
            message: 'Sorry, there are no images matching your search query. Please try again.',  
        });  
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
});

function searchGiphy() {
    const apiKey = 'MzsH7ETDyKkWHRwmi5GXeKGShrE2Ypv0';
    const keyword = document.getElementById('keyword').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayGifs(data.data))
      .catch(error => console.error(error));
  }
  
  function displayGifs(gifs) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    gifs.forEach(gif => {
      const image = document.createElement('img');
      image.src = gif.images.fixed_height.url;
      gallery.appendChild(image);
    });
  }
  
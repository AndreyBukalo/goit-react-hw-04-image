import axios from 'axios';
const KEY = '28301212-4ad2581bf94573ba1d8a79e90';
axios.defaults.baseURL = 'https://pixabay.com/api/';




export async function fetchImages(name, page, perPage) {
  return await axios
    .get(
      `?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    )
      .then(response => response.data);
}

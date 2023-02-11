import axios from 'axios';

const API_KEY = '31321557-ae5113305225a26c2527bc1e8';

const SearchPixabay = async (querry, page) => {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${querry}&image_type=photo&page=${page}&per_page=12`);
    return response.data;
}

export default SearchPixabay;

import axios from 'axios';

const KEY = 'AIzaSyCrcawwCvq3Y9iuY54bstuA_pJlhiVLv0w';
        
export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

})
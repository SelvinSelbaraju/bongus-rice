import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shrouded-refuge-62365.herokuapp.com/'
});

export default instance;
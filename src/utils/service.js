import axios from 'axios';
import {Message,MessageBox} from 'element-ui';
import { BASE_API_URL } from '../../public/config/config';

const service = axios.create({
    baseURL:BASE_API_URL,
    timeout:500000
})

export default service;

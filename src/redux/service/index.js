import axios from 'axios';
import { apiUrl, apiKey } from './../../../app.json';

const service = axios.create({
  baseURL: apiUrl,
  params: { api_key: apiKey },
});

export default service;

import axios from 'axios';
import { environment } from '../Environment';

const BookFaceClient = axios.create({
  baseURL: environment.bookFaceContext,
  headers: {
    'Content-Type': 'application/json'
  }
  // withCredentials: true
});

export default BookFaceClient;
import axios from 'axios';
import {
  FETCH_POSTS,
  SELECT_POST,
  DESELECT_POST
} from './types'

const ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function selectPost(id) {
  return {
    type: SELECT_POST,
    payload: id
  };
}

export function deselectPost(id) {
  return {
    type: DESELECT_POST,
    payload: id
  };
}

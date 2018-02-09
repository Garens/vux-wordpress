

import fetch from './api.js';

export const getCategories = data => fetch('get', '/api/Categories');
export const getUsers = data => fetch('get', '/api/Users');
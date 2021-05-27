import axios from 'axios';

const url = 'https://api.github.com';

export const fetchRepositories = async(username,page,per_page) => await axios.get(`${url}/users/${username}/repos?page=${page}&per_page=${per_page}`);
export const fetchUser = async(username) =>await axios.get(`${url}/users/${username}`);
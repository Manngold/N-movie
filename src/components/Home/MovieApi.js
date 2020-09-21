import axios from 'axios';

const filterByDate = (item) => {
  const nowDate = new Date();
  return new Date(item.release_date) > nowDate;
};

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c8d7c73d573d01c32347691c8f0c99bc',
    language: 'ko',
  },
});

export const getUpComing = (page) =>
  api.get('/upcoming', { params: { page } }).then((results) => {
    const {
      data: { results: movies },
    } = results;

    return movies.filter((item) => filterByDate(item));
  });

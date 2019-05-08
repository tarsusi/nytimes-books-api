import axios from 'axios';

const BOOK_CATEGORIES_API_URL = 'https://api.nytimes.com/svc/books/v3/lists/names.json';

export const getBookCategories = () => axios
  .get(BOOK_CATEGORIES_API_URL, {
    params: {
      'api-key': process.env.VUE_APP_NYBOOKS_API_KEY,
    },
  })
  .then((response) => {
    if (response.status === 200) {
      return response.data.results;
    }

    return [];
  });

export const getBookList = () => {};

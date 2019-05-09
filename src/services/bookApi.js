import axios from 'axios';

const BOOK_CATEGORIES_API_URL = 'https://api.nytimes.com/svc/books/v3/lists/names.json';
const BOOK_LIST_API_URL = 'https://api.nytimes.com/svc/books/v3/lists';

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

export const getBestSellersBooks = (categoryName, publishedDate = 'current') => axios
  .get(`${BOOK_LIST_API_URL}/${publishedDate}/${categoryName}.json`, {
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

export const getBookDetails = (categoryName, isbn) => axios
  .get(`${BOOK_LIST_API_URL}/current/${categoryName}.json`, {
    params: {
      'api-key': process.env.VUE_APP_NYBOOKS_API_KEY,
    },
  })
  .then((response) => {
    if (response.status === 200) {
      const { results } = response.data;
      if (results && results.books && results.books.length > 0) {
        const bookDetails = results.books.find(book => book.primary_isbn13 === isbn);

        return bookDetails;
      }
    }

    return null;
  });

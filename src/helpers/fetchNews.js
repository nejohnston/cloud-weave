import {
  fetchNewsPending,
  fetchNewsSuccess,
  fetchNewsError
} from '../redux/modules/news';

fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsPending());
    fetch(
      'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=FCAQ4PFpfV7ZkxT7ejiAn16nycCuE1tL'
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchNewsSuccess(res.news));
        return res.news;
      })
      .catch((error) => {
        dispatch(fetchNewsError(error));
      });
  };
};

export default fetchNews;

const GET_NEWS_PENDING = 'GET_NEWS_PENDING';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
const GET_NEWS_ERROR = 'GET_NEWS_ERROR';

export const getNewsPending = () => ({
  type: GET_NEWS_PENDING,
  payload: pending
});

export const getNews = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news
});

export const getNewsError = (error) => ({
  type: GET_NEWS_ERROR,
  error: error
});

export const fetchNews = () => (dispatch) => {
  dispatch(getAboutLoading());

  return fetch(ABOUT_ENDPOINT)
    .then((res) => res.json())
    .then((event) => {
      dispatch(getAbout(event));
    })
    .catch((error) => dispatch(getAboutError(error)));
};

export default function(
  state = {
    pending: false,
    news: [],
    error: null
  },
  action
) {
  switch (action.type) {
    case GET_NEWS_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        news: action.payload
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

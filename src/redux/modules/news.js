const GET_NEWS_LOADING = 'GET_NEWS_LOADING';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
const GET_NEWS_ERROR = 'GET_NEWS_ERROR';

export const getNewsLoading = (isLoading) => ({
  type: GET_NEWS_LOADING,
  payload: isLoading
});

export const getNews = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news
});

export const getNewsError = (error) => ({
  type: GET_NEWS_ERROR,
  error: error
});

// export const fetchNews = () => (dispatch) => {
//   dispatch(getAboutLoading());

//   return fetch(ABOUT_ENDPOINT)
//     .then((res) => res.json())
//     .then((event) => {
//       dispatch(getAbout(event));
//     })
//     .catch((error) => dispatch(getAboutError(error)));
// };

export default function(
  state = {
    isLoading: false,
    news: [],
    error: null
  },
  action
) {
  switch (action.type) {
    case GET_NEWS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        news: action.payload
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}

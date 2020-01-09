const FETCH_NEWS_PENDING = 'FETCH_NEWS_PENDING';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';

export const fetchNewsPending = () => ({
  type: FETCH_News_PENDING,
  payload: pending
});

export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
});

export const fetchNewsError = (error) => ({
  type: FETCH_NEWS_ERROR,
  error: error
});

export default function(
  state = {
    pending: false,
    news: [],
    error: null
  },
  action
) {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        news: action.payload
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

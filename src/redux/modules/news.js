const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const updateWindowState = (window) => ({
  type: UPDATE_WINDOW_STATE,
  payload: window
});

export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
  payload: pending
});

export const fetchProductsSuccess = (news) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products: news
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
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
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

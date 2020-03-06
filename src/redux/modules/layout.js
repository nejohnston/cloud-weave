const UPDATE_WINDOW_STATE = 'UPDATE_WINDOW_STATE';
const TOGGLE_USER_LOADING = 'TOGGLE_USER_LOADING';

export const updateWindowState = (window) => ({
  type: UPDATE_WINDOW_STATE,
  payload: window
});

export const dataLoading = (isLoading) => ({
  type: TOGGLE_USER_LOADING,
  payload: isLoading
});

export default function(
  state = {
    window: window.screen.width,
    dataLoading: true
  },
  action
) {
  switch (action.type) {
    case UPDATE_WINDOW_STATE: {
      return {
        ...state,
        window: action.payload
      };
    }
    case TOGGLE_USER_LOADING: {
      return {
        ...state,
        dataLoading: action.payload
      };
    }
    default:
      return state;
  }
}

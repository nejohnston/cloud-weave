const UPDATE_WINDOW_STATE = 'UPDATE_WINDOW_STATE';

export const updateWindowState = (window) => ({
  type: UPDATE_WINDOW_STATE,
  payload: window
});

export default function(
  state = {
    window: window.screen.width
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
    default:
      return state;
  }
}

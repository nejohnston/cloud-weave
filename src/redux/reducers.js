import { combineReducers } from 'redux';
import layoutReducer from './modules/layout';

export default combineReducers({
  layout: layoutReducer
});

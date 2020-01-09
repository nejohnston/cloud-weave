import { combineReducers } from 'redux';
import layoutReducer from './modules/layout';
import newsReducer from './modules/news';

export default combineReducers({
  layout: layoutReducer,
  news: newsReducer
});

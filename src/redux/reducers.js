import { combineReducers } from 'redux';
import layoutReducer from './modules/layout';
import newsReducer from './modules/news';
import projectReducer from './modules/projects';

export default combineReducers({
  layout: layoutReducer,
  news: newsReducer,
  project: projectReducer
});

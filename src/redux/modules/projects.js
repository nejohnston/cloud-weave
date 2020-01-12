import { PROJECTS_ENDPOINT } from '../../config/endpoints';

const GET_PROJECTS_LOADING = 'GET_PROJECTS_LOADING';
const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';

export const getProjectsLoading = (isLoading) => ({
  type: GET_PROJECTS_LOADING,
  payload: isLoading
});

export const getProjects = (project) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: project
});

export const getProjectsError = (error) => ({
  type: GET_PROJECTS_ERROR,
  error: error
});

export const fetchProjects = () => (dispatch) => {
  dispatch(getProjectsLoading());

  return fetch(PROJECTS_ENDPOINT)
    .then((res) => res.json())
    .then((event) => {
      dispatch(getProjects(event));
    })
    .catch((error) => dispatch(getProjectsError(error)));
};

export default function(
  state = {
    isLoading: false,
    project: [],
    error: ''
  },
  action
) {
  switch (action.type) {
    case GET_PROJECTS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        project: action.payload,
        error: ''
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

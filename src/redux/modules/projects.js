import { PROJECTS_ENDPOINT } from '../../config/endpoints';

const GET_PROJECTS_LOADING = 'GET_PROJECTS_LOADING';
const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';

export const getProjectsLoading = (isLoading) => ({
  type: GET_PROJECTS_LOADING,
  payload: isLoading
});

export const getProjects = (projectData) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projectData
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
    projectData: [],
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
        projectData: action.payload,
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

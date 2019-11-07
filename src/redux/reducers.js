import {
  GET_MOVIES_ATTEMPT,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,

  GET_SIMILAR_MOVIES_ATTEMPT,
  GET_SIMILAR_MOVIES_FAIL,
  GET_SIMILAR_MOVIES_SUCCESS,

  GET_SELECTED_MOVIE_ATTEMPT,
  GET_SELECTED_MOVIE_FAIL,
  GET_SELECTED_MOVIE_SUCCESS,

  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,

  SET_ORDER_LIST,
  SET_LIST,

  SELECT_MOVIE,
  RESET_SELECTED_MOVIE,
  SET_SELECTED_MOVIE_STATUS,

  SET_MOVIE_RATING
} from './constants';

import _ from 'lodash';

const initialState = {
  popular: {
    list: [],
    isLoading: false,
    errorMessage: null,
    direction: null
  },
  similar: {
    list: [],
    isLoading: false,
    errorMessage: null
  },
  watchList: {
    list: [],
    direction: null
  },
  selectedMovie: {
    information: null,
    errorMessage: null
  },
  selectedList: 'popular'
};

const listing = (state = initialState, action) => {
  if (action && action.type) {
    switch (action.type) {
      case GET_MOVIES_ATTEMPT:
        return {
          ...state,
          popular: {
            ...state.popular,
            isLoading: true
          }
        }
      case GET_MOVIES_FAIL:
        return {
          ...state,
          popular: {
            errorMessage: _.get(action, 'errorMessage.data.status_message'),
            isLoading: false
          }
        }
      case GET_MOVIES_SUCCESS:
        const newMovies = action.payload.results.map(e => ({
          ...e,
          isAdded: false,
          rating: 0
        }));
        return {
          ...state,
          popular: {
            ...state.popular,
            // list: action.payload.results.map(e => ({
            //   ...e,
            //   isAdded: false,
            //   rating: 0
            // })),
            list: [...state.popular.list, ...newMovies],
            isLoading: false
          }
        }
      
      case GET_SIMILAR_MOVIES_ATTEMPT:
        return {
          ...state,
          similar: {
            isLoading: true
          }
        }
      case GET_SIMILAR_MOVIES_FAIL:
        return {
          ...state,
          similar: {
            errorMessage: _.get(action, 'errorMessage.data.status_message'),
            isLoading: false
          }
        }
      case GET_SIMILAR_MOVIES_SUCCESS:
        return {
          ...state,
          similar: {
            list: action.payload.results,
            isLoading: false
          }
        }
      
      case GET_SELECTED_MOVIE_ATTEMPT:
        return {
          ...state
         }
      case GET_SELECTED_MOVIE_FAIL:
        return {
           ...state,
           selectedMovie: {
             errorMessage: action.errorMessage
           }
         }
      case GET_SELECTED_MOVIE_SUCCESS:
       return {
         ...state,
         selectedMovie: {
          information: action.payload
          },
        popular: {
           ...state.popular,
           list: [
             ...state.popular.list,
             {
               ...action.movieInfo,
               isAdded: false,
               rating: 0 
             }
           ]
         }
        }    

      case ADD_TO_WATCHLIST:
        return {
          ...state,
          watchList: {
            list: [
              ...state.watchList.list, action.movie
            ]
          },
          popular: {
            list: [
              ...state.popular.list.map(m => m.id === action.movie.id ? action.movie : m)
            ]
          }
        }
      case REMOVE_FROM_WATCHLIST:
        return {
          ...state,
          watchList: {
            list: _.reject(state.watchList.list, ['id', action.movie.id])
          },
          popular: {
            list: [
              ...state.popular.list.map(m => m.id === action.movie.id ? action.movie : m)
            ]
          }
        }
      
      case SET_ORDER_LIST:
        return {
          ...state,
          [action.name]: {
            direction: action.direction,
            list: [
              ..._.orderBy(_.get(state, `${action.name}.list`), ['release_date'], [`${action.direction}`])
            ]
          }
        }
      case SET_LIST:
        return {
          ...state,
          selectedList: action.name
        }
      
      case SELECT_MOVIE:
        return {
          ...state,
          selectedMovie: {
            information: action.movieInfo
          }
        }
      
      case RESET_SELECTED_MOVIE: 
        return {
          ...state,
          selectedMovie: {}
        }

      case SET_SELECTED_MOVIE_STATUS:
        return {
          ...state,
          selectedMovie: {
            information: action.movie
          }
        }
    
      case SET_MOVIE_RATING:
        return {
          ...state,
          selectedMovie: {
            ...state.selectedMovie,
            information: {
              ...state.selectedMovie.information,
              rating: action.movie.rating
            }
          },
          popular: {
            ...state.popular,
            list: [
              ...state.popular.list.map(m => m.id === action.movie.id ? action.movie : m)
            ]
          }
        }

      default: return state;
    }
  }
  return state;
};

export default listing;

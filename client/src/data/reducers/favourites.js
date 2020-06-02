import {
  SET_MOVIES,
  SET_TVSERIES,
  SET_GAMES,
  SET_MUSISC,
  SET_BOOKS,
  SET_NOTES,
  SET_LINKS,
} from '../actions/favourites';

const INITIAL_STATE = {
  movies: [],
  tvseries: [],
  games: [],
  musics: [],
  books: [],
  notes: [],
  links: [],
};

const favouritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.item,
      };

    case SET_TVSERIES:
      return {
        ...state,
        tvseries: action.item,
      };

    case SET_GAMES:
      return {
        ...state,
        games: action.item,
      };

    case SET_MUSISC:
      return {
        ...state,
        musics: action.item,
      };

    case SET_BOOKS:
      return {
        ...state,
        books: action.item,
      };

    case SET_NOTES:
      return {
        ...state,
        notes: action.item,
      };

    case SET_LINKS:
      return {
        ...state,
        links: action.item,
      };

    default:
      return state;
  }
};

export default favouritesReducer;

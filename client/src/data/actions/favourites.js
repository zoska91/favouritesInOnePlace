export const SET_TVSERIES = 'SET_TVSERIES';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_GAMES = 'SET_GAMES';
export const SET_MUSISC = 'SET_MUSISC';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_NOTES = 'SET_NOTES';
export const SET_LINKS = 'SET_LINKS';

export const setTvSeries = item => ({
  type: SET_TVSERIES,
  item,
});

export const setMovies = item => ({
  type: SET_MOVIES,
  item,
});

export const setGames = item => ({
  type: SET_GAMES,
  item,
});

export const setMusisc = item => ({
  type: SET_MUSISC,
  item,
});

export const setBooks = item => ({
  type: SET_BOOKS,
  item,
});

export const setNotes = item => ({
  type: SET_NOTES,
  item,
});

export const setLinks = item => ({
  type: SET_LINKS,
  item,
});

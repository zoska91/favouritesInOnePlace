import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTvSeries } from '../../data/fetch/tvSeries.fetch';
import { fetchMusics } from '../../data/fetch/music.fetch';
import { fetchMovies } from '../../data/fetch/movies.fetch';
import { fetchBooks } from '../../data/fetch/books.fetch';
import { toggleSearchlist } from '../../data/actions/components';

import ResultList from '../molecules/ResultList';
import ResultListGames from '../molecules/ResultListGames';

const StyledInput = styled.input`
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: 2vh 3vw;
  border-radius: 5px;
  margin-bottom: 2vh;
`;

const Search = ({ activeType, searchListVisible, toggleSearchlist }) => {
  const [inputValue, setInputValue] = useState('');

  let func = fetchTvSeries;

  switch (activeType) {
    case 'tvseries':
      func = fetchTvSeries;
      break;

    case 'books':
      func = fetchBooks;
      break;

    case 'movies':
      func = fetchMovies;
      break;
    case 'music':
      func = fetchMusics;
      break;

    default:
      break;
  }

  const onSubmit = e => {
    e.preventDefault();

    toggleSearchlist(true);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <StyledInput
          name='value'
          component='input'
          type='text'
          placeholder='search'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
      {searchListVisible &&
        (activeType === 'games' ? (
          <ResultListGames value={inputValue} />
        ) : (
          <ResultList value={inputValue} useFunc={func} />
        ))}
    </>
  );
};

const mapStateToProps = ({ activeType, components }) => ({
  activeType: activeType.name,
  searchListVisible: components.searchListVisible,
});

const mapDispatchToProps = dispatch => ({
  toggleSearchlist: value => dispatch(toggleSearchlist(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

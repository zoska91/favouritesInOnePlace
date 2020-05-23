import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/react-hooks';

import {
  getListOfBooks,
  getListOfMusics,
  addListResults,
  getListOfMovies,
} from '../../data/actions/searchResults';
import useTvseriesList from '../../data/fetch/tvSeries.fetch';

import ResultList from '../molecules/ResultList';
import Indicator from '../atoms/Indicator';
import { FIND_ALL_GAMES_QUERY } from '../../data/apollo/games';

const StyledInput = styled.input`
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: 2vh 3vw;
  border-radius: 5px;
  margin-bottom: 2vh;
`;

const Search = ({
  searchResultsList,
  activeType,
  addListResults,
  getListOfBooks,
  getListOfMovies,
  getListOfMusics,
}) => {
  let [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  //get games list
  const [getListGames, { loading }] = useLazyQuery(FIND_ALL_GAMES_QUERY, {
    onCompleted: data => setList(data.findGameByName),
  });

  // get tv series list
  const {
    status,
    data,
    error,
    refetch: refetchTvSeries,
    isFetching,
  } = useTvseriesList(inputValue);
  console.log(status, data, error, refetchTvSeries, isFetching);

  const onSubmit = e => {
    e.preventDefault();
    if (activeType === 'tvseries') refetchTvSeries();
    if (activeType === 'books') getListOfBooks(inputValue);
    if (activeType === 'films') getListOfMovies(inputValue);
    if (activeType === 'music') getListOfMusics(inputValue);

    if (activeType === 'games') {
      getListGames({ variables: { name: inputValue } });
    }
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

      {loading || (status === 'loading' && <Indicator />)}
      {status === 'error' && <span>error.message</span>}
      <div>{isFetching ? <Indicator /> : null}</div>
      {searchResultsList && <ResultList list={list} />}
    </>
  );
};

const mapStateToProps = ({ searchResults, activeType }) => ({
  searchResultsList: searchResults.list,
  activeType: activeType.name,
});

const mapDispatchToProps = dispatch => ({
  getListOfBooks: value => dispatch(getListOfBooks(value)),
  getListOfMovies: value => dispatch(getListOfMovies(value)),
  getListOfMusics: value => dispatch(getListOfMusics(value)),
  addListResults: value => dispatch(addListResults(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);

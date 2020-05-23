import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { useQuery as useQueryApollo, useLazyQuery } from '@apollo/react-hooks';
import { useQuery } from 'react-query';

import {
  getListOfBooks,
  getListOfMusics,
  addListResults,
  getListOfMovies,
  getListOfTvSeries,
} from '../../data/actions/searchResults';

import ResultList from '../molecules/ResultList';
import { FIND_ALL_GAMES_QUERY } from '../../data/apollo';
import { fetchTvSeries } from '../../data/fetch/tvSeries.fetch';
import Indicator from '../atoms/Indicator';

const StyledInput = styled(Field)`
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: 2vh 3vw;
  border-radius: 5px;
  margin-bottom: 2vh;
`;

const Search = ({
  getListOfTvSeries,
  searchResultsList,
  activeType,
  addListResults,
  getListOfBooks,
  getListOfMovies,
  getListOfMusics,
}) => {
  const [getListGames, { called, loading, data }] = useLazyQuery(
    FIND_ALL_GAMES_QUERY,
    {
      onCompleted: data => addListResults(data.findGameByName),
    }
  );

  const onSubmit = (value = 'witcher') => {
    if (activeType === 'tvseries') getListOfTvSeries(value);
    if (activeType === 'books') getListOfBooks(value);
    if (activeType === 'films') getListOfMovies(value);
    if (activeType === 'music') getListOfMusics(value);

    if (activeType === 'games') {
      getListGames({ variables: { name: value.value } });
    }
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ value: '' }}
        render={({ handleSubmit, reset }) => (
          <form onSubmit={handleSubmit}>
            <StyledInput
              name='value'
              component='input'
              type='text'
              placeholder='search'
            />
          </form>
        )}
      />
      {loading && <Indicator />}
      {searchResultsList && <ResultList list={searchResultsList} />}
    </>
  );
};

const mapStateToProps = ({ searchResults, activeType }) => ({
  searchResultsList: searchResults.list,
  activeType: activeType.name,
});

const mapDispatchToProps = dispatch => ({
  getListOfTvSeries: value => dispatch(getListOfTvSeries(value)),
  getListOfBooks: value => dispatch(getListOfBooks(value)),
  getListOfMovies: value => dispatch(getListOfMovies(value)),
  getListOfMusics: value => dispatch(getListOfMusics(value)),
  addListResults: value => dispatch(addListResults(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);

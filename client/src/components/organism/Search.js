import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import {
  getListOfBooks,
  getListOfMusics,
  addListResults,
  getListOfMovies,
  getListOfTvSeries,
} from '../../data/actions/searchResults';

import ResultList from '../molecules/ResultList';
import { FIND_ALL_GAMES_QUERY } from '../../data/apollo';

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
  const { loading, fetchMore } = useQuery(FIND_ALL_GAMES_QUERY);

  const onSubmit = (value = 'witcher') => {
    if (activeType === 'tvseries') getListOfTvSeries(value);
    if (activeType === 'books') getListOfBooks(value);
    if (activeType === 'films') getListOfMovies(value);
    if (activeType === 'music') getListOfMusics(value);

    if (activeType === 'games') {
      fetchMore({
        variables: {
          name: value.value,
        },
        updateQuery: (prev, { fetchMoreResult, ...rest }) => {
          if (!fetchMoreResult) return prev;
          console.log(fetchMoreResult);
          addListResults(fetchMoreResult.findGameByName);
        },
      });
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
      {loading && <p>one moment, please :)</p>}
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

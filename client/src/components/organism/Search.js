import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getListOfTvSeries } from '../../actions/searchResults';
import { Form, Field } from 'react-final-form';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ResultList from '../molecules/ResultList';

const GET_ALL_GAMES = gql`
  {
    findGameByName(name: "assassins") {
      id
      name
    }
  }
`;
// const GET_ALL_GAMES = gql`
//   query games($name: String) {
//     findGameByName(name: $name) {
//       id
//       name
//     }
//   }
// `;

const StyledInput = styled(Field)`
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: 2vh 3vw;
  border-radius: 5px;
  margin-bottom: 2vh;
`;

const Search = ({ getListOfTvSeries, searchResultsList, activeType }) => {
  const { data, loading, error } = useQuery(GET_ALL_GAMES);
  console.log(data, loading, error);
  console.log(activeType);

  const onSubmit = value => {
    if (activeType === 'tvseries') getListOfTvSeries(value);
    // if (activeType === 'games')
    //   fetchMore({
    //     variables: {
    //       name: value
    //     },
    //     updateQuery: (prev, { fetchMoreResult, ...rest }) => {
    //       if (!fetchMoreResult) return prev;
    //       console.log(fetchMore, rest);
    //       // return {
    //       // ...fetchMoreResult,
    //       // launches: {
    //       //   ...fetchMoreResult.launches,
    //       //   launches: [
    //       //     ...prev.launches.launches,
    //       //     ...fetchMoreResult.launches.launches
    //       //   ]
    //       // }
    //       // };
    //     }
    //   });
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
      {searchResultsList.length > 0 && <ResultList list={searchResultsList} />}
    </>
  );
};

const mapStateToProps = ({ searchResults, activeType }) => ({
  searchResultsList: searchResults.list,
  activeType: activeType.name
});

const mapDispatchToProps = dispatch => ({
  getListOfTvSeries: value => dispatch(getListOfTvSeries(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React from 'react';
import { connect } from 'react-redux';
import { getListOfTvSeries } from '../../actions/searchResults';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import ResultList from '../molecules/ResultList';

const StyledInput = styled(Field)`
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: 2vh 3vw;
  border-radius: 5px;
  margin-bottom: 2vh;
`;

const Search = ({ getListOfTvSeries, searchResultsList }) => {
  const onSubmit = value => {
    getListOfTvSeries(value);
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

const mapStateToProps = ({ searchResults }) => ({
  searchResultsList: searchResults.list
});

const mapDispatchToProps = dispatch => ({
  getListOfTvSeries: value => dispatch(getListOfTvSeries(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);

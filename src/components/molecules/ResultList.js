import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getOneTvSeries } from '../../actions/searchResults';

import TvSeriesElementList from '../atoms/TvSeriesElementList';
import DetailsOfOne from '../molecules/DetailsOfOne';

const StyledWrapper = styled.div`
  flex-grow: 1;
  max-height: 35vh;
  overflow-y: scroll;
  padding: 0 3vw;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultList = ({ list, getOneTvSeries }) => {
  let [activeDetails, toggleDetails] = useState(false);

  console.log(list);

  const pickOne = id => {
    console.log(id);
    getOneTvSeries(id);
    toggleDetails((activeDetails = true));
  };

  const resultList = list.map(el => (
    <TvSeriesElementList
      key={el.show.id}
      id={el.show.id}
      title={el.show.name}
      year={el.show.premiered}
      img={el.show.image && el.show.image.medium}
      pickOne={pickOne}
    />
  ));

  return (
    <StyledWrapper>
      <StyledList>{resultList}</StyledList>
      {activeDetails && <DetailsOfOne toggleDetails={toggleDetails} />}
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  getOneTvSeries: value => dispatch(getOneTvSeries(value))
});

export default connect(null, mapDispatchToProps)(ResultList);

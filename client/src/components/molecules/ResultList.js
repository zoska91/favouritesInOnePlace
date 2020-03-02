import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getOneTvSeries } from '../../actions/searchResults';

import ElementList from '../atoms/ElementList';
import DetailsOfOne from '../molecules/DetailsOfOne';

const StyledWrapper = styled.div`
  flex-grow: 1;
  max-height: 40vh;
  overflow-y: scroll;
  padding: 0 3vw;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultList = ({ list, getOneTvSeries, activeType }) => {
  let [activeDetails, toggleDetails] = useState(false);

  console.log(list);

  const pickOne = id => {
    console.log(id);
    if (activeType === 'tvseries') getOneTvSeries(id);

    toggleDetails((activeDetails = true));
  };

  let resultList;
  switch (activeType) {
    case 'tvseries':
      resultList = list.map(el => (
        <ElementList
          key={el.show.id}
          id={el.show.id}
          title={el.show.name}
          img={el.show.image && el.show.image.medium}
          pickOne={pickOne}
        />
      ));

      break;

    case 'games':
      resultList = list.map(el => (
        <ElementList
          key={el.id}
          id={el.id}
          title={el.name}
          img={el.cover && el.cover[0].url}
          pickOne={pickOne}
        />
      ));

      break;

    case 'books':
      if (list.items) {
        resultList = list.items.map(el => (
          <ElementList
            key={el.id}
            id={el.id}
            title={el.volumeInfo.title}
            img={
              el.volumeInfo.imageLinks &&
              el.volumeInfo.imageLinks.smallThumbnail
            }
            pickOne={pickOne}
          />
        ));
      }

      break;

    default:
      break;
  }
  return (
    <StyledWrapper>
      <StyledList>{resultList}</StyledList>
      {activeDetails && <DetailsOfOne toggleDetails={toggleDetails} />}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeType: activeType.name
});

const mapDispatchToProps = dispatch => ({
  getOneTvSeries: value => dispatch(getOneTvSeries(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

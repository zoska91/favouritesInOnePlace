import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  getOneMovie,
  getOneTvSeries,
  getOneBook,
  getOneMusic,
} from '../../data/actions/searchResults';

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

const Favourites = ({
  favouritesData,
  activeType,
  getOneTvSeries,
  getOneBook,
  getOneMovie,
  getOneMusic,
}) => {
  let [activeDetails, toggleDetails] = useState(false);
  console.log(favouritesData[activeType], activeType);
  const data = favouritesData[activeType];
  const pickOne = id => {
    if (activeType === 'tvseries') getOneTvSeries(id);
    if (activeType === 'books') getOneBook(id);
    if (activeType === 'movies') getOneMovie(id);
    if (activeType === 'music') getOneMusic(id);

    toggleDetails((activeDetails = true));
  };

  let list;

  if (data) {
    console.log(data);

    list = data.map(el => (
      <ElementList
        key={el.id}
        id={el.id}
        title={el.title}
        img={el.Img}
        pickOne={pickOne}
      />
    ));
  }

  return (
    <StyledWrapper>
      <StyledList>{list}</StyledList>
      {activeDetails && <DetailsOfOne toggleDetails={toggleDetails} />}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ favourites, activeType }) => ({
  favouritesData: favourites,
  activeType: activeType.name,
});

const mapDispatchToProps = dispatch => ({
  getOneTvSeries: value => dispatch(getOneTvSeries(value)),
  getOneBook: value => dispatch(getOneBook(value)),
  getOneMovie: value => dispatch(getOneMovie(value)),
  getOneMusic: value => dispatch(getOneMusic(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

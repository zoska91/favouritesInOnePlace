import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getOneTvSeries } from '../../actions/searchResults';
import { getOneBook } from '../../actions/searchResults';
import { getOneMovie } from '../../actions/searchResults';

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

const ResultList = ({ list, getOneTvSeries, activeType, getOneBook, getOneMovie }) => {
  let [activeDetails, toggleDetails] = useState(false);

  console.log(list);

  const pickOne = id => {
    console.log(id, activeType);
    if (activeType === 'tvseries') getOneTvSeries(id);
    if (activeType === 'books') getOneBook(id);
    if (activeType === 'films') getOneMovie(id);

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
        <ElementList key={el.id} id={el.id} title={el.name} img={el.cover && el.cover[0].url} pickOne={pickOne} />
      ));

      break;

    case 'books':
      if (list.items) {
        resultList = list.items.map(el => (
          <ElementList
            key={el.id}
            id={el.id}
            title={el.volumeInfo.title}
            img={el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail}
            pickOne={pickOne}
          />
        ));
      }

      break;

    case 'films':
      resultList = list.map(el => (
        <ElementList
          key={el.id}
          id={el.id}
          title={el.title}
          img={el.poster_path && `https://image.tmdb.org/t/p/w500/${el.poster_path}`}
          pickOne={pickOne}
        />
      ));

      break;

    case 'music':
      resultList = list.map(el => (
        <ElementList
          key={el.url}
          id={el.id}
          title={`${el.name} - ${el.artist}`}
          img={el.image && el.image[1].text}
          pickOne={pickOne}
        />
      ));

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
  getOneTvSeries: value => dispatch(getOneTvSeries(value)),
  getOneBook: value => dispatch(getOneTvSeries(value)),
  getOneMovie: value => dispatch(getOneMovie(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

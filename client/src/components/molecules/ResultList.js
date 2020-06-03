import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useQuery } from 'react-query';

import {
  getOneMovie,
  getOneTvSeries,
  getOneBook,
  getOneMusic,
} from '../../data/actions/searchResults';

import ElementList from '../atoms/ElementList';
import DetailsOfOne from '../molecules/DetailsOfOne';
import Indicator from '../atoms/Indicator';

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
//"1431993600"
const ResultList = ({
  useFunc,
  value,
  getOneTvSeries,
  activeType,
  getOneBook,
  getOneMovie,
  getOneMusic,
}) => {
  let [activeDetails, toggleDetails] = useState(false);

  // for one details

  const pickOne = id => {
    if (activeType === 'tvseries') getOneTvSeries(id);
    if (activeType === 'books') getOneBook(id);
    if (activeType === 'movies') getOneMovie(id);
    if (activeType === 'music') getOneMusic(id);

    toggleDetails((activeDetails = true));
  };

  // for list
  let { data, isFetching } = useQuery(['list', value], useFunc);
  let resultList;

  if (data.length > 0) {
    switch (activeType) {
      case 'tvseries':
        resultList = data.map(el => (
          <ElementList
            key={el.show.id}
            id={el.show.id}
            title={el.show.name}
            img={el.show.image && el.show.image.medium}
            pickOne={pickOne}
          />
        ));
        break;

      case 'books':
        if (data) {
          resultList = data.map(el => (
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

      case 'movies':
        resultList = data.map(el => (
          <ElementList
            key={el.id}
            id={el.id}
            title={el.title}
            img={
              el.poster_path &&
              `https://image.tmdb.org/t/p/w500/${el.poster_path}`
            }
            pickOne={pickOne}
          />
        ));
        break;

      case 'music':
        resultList = data.map(el => (
          <ElementList
            key={el.mbid}
            id={el.mbid}
            title={`${el.name} - ${el.artist}`}
            img={el.image && Object.values(el.image[0])[0]}
            pickOne={pickOne}
          />
        ));

        break;

      default:
        break;
    }
  }

  return (
    <StyledWrapper>
      {isFetching && <Indicator />}
      <StyledList>{resultList}</StyledList>
      {activeDetails && <DetailsOfOne toggleDetails={toggleDetails} />}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeType: activeType.name,
});

const mapDispatchToProps = dispatch => ({
  getOneTvSeries: value => dispatch(getOneTvSeries(value)),
  getOneBook: value => dispatch(getOneBook(value)),
  getOneMovie: value => dispatch(getOneMovie(value)),
  getOneMusic: value => dispatch(getOneMusic(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

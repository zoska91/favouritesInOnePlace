import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';

import {
  getOneMovie,
  getOneTvSeries,
  addDetailsOfOne,
} from '../../data/actions/searchResults';

import ElementList from '../atoms/ElementList';
import DetailsOfOne from '../molecules/DetailsOfOne';
import { FIND_ONE_GAME } from '../../data/apollo/games';
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
  list,
  getOneTvSeries,
  activeType,
  getOneBook,
  getOneMovie,
  addDetailsOfOne,
}) => {
  let [activeDetails, toggleDetails] = useState(false);
  const [getOneGame, { loading }] = useLazyQuery(FIND_ONE_GAME, {
    onCompleted: resp => {
      console.log(resp.findGameById[0]);
      const data = resp.findGameById[0];
      const time = new Date(+data.first_release_date * 1000);

      const game = {
        image: `https:${data.cover[0].url}`,
        rating: Math.floor(data.rating),
        name: data.name,
        officialSite: data.url,
        premiered: `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`,
      };
      addDetailsOfOne(game);
    },
  });
  const pickOne = id => {
    console.log(id, activeType);
    if (activeType === 'tvseries') getOneTvSeries(id);
    if (activeType === 'books') getOneBook(id);
    if (activeType === 'films') getOneMovie(id);

    if (activeType === 'games') {
      console.log('go');
      getOneGame({ variables: { id } });
    }

    toggleDetails((activeDetails = true));
  };

  console.log(list);

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

    case 'films':
      resultList = list.map(el => (
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
      {loading && <Indicator />}
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
  getOneBook: value => dispatch(getOneTvSeries(value)),
  getOneMovie: value => dispatch(getOneMovie(value)),
  addDetailsOfOne: value => dispatch(addDetailsOfOne(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);

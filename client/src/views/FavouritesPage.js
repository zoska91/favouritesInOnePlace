import React, { Suspense } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_DATA } from '../data/apollo/favourites';
import {
  setTvSeries,
  setMovies,
  setGames,
  setMusisc,
  setBooks,
  setNotes,
  setLinks,
} from '../data/actions/favourites';

import Indicator from '../components/atoms/Indicator';
import Favourites from '../components/organism/Favourites';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FavouritesPage = ({
  setTvSeries,
  setMovies,
  setGames,
  setMusisc,
  setBooks,
  setNotes,
  setLinks,
}) => {
  const setFavouritesLists = data => {
    setTvSeries(data.allData.filter(el => el.groupId === 5));
    setMovies(data.allData.filter(el => el.groupId === 2));
    setMusisc(data.allData.filter(el => el.groupId === 1));
    setBooks(data.allData.filter(el => el.groupId === 3));
    setNotes(data.allData.filter(el => el.groupId === 7));
    setNotes(data.allData.filter(el => el.groupId === 6));
    setGames(data.allData.filter(el => el.groupId === 4));
  };

  const { loading, error, data } = useQuery(GET_ALL_DATA, {
    onCompleted: resp => {
      if (resp) setFavouritesLists(resp);
    },
  });

  return (
    <Suspense fallback={<Indicator />}>
      <StyledWrapper>
        {loading && <Indicator />}
        {data && <Favourites />}
        {error && <p>Error... pleast, try again!</p>}
      </StyledWrapper>
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => ({
  setTvSeries: value => dispatch(setTvSeries(value)),
  setMovies: value => dispatch(setMovies(value)),
  setGames: value => dispatch(setGames(value)),
  setMusisc: value => dispatch(setMusisc(value)),
  setBooks: value => dispatch(setBooks(value)),
  setNotes: value => dispatch(setNotes(value)),
  setLinks: value => dispatch(setLinks(value)),
});

export default connect(null, mapDispatchToProps)(FavouritesPage);

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_DATA } from '../data/apollo/favourites';
import { setFavourites } from '../data/actions/favourites';

import Indicator from '../components/atoms/Indicator';
import Favourites from '../components/organism/Favourites';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FavouritesPage = ({ setFavourites }) => {
  const setFavouritesLists = data => {
    const favourites = {
      music: data.allData.filter(el => el.groupId === 0),
      movies: data.allData.filter(el => el.groupId === 1),
      books: data.allData.filter(el => el.groupId === 2),
      games: data.allData.filter(el => el.groupId === 3),
      tvseries: data.allData.filter(el => el.groupId === 4),
      links: data.allData.filter(el => el.groupId === 5),
      notes: data.allData.filter(el => el.groupId === 67),
    };

    setFavourites(favourites);
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
  setFavourites: value => dispatch(setFavourites(value)),
});

export default connect(null, mapDispatchToProps)(FavouritesPage);

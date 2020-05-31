import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import { addDetailsOfOne } from '../../data/actions/searchResults';

import ElementList from '../atoms/ElementList';
import DetailsOfOne from './DetailsOfOne';
import { FIND_ONE_GAME, FIND_ALL_GAMES_QUERY } from '../../data/apollo/games';
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
const ResultListGames = ({ value, addDetailsOfOne }) => {
  let [activeDetails, toggleDetails] = useState(false);

  const { data, loading } = useQuery(FIND_ALL_GAMES_QUERY, {
    variables: { name: value },
  });

  const [getOneGame] = useLazyQuery(FIND_ONE_GAME, {
    onCompleted: resp => {
      const data = resp.findGameById[0];
      console.log(data);
      const time = data.first_release_date
        ? new Date(+data.first_release_date * 1000)
        : null;
      const game = {
        id: data.id,
        image: data.cover && `https:${data.cover[0].url}`,
        rating: Math.floor(data.rating),
        name: data.name,
        officialSite: data.url,
        premiered:
          time && `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`,
      };
      addDetailsOfOne(game);
    },
  });

  const pickOne = id => {
    getOneGame({ variables: { id } });
    toggleDetails((activeDetails = true));
  };

  if (loading)
    return (
      <StyledWrapper>
        <Indicator />
      </StyledWrapper>
    );

  return (
    <StyledWrapper>
      <StyledList>
        {data.findGameByName.map(el => (
          <ElementList
            key={el.id}
            id={el.id}
            title={el.name}
            img={el.cover && el.cover[0].url}
            pickOne={pickOne}
          />
        ))}
      </StyledList>
      {activeDetails && <DetailsOfOne toggleDetails={toggleDetails} />}
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addDetailsOfOne: value => dispatch(addDetailsOfOne(value)),
});

export default connect(null, mapDispatchToProps)(ResultListGames);

//TODO -- I cant find way to have useQuery from react query and apollo in one component so I created separated component for ganmes

import React, { useState } from 'react';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';

import Icon from '../atoms/Icon';
import ImgMusic from '../../assets/music.png';
import ImgFilm from '../../assets/film.png';
import ImgLink from '../../assets/link.png';
import ImgNote from '../../assets/note.png';
import ImgBook from '../../assets/book.png';
import ImgGame from '../../assets/game.png';

const StyledWrapper = styled.ul`
  padding: 0 3vw;
  margin: 6vh 0 0;
`;

const Nav = () => {
  let [activeGroup, pickGroup] = useState(3);
  return (
    <StyledWrapper activeGroup={activeGroup}>
      <Flicking
        className='flicking flicking0'
        gap={15}
        defaultIndex={3}
        onSelect={e => {
          pickGroup((activeGroup = e.index));
        }}
      >
        <Icon icon={ImgMusic} activeGroup={activeGroup} />
        <Icon icon={ImgFilm} activeGroup={activeGroup} />
        <Icon icon={ImgLink} activeGroup={activeGroup} />
        <Icon icon={ImgNote} activeGroup={activeGroup} />
        <Icon icon={ImgBook} activeGroup={activeGroup} />
        <Icon icon={ImgGame} activeGroup={activeGroup} />
      </Flicking>
    </StyledWrapper>
  );
};

export default Nav;

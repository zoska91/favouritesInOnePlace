import React, { useState } from 'react';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';
import { connect } from 'react-redux';
import { changeActiveType } from '../../actions/activeTyp';

import Icon from '../atoms/Icon';
import ImgMusic from '../../assets/music.png';
import ImgFilm from '../../assets/film.png';
import ImgLink from '../../assets/link.png';
import ImgNote from '../../assets/note.png';
import ImgBook from '../../assets/book.png';
import ImgGame from '../../assets/game.png';

const StyledWrapper = styled.ul`
  margin: 6vh 0 0;
  padding-left: 0;
  /* height: 10vh; */
`;

const Nav = ({ activeTypeIndex, changeType }) => {
  // let [activeGroup, pickGroup] = useState(3);
  return (
    <StyledWrapper activeGroup={activeTypeIndex}>
      <Flicking
        className='flicking flicking0'
        gap={10}
        defaultIndex={3}
        onSelect={e => {
          changeType(e.index);
        }}
      >
        <Icon icon={ImgMusic} activeGroup={activeTypeIndex} />
        <Icon icon={ImgFilm} activeGroup={activeTypeIndex} />
        <Icon icon={ImgLink} activeGroup={activeTypeIndex} />
        <Icon icon={ImgNote} activeGroup={activeTypeIndex} />
        <Icon icon={ImgBook} activeGroup={activeTypeIndex} />
        <Icon icon={ImgGame} activeGroup={activeTypeIndex} />
      </Flicking>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeTypeIndex: activeType.index,
  activeTypeName: activeType.name
});

const mapDispatchToProps = dispatch => ({
  changeType: type => dispatch(changeActiveType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

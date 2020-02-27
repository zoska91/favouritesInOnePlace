import React from 'react';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';
import { connect } from 'react-redux';
import { changeActiveType } from '../../actions/activeTyp';
import { resetList } from '../../actions/searchResults';
import { setNameType } from '../../actions/activeTyp';

import Icon from '../atoms/Icon';
import ImgMusic from '../../assets/music.png';
import ImgFilm from '../../assets/film.png';
import ImgLink from '../../assets/link.png';
import ImgNote from '../../assets/note.png';
import ImgBook from '../../assets/book.png';
import ImgGame from '../../assets/game.png';
import ImgTvSeries from '../../assets/tvseries.png';

const StyledWrapper = styled.ul`
  margin: 6vh 0 0;
  padding-left: 0;
  /* height: 10vh; */
`;

const Nav = ({ activeTypeIndex, changeTypeFn, setNameTypeFn, resetList }) => {
  const types = [
    { index: 0, name: 'music' },
    { index: 1, name: 'films' },
    { index: 2, name: 'links' },
    { index: 3, name: 'notes' },
    { index: 4, name: 'books' },
    { index: 5, name: 'games' },
    { index: 6, name: 'tvseries' }
  ];

  const activeType = e => {
    resetList();
    changeTypeFn(e.index);
    const name = types.filter(el => el.index === e.index);
    setNameTypeFn(name[0].name);
  };

  return (
    <StyledWrapper activeGroup={activeTypeIndex}>
      <Flicking
        className='flicking flicking0'
        gap={10}
        defaultIndex={3}
        onSelect={e => activeType(e)}
      >
        <Icon icon={ImgMusic} activeGroup={activeTypeIndex} />
        <Icon icon={ImgFilm} activeGroup={activeTypeIndex} />
        <Icon icon={ImgLink} activeGroup={activeTypeIndex} />
        <Icon icon={ImgNote} activeGroup={activeTypeIndex} />
        <Icon icon={ImgBook} activeGroup={activeTypeIndex} />
        <Icon icon={ImgGame} activeGroup={activeTypeIndex} />
        <Icon icon={ImgTvSeries} activeGroup={activeTypeIndex} />
      </Flicking>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeTypeIndex: activeType.index
});

const mapDispatchToProps = dispatch => ({
  changeTypeFn: type => dispatch(changeActiveType(type)),
  setNameTypeFn: name => dispatch(setNameType(name)),
  resetList: () => dispatch(resetList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

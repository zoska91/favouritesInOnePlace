import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ImgNoImage from '../../assets/noImage.png';
import ImgButtonAdd from '../../assets/add.png';
import ImgButtonX from '../../assets/X.png';

import Indicator from '../atoms/Indicator';
import Button from '../atoms/Button';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95vh;
  width: 90vw;
  padding: 3vh 5vw;
  z-index: 10001;
  border-radius: 15px;
  border: 10px solid ${({ theme }) => theme.iconActiveBorder};
  box-shadow: inset 5px 5px 10px 15px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.lightBg};
`;

const StyledImg = styled.div`
  height: 50%;
  border-radius: 7px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
  }
`;

const StyledRatingTitle = styled.div`
  width: 90%;
  height: 12vh;
  margin: 3vh auto;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 2vh 5vw;
  box-shadow: 5px 5px 20px 1px ${({ theme }) => theme.shadow};
  transition: 0.4s;
  display: flex;
  align-items: center;
`;

const StyleTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.1rem;
  margin: 0;
`;

const StyledRating = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  padding: 1vh 5vw;
  border-radius: 5px;
  box-shadow: inset 3px 3px 5px 3px ${({ theme }) => theme.shadow};
  display: flex;
  align-items: center;
  margin-right: 5vw;
  font-weight: bold;
  height: 100%;

  p {
    margin: 0;
  }
`;

const StyledLink = styled.a`
  color: black;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  padding: 0.2vh 5vw;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledButtons = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: space-around;
`;

const DetailsOfOne = ({ details, toggleDetails }) => {
  console.log(details);

  return (
    <StyledWrapper>
      {details.length < 1 ? (
        <Indicator />
      ) : (
        <>
          <StyledImg>
            <img src={details.image ? details.image : ImgNoImage} alt='foto' />
          </StyledImg>
          <StyledRatingTitle>
            <StyledRating>
              <p>{details.rating}</p>
            </StyledRating>
            <StyleTitle>{details.name}</StyleTitle>
          </StyledRatingTitle>
          {details.premiered && <p>premiered: {details.premiered}</p>}
          <StyledLink href={details.officialSite} target='_blank'>
            official site
          </StyledLink>
          <StyledButtons>
            <Button
              img={ImgButtonX}
              onClick={() => toggleDetails((toggleDetails = false))}
            ></Button>
            <Button img={ImgButtonAdd}></Button>
          </StyledButtons>
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ searchResults }) => ({
  details: searchResults.detailsOfOne,
});

export default connect(mapStateToProps, null)(DetailsOfOne);

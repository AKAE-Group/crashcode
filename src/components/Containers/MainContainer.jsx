import React from 'react';
import NavBar from '../NavBar.jsx';
import styled from 'styled-components';
import CardsContainer from './CardsContainer.jsx';
import ActionsContainer from './ActionsContainer.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const MainContainer = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <ActionsContainer />
        {/* <CardsContainer /> */}
      </Wrapper>
    </>
  );
};

export default MainContainer;

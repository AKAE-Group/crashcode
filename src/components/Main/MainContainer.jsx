import React from 'react';
import NavBar from './NavBar.jsx';
import styled from 'styled-components';
import CardsContainer from './CardsContainer.jsx';

// Used styled-components to style the div wrapper
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
        <CardsContainer />
      </Wrapper>
    </>
  );
};

export default MainContainer;

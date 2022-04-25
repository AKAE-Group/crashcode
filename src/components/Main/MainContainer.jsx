import React from 'react';
import NavBar from './NavBar.jsx';
import styled from 'styled-components';
import CardsContainer from './CardsContainer.jsx';
import Cookies from 'js-cookie';

// Used styled-components to style the div wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const MainContainer = () => {
  let cookieId = Cookies.get('userId');
  cookieId = cookieId.slice(3, -1);
  console.log('cookieId', cookieId);

  return (
    <Wrapper>
      <NavBar />
      <CardsContainer userId={cookieId} />
    </Wrapper>
  );
};

export default MainContainer;

import React from 'react';
import styled from 'styled-components';
import { Provider } from '../../model/context/context';
import PortfolioApp from '../app/portfolio/portfolio';

import './App.css';

const AppLayout = styled.div`
  display: grid;
  grid-template-areas:
    'navbar navbar navbar'
    'sidebar app rightbar'
    'footer footer footer';
  grid-template-columns: 2rem minmax(30rem, 1fr) minmax(20rem, 30rem);
  grid-template-rows: 3rem minmax(calc(100vh - 5rem), 100%) 2rem;
  padding: 0;
  grid-gap: 0;
`;

const NavbarArea = styled.div`
  display: grid;
  grid-area: navbar;
  position: fixed;
  background-color: #dadada;
  grid-template-areas: 'title navbar';
  grid-template-columns: 20rem 1fr;
  height: 3rem;
  width: 100%;
  align-items: center;
  padding: 0px 0px;
  z-index: 5;
`;

const TitleArea = styled.div`
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  color: #eee;
  grid-area: title;
  align-self: center;
  padding-left: 10px;
  color: rgba(90, 40, 120, 0.6);
  background-color: #dadada;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 6px 5px,
    rgba(255, 255, 255, 0.4) 0 -4px 30px;
`;

const NavArea = styled.div`
  display: grid;
  grid-area: navbar;
  grid-auto-columns: 5rem;
  grid-auto-flow: column;
  justify-self: end;
  padding-right: 3px;
  align-self: center;
  grid-gap: 5px;
`;

const FooterArea = styled.div`
  display: grid;
  grid-area: footer;
  align-self: stretch;
  align-content: end;
  background-color: #ccc;
  padding-bottom: 0.3rem;
`;

class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppLayout>
          <NavbarArea>
            <TitleArea>GraniteCode Portfolio</TitleArea>

            <NavArea>
              <button>log in</button>
              <button>about</button>
            </NavArea>
          </NavbarArea>

          <PortfolioApp />

          <FooterArea>App by GraniteCode</FooterArea>
        </AppLayout>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
  display: grid;
  grid-template-areas:
    'navbar navbar navbar'
    'sidebar app rightbar'
    'footer footer footer';
  grid-template-columns: 2rem minmax(20rem, 1fr) max-content;
  grid-template-rows: 3rem minmax(calc(100vh - 5rem), 100%) 2rem;
  padding: 0;
  grid-gap: 0;
`;

const NavbarArea = styled.div`
  display: grid;
  grid-area: navbar;
  position: fixed;
  grid-template-areas: 'title navbar';
  grid-template-columns: 10rem 1fr;
  background-color: #ccc;
  height: 3rem;
  width: 100%;
  align-items: center;
  padding: 0px 0px;
  z-index: 5;
`;

const TitleArea = styled.div`
  grid-area: title;
  align-self: center;
  padding-left: 10px;
`;

const NavArea = styled.div`
  display: grid;
  grid-area: navbar;
  grid-auto-columns: 5rem;
  grid-auto-flow: column;
  justify-self: end;
  padding-right: 10px;
  align-self: center;
  grid-gap: 5px;
`;

const RightArea = styled.div`
  position: relative;
  grid-area: rightbar;
  width: 12rem;
`;

const SideArea = styled.div`
  position: relative;
  grid-area: sidebar;
  width: 12rem;
  left: -10rem;
  overflow: hidden;
  &:hover {
    left: 0;
  }
  transition: left 0.2s ease-in-out;
`;

const AppArea = styled.div`
  grid-area: app;
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
      <AppLayout>
        <NavbarArea>
          <TitleArea>GraniteCode Investment Tracker</TitleArea>

          <NavArea>
            <button>login</button>
            <button>logout</button>
          </NavArea>
        </NavbarArea>
        <AppArea>
          <div
            style={{
              width: '100%',
              height: '40rem',
              backgroundColor: 'silver',
            }}
          >
            Test App
          </div>
        </AppArea>
        <RightArea>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#eee',
            }}
          >
            right
          </div>
        </RightArea>
        <SideArea>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#eee',
            }}
          >
            side
          </div>
        </SideArea>
        <FooterArea>App by GraniteCode</FooterArea>
      </AppLayout>
    );
  }
}

export default App;

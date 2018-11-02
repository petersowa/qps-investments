import React from 'react';
import AppState from '../../../model/context/context';
import styled from 'styled-components';
import { SideManager } from '../../SideManager';
import Login from '../../../pages/login';
import { Router, Link } from '@reach/router';

const RightArea = styled.div`
  grid-area: rightbar;
`;

const SideArea = styled.div`
  display: grid;
  position: fixed;
  grid-area: sidebar;
  width: 12rem;
  height: 100%;
  top: 3rem;
  left: -10rem;
  z-index: 5;
  opacity: 0.8;
  &:hover {
    left: 0;
  }
  transition: left 0.2s ease-in-out;
  justify-items: center;
  grid-template-columns: 1fr;
  align-content: start;
`;

const AppArea = styled.div`
  grid-area: app;
`;

class Portfolio extends React.Component {
  static contextType = AppState;

  render() {
    //console.log(this.context);
    return (
      <div>
        <h3>Finance App</h3>
        <pre>{JSON.stringify(this.context.portfolios, null, 2)}</pre>
      </div>
    );
  }
}
const AppLayout = () => (
  <React.Fragment>
    <AppArea>
      <div
        style={{
          height: '100%',
          padding: '1rem',
        }}
      >
        <Router>
          <Portfolio path="/" />
          <Login path="login" />
        </Router>
      </div>
    </AppArea>
    <RightArea>
      <SideManager />
    </RightArea>
    <AppState.Consumer>
      {context => (
        <SideArea>
          <button
            onClick={() => {
              //console.log(context);
              context.setSidebar(
                <div
                  style={{
                    backgroundColor: '#eee',
                    padding: '1rem',
                  }}
                >
                  <h3>Hello</h3>
                  Hello
                </div>
              );
            }}
          >
            Hello
          </button>
          <button
            onClick={() => {
              console.log(context);
              context.setSidebar(<h3>Bye</h3>);
            }}
          >
            Goodbye
          </button>
          <button
            onClick={() => {
              console.log(context);
              context.setSidebar(null);
            }}
          >
            side
          </button>
        </SideArea>
      )}
    </AppState.Consumer>
  </React.Fragment>
);

export default AppLayout;

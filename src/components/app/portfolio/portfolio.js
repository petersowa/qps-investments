import React from 'react';
import ContextState from '../../../model/context/context';
import styled from 'styled-components';
import { SideManager } from '../../SideManager';

const RightArea = styled.div`
  grid-area: rightbar;
`;

const SideArea = styled.div`
  display: grid;
  position: fixed;
  grid-area: sidebar;
  width: 12rem;
  height: 100%;
  left: -10rem;
  &:hover {
    left: 0;
  }
  transition: left 0.2s ease-in-out;
  justify-items: center;
  grid-template-columns: 1fr;
  align-content: center;
`;

const AppArea = styled.div`
  grid-area: app;
`;

class Portfolio extends React.Component {
  static contextType = ContextState;

  render() {
    console.log(this.context);
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
        <Portfolio />
      </div>
    </AppArea>
    <RightArea>
      <SideManager />
    </RightArea>
    <ContextState.Consumer>
      {context => (
        <SideArea>
          <button
            onClick={() => {
              console.log(context);
              context.setSidebar(<div>Hello</div>);
            }}
          >
            a
          </button>
          <button>b</button>
          <button>side</button>
        </SideArea>
      )}
    </ContextState.Consumer>
  </React.Fragment>
);

export default AppLayout;

import React from 'react';
import contextState from '../model/context/context';

class SideManager extends React.Component {
  static contextType = contextState;
  render() {
    return <div>{this.context.sidebar}</div>;
  }
}

export { SideManager };

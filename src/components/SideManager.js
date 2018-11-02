import React from 'react';
import AppState from '../model/context/context';

class SideManager extends React.Component {
  static contextType = AppState;

  componentDidMount() {
    setTimeout(() => this.context.setSidebar(<p>this is a test</p>), 3000);
    this.context.sidebar = <p>this is a test 2</p>;
  }

  render() {
    return this.context.sidebar.map(item => <div key={item.id}>{item.el}</div>);
  }
}

export { SideManager };

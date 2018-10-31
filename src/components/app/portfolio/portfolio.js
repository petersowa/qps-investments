import React from 'react';
import contextState from '../../../model/context/context';

export default class Portfolio extends React.Component {
  static contextType = contextState;

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

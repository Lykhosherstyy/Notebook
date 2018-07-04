import React, { Component } from 'react';

export default class AddButton extends Component {
  render() {
    const { btnText, type, className } = this.props;

    return (
      <div>
        <button type={type} className={className}>{btnText}</button>
      </div>
    );
  }
}
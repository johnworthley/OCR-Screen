import React from 'react';

class ColorPicker extends React.Component {
  render() {
    const colorStyle = { backgroundColor: `rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})` };
    return (
      <div>
        <input type={'text'} size={'3'} value={this.props.color.r} readOnly></input>
        <input type={'text'} size={'3'} value={this.props.color.g} readOnly></input>
        <input type={'text'} size={'3'} value={this.props.color.b} readOnly></input>
        <div className='color-box' style={colorStyle}></div>
      </div>
    );
  }
}

export default ColorPicker;

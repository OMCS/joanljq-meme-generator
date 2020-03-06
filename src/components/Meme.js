import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Meme extends Component {

  render() {
    return (
      <div>
        <img alt={this.props.query} src={this.props.clickedurl}></img>
        <p>{this.props.memetext}</p>
        <button onClick={this.props.handleButtonClick}>Back to Search Image</button>
      </div>
    );
  }
}

// PropTypes
Meme.propTypes = {
  query: PropTypes.string.isRequired,
  clickedurl: PropTypes.string.isRequired,
  memetext: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
}

export default Meme;

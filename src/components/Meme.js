import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../style/meme.module.css'

class Meme extends Component {

  render() {
    return (
      <div>
        <button className={styles.homebutton} onClick={this.props.handleButtonClick}>Back to Search Image</button>
        <img className={styles.picturestyle} alt={this.props.query} src={this.props.clickedurl}></img>
        <p>{this.props.memetext}</p>
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

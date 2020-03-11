import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../style/meme.module.css'

class Meme extends Component {

  render() {
    return (
      <div>
        <div className={styles.container}>
          <img className={styles.picturestyle} alt={this.props.query} src={this.props.clickedurl}></img>
          <p className={styles.centered}>{this.props.memetext}</p>
        </div>
        <button className={styles.button} onClick={this.props.handleButtonClick}>Back to Search Image</button>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../style/meme.module.css'

class Meme extends Component {

  render() {
    return (
      <div>
        <div className={styles.container}>
          <div id="my-node">
            <img className={styles.picturestyle} alt={this.props.query} src={this.props.clickedurl}></img>
            <p className={styles.centered}>{this.props.memetext}</p>
          </div>
        </div>
        <button className={styles.button1} onClick={this.props.downloadHandler} >Download Meme</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className={styles.button2} onClick={this.props.handleButtonClick}>Back to Search</button>
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
  downloadHandler: PropTypes.func.isRequired,
}

export default Meme;

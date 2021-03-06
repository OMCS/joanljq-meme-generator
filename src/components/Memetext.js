import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../style/memetext.module.css'


class Memetext extends Component {

  render() {
    return (
      <div>
        <img className={styles.picturestyle} alt={this.props.query} src={this.props.clickedurl}></img>
        <form onSubmit={this.props.handleMtSubmit}>
           <input
             style={{ width: '40%', padding: '6px 10px', margin: '0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: 'large' }}
             placeholder="Enter text for meme"
             type="text"
             value={this.props.memetext}
             onChange={this.props.handleMtChange}
           />
           <p><input 
            type="submit" 
            value="Generate meme" 
            className={styles.button1}
           /></p>
        </form>
      </div>
    );
  }
}

// PropTypes
Memetext.propTypes = {
  query: PropTypes.string.isRequired,
  clickedurl: PropTypes.string.isRequired,
  memetext: PropTypes.string.isRequired,
  handleMtSubmit: PropTypes.func.isRequired,
  handleMtChange: PropTypes.func.isRequired,
}

export default Memetext;

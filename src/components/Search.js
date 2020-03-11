import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../style/search.module.css'

class Search extends Component {

  render() {
    let showtext = '';
    if (this.props.enteredstext) {
      showtext = "Please pick a photo"
    }

    return (
      <div>
        <h1>Welcome to Meme Generator</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            placeholder="Search for..."
            type="text"
            value={this.props.query}
            onChange={this.props.handleChange}
          />
        </form>
        <p>{showtext}</p>
        <div className={styles.box}>
          <div className={styles.row}>
            {this.props.pictures.map((pictureurl, i) => <div className={styles.column} key={i}><img src={pictureurl} alt={this.props.query} value={pictureurl} key={i} onClick={() => this.props.handleImageClick(pictureurl)}/></div>)}
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes
Search.propTypes = {
  query: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
  enteredstext: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleImageClick: PropTypes.func.isRequired,
}

export default Search;

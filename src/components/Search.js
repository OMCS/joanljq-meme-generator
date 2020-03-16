import React, { Component } from 'react';
import PropTypes from 'prop-types';

import background from '../style/meme.png';
import styles from '../style/search.module.css'

class Search extends Component {

  render() {
    // {this.props.pictures.map((pictureurl, i) => <div className={styles.column} key={i}><img src={pictureurl} alt={this.props.query} value={pictureurl} key={i} onClick={() => this.props.handleImageClick(pictureurl)}/></div>)}
    if (this.props.enteredstext) {
      return (
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <input
              style={{ width: '50%', padding: '12px 20px', margin: '20px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: 'large' }}
              placeholder="Search for..."
              type="text"
              value={this.props.query}
              onChange={this.props.handleChange}
            />
          </form>
          <p>please pick an image</p>
          <div className={styles.box}>
          {this.props.pictures.map((pictureurl, i) => <img src={pictureurl} alt={this.props.query} className={styles.image} value={pictureurl} key={i} onClick={() => this.props.handleImageClick(pictureurl)}/>)}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <img src={background} alt='background' className={styles.backgroundimg}/>
          <div className={styles.centered}>
            <h1 className={styles.text}>Start Making Memes Now</h1>
            <form onSubmit={this.props.handleSubmit}>
              <input
                style={{ width: '100%', padding: '12px 20px', margin: '0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: 'large' }}
                placeholder="Search for..."
                type="text"
                value={this.props.query}
                onChange={this.props.handleChange}
              />
            </form>
          </div>
        </div>
      );
    }
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

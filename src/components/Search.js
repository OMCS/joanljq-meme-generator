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
          <p>Please pick a photo</p>
          <div className={styles.box}>
            <div className={styles.row}>
              <div className={styles.column}>
                <img src={this.props.pictures[0]} alt={this.props.query} value={this.props.pictures[0]} onClick={() => this.props.handleImageClick(this.props.pictures[0])}/>
                <img src={this.props.pictures[1]} alt={this.props.query} value={this.props.pictures[1]} onClick={() => this.props.handleImageClick(this.props.pictures[1])}/>
                <img src={this.props.pictures[2]} alt={this.props.query} value={this.props.pictures[2]} onClick={() => this.props.handleImageClick(this.props.pictures[2])}/>
                <img src={this.props.pictures[3]} alt={this.props.query} value={this.props.pictures[3]} onClick={() => this.props.handleImageClick(this.props.pictures[3])}/>
                <img src={this.props.pictures[4]} alt={this.props.query} value={this.props.pictures[4]} onClick={() => this.props.handleImageClick(this.props.pictures[4])}/>
              </div>
              <div className={styles.column}>
                <img src={this.props.pictures[5]} alt={this.props.query} value={this.props.pictures[5]} onClick={() => this.props.handleImageClick(this.props.pictures[5])}/>
                <img src={this.props.pictures[6]} alt={this.props.query} value={this.props.pictures[6]} onClick={() => this.props.handleImageClick(this.props.pictures[6])}/>
                <img src={this.props.pictures[7]} alt={this.props.query} value={this.props.pictures[7]} onClick={() => this.props.handleImageClick(this.props.pictures[7])}/>
                <img src={this.props.pictures[8]} alt={this.props.query} value={this.props.pictures[8]} onClick={() => this.props.handleImageClick(this.props.pictures[8])}/>
                <img src={this.props.pictures[9]} alt={this.props.query} value={this.props.pictures[9]} onClick={() => this.props.handleImageClick(this.props.pictures[9])}/>
              </div>
              <div className={styles.column}>
                <img src={this.props.pictures[10]} alt={this.props.query} value={this.props.pictures[10]} onClick={() => this.props.handleImageClick(this.props.pictures[10])}/>
                <img src={this.props.pictures[11]} alt={this.props.query} value={this.props.pictures[11]} onClick={() => this.props.handleImageClick(this.props.pictures[11])}/>
                <img src={this.props.pictures[12]} alt={this.props.query} value={this.props.pictures[12]} onClick={() => this.props.handleImageClick(this.props.pictures[12])}/>
                <img src={this.props.pictures[13]} alt={this.props.query} value={this.props.pictures[13]} onClick={() => this.props.handleImageClick(this.props.pictures[13])}/>
                <img src={this.props.pictures[14]} alt={this.props.query} value={this.props.pictures[14]} onClick={() => this.props.handleImageClick(this.props.pictures[14])}/>
              </div>
              <div className={styles.column}>
                <img src={this.props.pictures[15]} alt={this.props.query} value={this.props.pictures[15]} onClick={() => this.props.handleImageClick(this.props.pictures[15])}/>
                <img src={this.props.pictures[16]} alt={this.props.query} value={this.props.pictures[16]} onClick={() => this.props.handleImageClick(this.props.pictures[16])}/>
                <img src={this.props.pictures[17]} alt={this.props.query} value={this.props.pictures[17]} onClick={() => this.props.handleImageClick(this.props.pictures[17])}/>
                <img src={this.props.pictures[18]} alt={this.props.query} value={this.props.pictures[18]} onClick={() => this.props.handleImageClick(this.props.pictures[18])}/>
                <img src={this.props.pictures[19]} alt={this.props.query} value={this.props.pictures[19]} onClick={() => this.props.handleImageClick(this.props.pictures[19])}/>
              </div>
            </div>
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

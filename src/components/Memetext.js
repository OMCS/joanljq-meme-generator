import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Memetext extends Component {

  render() {
    return (
      <div>
        <img alt={this.props.query} src={this.props.clickedurl}></img>
        <form onSubmit={this.props.handleMtSubmit}>
           <input
             placeholder="Enter text for meme"
             type="text"
             value={this.props.memetext}
             onChange={this.props.handleMtChange}
           />
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

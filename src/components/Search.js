import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Search extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
         <input
           placeholder="Search for..."
           type="text"
           value={this.props.query}
           onChange={this.props.handleChange}
         />
         <p>Please pick a photo</p>
      </form>
    );
  }
}

// PropTypes
Search.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Search;

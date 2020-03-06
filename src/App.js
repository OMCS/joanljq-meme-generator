import React, { Component } from 'react';
import Search from './components/Search';
import Memetext from './components/Memetext';
import Meme from './components/Meme';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMtChange = this.handleMtChange.bind(this);
    this.handleMtSubmit = this.handleMtSubmit.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      query: '',
      pictures: [],
      clickedurl: '',
      clickedimage: false,
      memetext: '',
      enteredtext: false
    }
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getInfo();
  }

  handleMtChange(event) {
    this.setState({
      memetext: event.target.value,
    });
  }

  handleMtSubmit(event) {
    event.preventDefault();
    this.setState({
      enteredtext: true,
    });
  }

  getInfo() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f9deeac6a7448cf0f1489aa0a2720892&text=${this.state.query}&per_page=10&format=json&nojsoncallback=1`)
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          [<img alt={this.state.query} src={srcPath}></img>, srcPath]
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  handleImageClick(value) {
    this.setState({
      clickedurl: value,
      clickedimage: true,
    });
  }

  handleButtonClick() {
    this.setState({
      query: '',
      pictures: [],
      clickedurl: '',
      clickedimage: false,
      memetext: '',
      enteredtext: false
    });
  }

  render() {
    let {clickedimage} = this.state;
    let {enteredtext} = this.state;
    if (clickedimage && !enteredtext) {
      return (
        <div className="App">
          <Memetext
            query={this.state.query}
            clickedurl={this.state.clickedurl}
            memetext={this.state.memetext}
            handleMtSubmit={this.handleMtSubmit}
            handleMtChange={this.handleMtChange}
          />
        </div>
      );
    } else if (!clickedimage && !enteredtext) {
      return (
        <div className="App">
          <Search
            query={this.state.query}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          {this.state.pictures.map((picture, i) => <li value={picture[1]} key={i} onClick={() => this.handleImageClick(picture[1])}>{picture[0]}</li>)}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Meme
            query={this.state.query}
            clickedurl={this.state.clickedurl}
            memetext={this.state.memetext}
            handleButtonClick={this.handleButtonClick}
          />
        </div>
      );
    }
  }
}

export default App;

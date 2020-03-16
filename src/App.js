import React, { Component } from 'react';
import Search from './components/Search';
import Memetext from './components/Memetext';
import Meme from './components/Meme';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

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
    this.downloadHandler = this.downloadHandler.bind(this);
    this.state = {
      query: '',
      pictures: [],
      clickedurl: '',
      clickedimage: false,
      memetext: '',
      enteredmtext: false, 
      enteredstext: false
    }
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      enteredstext: true,
    });
    this.getInfo();
  }

  handleMtChange(event) {
    this.setState({
      memetext: event.target.value,
    });
  }

  handleMtSubmit(event) {
    event.preventDefault();
    let originaltext = this.state.memetext;
    let uppertext = originaltext.toUpperCase();
    this.setState({
      enteredmtext: true,
      memetext: uppertext,
    });
  }

  getInfo() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f9deeac6a7448cf0f1489aa0a2720892&text=${this.state.query}&per_page=20&format=json&nojsoncallback=1`)
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      //alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        // 'https://live.staticflickr.com/'
        // 'https://farm'+pic.farm+'.staticflickr.com/'
        var srcPath = 'https://live.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          srcPath
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
    .catch(function(error) {
      console.log(`error:${error}`);
    });
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
      enteredmtext: false,
      enteredstext: false
    });
  }

  downloadHandler(event){
    event.preventDefault();
    domtoimage.toBlob(document.getElementById('my-node'))
    .then(function (blob) {
        saveAs(blob, 'myMeme.png');
    });
  }

  render() {
    let {clickedimage} = this.state;
    let {enteredmtext} = this.state;
    if (clickedimage && !enteredmtext) {
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
    } else if (!clickedimage && !enteredmtext) {
      return (
        <div className="App">
          <Search
            query={this.state.query}
            pictures={this.state.pictures}
            enteredstext={this.state.enteredstext}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleImageClick={this.handleImageClick}
          />
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
            downloadHandler = {this.downloadHandler}
          />
        </div>
      );
    }
  }
}

export default App;

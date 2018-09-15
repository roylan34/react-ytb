import React, { Component } from 'react';
import SearchBar from './component/searchBar';
import VideoList from './component/videoList';
import VideoDetails from './component/videoDetails';
import YTSearch from 'youtube-api-v3-search';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
const YTB_API_KEY = 'AIzaSyAHpIkySEAg6QBBlmh0KuPhRE3yy-YD8oU';

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.handleSearchVideo = this.handleSearchVideo.bind(this);
    this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
    this.handleRequestSearch = _.debounce(this.handleRequestSearch, 500);
    this.handleSearch = this.handleSearch.bind(this);

    this.handleSearchVideo("PHP 7");
  }

  handleSearchVideo(search) {
    //Youtube
    YTSearch(YTB_API_KEY, { q: search }, (error, result) => {
      this.setState({
        videos: result.items,
        selectedVideo: result.items[0]
      });
    });
  }
  handleSelectedVideo(video) {
    this.setState({ selectedVideo: video });
  }
  //Do not pool SyntheticEvent means object will not erase.
  //Read the value before the debounce.
  handleSearch(event){
    event.persist();
    this.handleRequestSearch(event);
  }
  //Pass entire object event.
  handleRequestSearch(search) {
  //  console.log(search);
  //  console.log(search.target.value);
    this.handleSearchVideo(search.target.value);
  }

  render() {
    return (
      <div className="container">
        <SearchBar handleSearch={ this.handleSearch} />
        <div className="row">
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            handleSelectedVideo={this.handleSelectedVideo} />
        </div>
      </div>
    )

  }
}

export default App;
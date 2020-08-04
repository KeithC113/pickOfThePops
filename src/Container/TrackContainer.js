import React from 'react';
import TrackSelector from '../Components/TrackSelector';
import TrackDetail from '../Components/TrackDetail'

class TrackContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      tracks:[],
      selectedTrack: null 
    };
    this.handleTrackSelected = this.handleTrackSelected.bind(this);

  }
  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
    .then(res => res.json())
    .then(tracks => this.setState({tracks: tracks.feed.entry}))
    .catch(err => console.error);
  }

  handleTrackSelected(track){
    this.setState({selectedTrack:track})
  }

  render(){

        const selectedTrack = this.state.tracks.find(track =>this.state.selectedTrack === track)

    return(
      <div>
      <h2> Top 20 Track List </h2>
      <TrackSelector tracks={this.state.tracks} onTrackSelected={this.handleTrackSelected}/>
      <TrackDetail track={this.state.selectedTrack}/>
      </div>
    );
  }
}

export default TrackContainer

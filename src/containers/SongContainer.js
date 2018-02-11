import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SongIndex from '../components/Song/SongIndex';

class SongContainer extends React.Component {
  constructor() {
    super()
  }

  render(){
    console.log('In the song container props:', this.props)
    return (
      <div>
        <h1>In the Song Container</h1>
        <Switch>
          <Route
            path='/songs'
            component={SongIndex}
            />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongContainer)

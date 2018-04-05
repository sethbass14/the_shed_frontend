import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongShow from '../components/Song/SongShow';
import NoMatch from '../components/NoMatch'

class SongShowContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.redirect ? (
          <NoMatch/>
        ) : (
          <SongShow
            band={this.props.band}
            song={this.props.song}
            />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  const band = state.bands.find(band => band.slug === prevProps.match.params.bandSlug)
  const song = state.songs.find(song => song.slug === prevProps.match.params.songSlug)
  let redirect = band && !song ? true : false
  if (song) {
    return {
      song,
      band,
      redirect
    }
  } else {
    return {
      song: {},
      band: {},
      redirect
    }
  }
}

export default withRouter(connect(mapStateToProps)(SongShowContainer))

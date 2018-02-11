import React from 'react';
import { connect } from 'react-redux';
import SongListItem from '../components/Song/SongListItem';

class SongListContainer extends React.Component {
  render() {
    const songItems = this.props.songs.map((song, index) => <SongListItem song={song} key={index}/>)
    return (
      <div>
        {songItems}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongListContainer)

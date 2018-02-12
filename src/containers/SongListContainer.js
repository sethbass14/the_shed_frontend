import React from 'react';
import { connect } from 'react-redux';
import SongListItem from '../components/Song/SongListItem';

const SongListContainer = (props) =>  {
    const songItems = props.songs.map((song, index) => <SongListItem song={song} key={index}/>)
    return (
      <div>
        {songItems}
      </div>
    )
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongListContainer)

import React from 'react';
import SongCard from './SongCard';
import SongNoteFormContainer from '../../containers/SongNoteFormContainer';
import BandCard from '../Band/BandCard';
import VideoContainer from '../../containers/VideoContainer';

const SongShow = props => {
  return (
    <div className="show">
      <div className='ui grid container'>
        <div className="sixteen wide centered column">
          {props.song ? <h1>Song Title:  {props.song.title}</h1> : null}
          <br></br>
          </div>
          <div className="five wide column">
            <BandCard band={props.band} />
            </div>
            <div className=" five wide column">
              {props.song.id ? <SongCard song={props.song} band={props.band} /> : null }
              <br></br>
                {props.song.id? <SongNoteFormContainer song={props.song} /> : null}
              </div>
              <div className="five wide column">
                <VideoContainer song={props.song} band={props.band}/>
                </div>
              </div>
            </div>
        )
}

export default SongShow

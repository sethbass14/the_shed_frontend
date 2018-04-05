import React from 'react';
import { Link } from 'react-router-dom';
import SongListItem from '../Song/SongListItem';
import SetSongContainer from '../../containers/SetSongContainer';
import BandCard from '../Band/BandCard';

const SetListShow = props => {
    const bandSongTitles = props.bandSongs.map((song, index) =>  <SongListItem key={index} song={song} setList={props.setList}/>)
    return (
        <div className="show">
          <div className="ui grid container">
            <div className="twelve wide centered column">
              {props.band.id? (
                <div>
                  <h1>{props.band.name}</h1>
                  <h2>{props.setList.name} </h2>
                  <h2>{props.setList.date} </h2>
                </div>
                ) : (
                  null
                )
              }
            </div>
            <div className="five wide column">
              <BandCard band={props.band}/>
              <div>
                <button className="ui button" onClick={() => props.handleDeleteClick()}>Delete Set List</button>
              </div>
            </div>
          <div className="five wide column">
            <h2>Build Your Set List</h2>
              <SetSongContainer songs={props.setSongsShow} setList={props.setList}/>
          </div>
          <div className="five wide column">
            <h2>Repertoire</h2>
            {bandSongTitles.length ? (
              <div>
                <h4>Add a song to build a set list</h4>
                {bandSongTitles}
              </div>
            ) : (
              <Link to={`/bands/${props.band.slug}`}>
                {`Upload More Songs On ${props.band.name}'s page`}
              </Link>
            )}
          </div>
        </div>
      </div>
    )
}

export default SetListShow

import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer'



const SongCard = props => {
  console.log("In SongCard", props)
  return (
      <div className="ui card">
        <div className="content">
          <Link
            to={`/bands/${props.song.id}`} >
            <h3>{props.song.title}</h3>
          </Link>
        </div>
        <div className="extra content">
        </div>
      </div>
  )
}

export default SongCard

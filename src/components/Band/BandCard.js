import React from 'react';
import { Link } from 'react-router-dom';

//This component is in inheriting a band from Band Index. Check this out if you want to reuse it.
const BandCard = props => {
  // console.log("In BandCard", props)
  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="content">
          <Link
            to={`/bands/${props.band.id}`} >
            <h3>{props.band.name}</h3>
          </Link>
        </div>
        <div className="extra content">
          {`${props.band.song_ids.length} songs`}
        </div>
      </div>
    </div>
  )
}


export default BandCard

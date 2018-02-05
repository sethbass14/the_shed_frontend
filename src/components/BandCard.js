import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'



//This component inherits props from iteration in the parent
// Right now, the parent is BandsIndex
const BandCard = props => {
  console.log("In BandCard", props)
  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <h3>This is a band card</h3>
        <Link
          to={`/bands/${props.band.name}`}
          onClick={() =>
            props.changeActiveBandId(props.band.id)}
          >
          <h3>{props.band.name}</h3>
        </Link>
      </div>
    </div>
  )
}


export default connect(null, actions)(BandCard)
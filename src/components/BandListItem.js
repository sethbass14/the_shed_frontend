import React from 'react';
import * as actions from '../actions';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const BandListItem = props => (
  <div>
    <Link
      to={`/bands/${props.band.id}`}
      onClick={ event => props.changeActiveBandId(props.band.id)}
      >
      {props.band.name}
    </Link>
  </div>
)



export default connect(null, actions)(BandListItem)

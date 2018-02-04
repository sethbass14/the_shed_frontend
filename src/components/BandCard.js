import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'



//This component inherits props from iteration in the parent
// Right now, the parent is BandsIndex
const BandCard = props => {
  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <h3>This is a band card</h3>
        <h3>{props.band.name}</h3>
      </div>
    </div>
  )
}


export default BandCard

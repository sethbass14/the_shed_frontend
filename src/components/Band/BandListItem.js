import React from 'react';
import { Link } from 'react-router-dom'

const BandListItem = props => (
  <div>
    <Link
      to={`/bands/${props.band.id}`}
      >
      {props.band.name}
    </Link>
  </div>
)

export default BandListItem

import React from 'react';
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

const BandListItem = props => (
  <div>
    <Segment className="opaque">
      <Link
        to={`/bands/${props.band.id}`}
        >
        {props.band.name}
      </Link>
    </Segment>
  </div>
)

export default BandListItem

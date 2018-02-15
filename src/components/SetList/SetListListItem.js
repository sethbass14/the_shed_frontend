import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'

const SetListListItem = props => {
  // console.log('In SetList List Item', props)
  return (
    <div>
      <Segment className='opaque'>
        <Link to={`${props.match.url}/setlists/${props.setList.id}`}>
          {props.setList.name}
          {props.setList.date}
        </Link>

      </Segment>
    </div>
  )
}

export default withRouter(SetListListItem)

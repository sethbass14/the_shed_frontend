import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SetListListItem = props => {
  // console.log('In SetList List Item', props)
  return (
    <div>
      <Link to={`${props.match.url}/setlists/${props.setList.id}`}>
        {props.setList.name}
        {props.setList.date}
      </Link>
    </div>
  )
}

export default withRouter(SetListListItem)

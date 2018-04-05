import React from 'react';

const SetSongExtraContent = props => {
  console.log('SetSongExtraContent props: ', props)
  return (
    <div>
      <button
        className="ui button"
        onClick={() => props.handleDelete(props.setSong.id)}
        >
        Remove From Set
      </button>
      <h4>
        Set Order:
        <i className="minus circle icon" name="minus" id="decrement" onClick={(event) => props.handleOrderChange(event, props.setSong.id)}></i>
          {props.setSong ?  props.setSong.order : null}
          <i className="add circle icon" name="plus" id="increment" onClick={(event) => props.handleOrderChange(event, props.setSong.id)}></i>
          </h4>
        </div>
      )
}

export default SetSongExtraContent

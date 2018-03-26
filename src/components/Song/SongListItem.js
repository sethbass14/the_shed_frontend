import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import * as actions from '../../actions';

const SongListItem = props => {
  return (
    <div>
      <Segment className="opaque">
        <Link to={`/bands/${props.bandSlug}/songs/${props.song.slug}`}>
          {props.song.title}
        </Link>
        {props.setList ? (
          <i className="add circle icon"
            onClick={() => props.addSetSong({song_id: props.song.id, set_list_id: props.setList.id, order: props.setList.song_ids.length + 1})}>
          </i>
        ) : (
          null
        )}
      </Segment>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const band = state.bands.find(band => band.id === ownProps.song.band_id)
  const bandSlug = band.slug
  return {
    bandSlug
  }
}


export default withRouter(connect(mapStateToProps, actions)(SongListItem))

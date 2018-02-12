import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import AudioPlayer from '../AudioPlayer'
import * as actions from '../../actions'


//Could make this into a class component to guard against accidental deletes.
class SongCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="ui eight wide column">
        <div className="ui card">
          <div className="content">
            <Link to={`/bands/${this.props.song.band_id}/songs/${this.props.song.id}`}>
              <h3>{this.props.song.title}</h3>
            </Link>
            <h4>band:</h4> <Link to={`/bands/${this.props.song.band_id}`}>{this.props.band ? this.props.band.name : null}</Link>
          </div>
          <div className="extra content">
            {this.props.setSong? (
              <div>
                <button
                  className="ui button"
                  onClick={() => this.props.handleDelete(this.props.setSong.id)}
                  >
                  Remove From Set
                </button>
                <h4>
                  Set Order:
                  <i className="minus circle icon" name="minus" onClick={() => this.props.handleOrderDecrement(this.props.setSong.id)}></i>
                  {this.props.setSong.order}
                  <i className="add circle icon" name="plus" onClick={() => this.props.handleOrderIncrement(this.props.setSong.id)}></i>
                </h4>
              </div>
            ) : (
              <button
                className="ui button"
                onClick={() => this.props.deleteSong(this.props.song.id, this.props.history)}>
                Delete Song
              </button>
            )}
          </div>
        </div>
        {this.props.setSong? (
          null
        ) : (
          <AudioPlayer song={this.props.song}/>
        ) }
      </div>

    )
  }
}

const mapStateToProps = (state, prevProps) => {
  if (prevProps.setSong) {
    return {
      band: state.bands.find(band => band.id === prevProps.song.band_id),
      setSong: state.setSongs.find(setSong => setSong.set_list_id === prevProps.setList.id && setSong.song_id === prevProps.song.id )
     }
  } else {
    return {}
  }
}

export default withRouter(connect(mapStateToProps, actions)(SongCard))

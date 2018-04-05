import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import AudioPlayer from '../AudioPlayer'
import SetSongExtraContent from './SetSongExtraContent'
import * as actions from '../../actions'


//Could make this into a class component to guard against accidental deletes.
class SongCard extends React.Component {
  render() {
    return (
      <div className="ui eight wide column">
        <div className="ui card opaque">
          <div className="content">
            <i className="right floated music icon"></i>
            <Link to={`/bands/${this.props.band.slug}/songs/${this.props.song.slug}`}>
              <h3>{this.props.song.title}</h3>
            </Link>
            {this.props.songIndex ? (
              <div>
                <h4>band:</h4>
                <Link to={`/bands/${this.props.band.slug}`}>{this.props.band ? this.props.band.name : null}</Link>
              </div>
            ) : (
              null
            )}
          </div>
          {this.props.songIndex ? (
            null
          ) : (
            <div className="extra content">
              {this.props.setSong? (
                <SetSongExtraContent
                  setSong={this.props.setSong}
                  handleOrderChange={this.props.handleOrderChange}
                  handleDelete={this.props.handleDelete}
                  />
              ) : (
                <button
                  className="ui button"
                  onClick={() => this.props.deleteSong(this.props.song.id, this.props.match.params.bandSlug, this.props.history)}>
                  Delete Song
                </button>
              )}
            </div>
          )}

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

import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SongListItem from '../Song/SongListItem';
import SetSongContainer from '../../containers/SetSongContainer';
import BandCard from '../Band/BandCard';
import NoMatch from '../NoMatch'
// import * as actions from '../../actions';

//Make this a class to add a search bar functionality in the future
class SetListShow extends React.Component {
  render() {
    console.log('SetListShow props: ', this.props)
    const bandSongTitles = this.props.bandSongs.map((song, index) =>  <SongListItem key={index} song={song} setList={this.props.setList}/>)
    return (
        <div className="show">
          <div className="ui grid container">
            <div className="twelve wide centered column">
              {this.props.band.id? (
                <div>
                  <h1>{this.props.band.name}</h1>
                  <h2>{this.props.setList.name} </h2>
                  <h2>{this.props.setList.date} </h2>
                </div>
                ) : (
                  null
                )
              }
            </div>
            <div className="five wide column">
              <BandCard band={this.props.band}/>
              <div>
                <button className="ui button" onClick={() => this.props.handleDeleteClick()}>Delete Set List</button>
              </div>
            </div>
          <div className="five wide column">
            <h2>Build Your Set List</h2>
              <SetSongContainer songs={this.props.setSongsShow} setList={this.props.setList}/>
          </div>
          <div className="five wide column">
            <h2>Repertoire</h2>
            {bandSongTitles.length ? (
              <div>
                <h4>Add a song to build a set list</h4>
                {bandSongTitles}
              </div>
            ) : (
              <Link to={`/bands/${this.props.band.slug}`}>
                {`Upload More Songs On ${this.props.band.name}'s page`}
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SetListShow)

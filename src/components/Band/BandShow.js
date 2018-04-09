import React from 'react';
import { withRouter } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import SongListItem from '../Song/SongListItem';
import SetListListItem from '../SetList/SetListListItem';
import SongInput from '../Song/SongInput';
import BandCard from './BandCard';
import SetListInput from '../SetList/SetListInput';



class BandShow extends React.Component {
  render() {
    const bandSongs = this.props.songs.map((song, index) => <SongListItem key={index} song={song} />)
    const bandSetLists = this.props.setLists.map((setList, index) => { return <SetListListItem key={index} setList={setList} />})
    return (
        <div className="show">
          <div className="ui grid container">
            <div className="sixteen wide centered column heading">
              <h1>{this.props.band.name}</h1>
            </div>
            <div className="five wide column">
              <div>
                {this.props.band.id ? <BandCard band={this.props.band}/> : null}
                <br></br>
                <button
                  className="ui button"
                  onClick={() => this.props.handleBandDelete(this.props.band.id)}>
                  Delete Band
                </button>
              </div>

            </div>
            <div className="five wide column">
              <Segment basic>
                <Segment basic>
                  <h2>Songs</h2>
                </Segment>
                {bandSongs}
                <Segment className="opaque">
                  <div>
                    <h3>{`Add A Song to ${this.props.band.name}'s rep!`}</h3>
                    {this.props.addSong ? (
                      <div>
                        <i className="minus icon" onClick={() => this.props.handleSongAdd()}></i>
                        <SongInput />
                      </div>
                    ) : (
                      <i className="plus icon" onClick={() => this.props.handleSongAdd()}></i>
                    )
                  }
                </div>
                </Segment>
              </Segment>

            </div>
            <div className="five wide column">
              <Segment basic>
                <Segment basic>
                  <h2>Set Lists</h2>
                </Segment>
                {bandSetLists}
                <Segment className="opaque">
                  <h3>Add a Set List</h3>
                    {this.props.addSetListClick ? (
                      <div>
                        <i className="minus icon" onClick={() => this.props.handleAddSetListClick()}></i>
                        <SetListInput
                          handleAddSetListClick={this.props.handleAddSetListClick}
                          band={this.props.band}
                          />
                      </div>
                    ) : (
                      <i className="plus icon" onClick={() => this.props.handleAddSetListClick()}></i>
                    )}
                </Segment>
              </Segment>

            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(BandShow)

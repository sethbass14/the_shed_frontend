import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import BandShow from '../components/Band/BandShow';
import NoMatch from '../components/NoMatch'

class BandShowContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      addSong: false,
      deleteClick: true,
      addSetListClick: false
    }
  }

  handleSongAdd = () => {
    this.setState({ ...this.state, addSong: !this.state.addSong })
  }

  handleAddSetListClick = () => {
    this.setState({ ...this.state, addSetListClick: !this.state.addSetListClick })
  }

  deleteConfirmation = (bandId) => {
    if (this.state.deleteClick) {
      this.props.deleteBand(bandId, this.props.history)
      this.setState({ ...this.state, deleteClick: !this.state.deleteClick})
    } else {
      alert('Are you sure you want to delete this band, all of its songs and setlists? Click delete again to END this band.')
    }
  }

  handleBandDelete = (bandId) => {
    this.setState({ ...this.state, deleteClick: !this.state.deleteClick }, () => this.deleteConfirmation(bandId))
  }

  render() {
    return (
      <div>
        {this.props.redirect ? (
          <NoMatch/>
        ) : (
          <BandShow
            band={this.props.band}
            songs={this.props.songs}
            setLists={this.props.setLists}
            addSong={this.state.addSong}
            addSetListClick={this.state.addSetListClick}
            handleBandDelete={this.handleBandDelete}
            handleSongAdd={this.handleSongAdd}
            handleAddSetListClick={this.handleAddSetListClick}
            deleteConfirmation={this.deleteConfirmation}
          />
        )}
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const user = state.user.id
  const band = state.bands.find(band => band.slug === ownProps.match.params.bandSlug)
  let redirect = user && !band ? true : false
  if (band) {
    return {
      band: band,
      songs: state.songs.filter(song => song.band_id === band.id),
      setLists: state.setLists.filter(setList => setList.band_id === band.id),
      redirect
    }
  } else {
    return {
      band: {},
      songs: [],
      setLists: [],
      redirect
     }
  }
}

export default withRouter(connect(mapStateToProps, actions)(BandShowContainer))

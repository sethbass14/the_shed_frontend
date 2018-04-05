import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NoMatch from '../components/NoMatch';
import SetListShow from '../components/SetList/SetListShow';
import * as actions from '../actions';

class SetListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      deleteClick: false,
    }
  }

  handleDeleteClick = () => {
    if (!this.state.deleteClick) {
      alert('Are you sure you want to delete this set list? There is no turning back. Click again if you are sure.')
      this.setState({ deleteClick: !this.state.deleteClick })
    } else {
      this.props.deleteSetList(this.props.setList.id, this.props.band.slug, this.props.history)
    }
  }

  render() {
    console.log('In setList container')
    return (
      <div>
        {this.props.redirect ? <NoMatch/> : (
          <SetListShow
            band={this.props.band}
            setList={this.props.setList}
            bandSongs={this.props.bandSongs}
            setSongsShow={this.props.setSongsShow}
            handleDeleteClick={this.handleDeleteClick}
            />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const setList = state.setLists.find(setList => setList.slug === ownProps.match.params.setListSlug)
  const band = state.bands.find(band => band.slug === ownProps.match.params.bandSlug)
  let redirect = band && !setList ? true : false
  if (setList) {
    let bandSongs = state.songs.filter(song => song.band_id === band.id)
    const setSongsShow = bandSongs.filter(song => song.set_list_ids.includes(setList.id))
    bandSongs = bandSongs.filter(song => !song.set_list_ids.includes(setList.id))
    return {
      band,
      bandSongs,
      setList,
      setSongsShow,
      redirect
    }
  } else {
    return {
      band: {},
      bandSongs: [],
      setList: {},
      setSongsShow: [],
      redirect
    }
  }
}


export default withRouter(connect(mapStateToProps, actions)(SetListContainer))

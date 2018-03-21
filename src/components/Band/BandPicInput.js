import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class BandPicInput extends React.Component {

  handleFileSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    const image_upload = document.getElementById('image_upload')
    const file = image_upload.files[0]
    const formData = new FormData()
    if (file) {
      formData.append("image", file)
      formData.append("id", this.props.band.id)
      console.log(formData)
      console.log(this.props.band.id)
      this.props.addBandImage(formData, this.props.band.id, this.props.handleAddPicClick)
    } else {
      alert('Must upload a file on submit!')
    }
    // console.log('in handleFileSubmit')

  }

  render() {
    console.log('In band pic input props:', this.props)
    return (
      <div>
        <form onSubmit={this.handleFileSubmit}>
          <input type="file" name="image" accept="image/*" id="image_upload"></input>
          {this.props.loading ? (
              <button className="ui loading button" type="submit">Submit</button>
            ) : (
              <button className="ui button" type="submit">Submit</button>
            )
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  const band =  state.bands.find(band => band.id === parseInt(prevProps.match.params.bandId))
  if (band.id) {
    return {
      band,
      loading: state.loading
    }
  } else {
      return {
        band: {},
        loading: false
      }
  }
}

export default withRouter(connect(mapStateToProps, actions)(BandPicInput))

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class BandPicInput extends React.Component {
  constructor() {
    super()
  }

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
      this.props.addBandImage(formData, this.props.band.id)
    } else {
      alert('Must upload a file on submit!')
    }
    console.log('in handleFileSubmit')

  }

  render() {
    console.log('In band pic input props:', this.props)
    return (
      <div>
        <form onSubmit={this.handleFileSubmit}>
          <input type="file" name="image" accept="image/*" id="image_upload"></input>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  const band =  state.bands.find(band => band.id === parseInt(prevProps.match.params.bandId))
  if (band.id) {
    return {
      band
    }
  } else {
      return {
        band: {}
      }
  }
}

export default withRouter(connect(mapStateToProps, actions)(BandPicInput))

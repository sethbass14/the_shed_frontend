import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'


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
      // this.props.addUserImage(formData, this.props.band.id)
    } else {
      alert('Must upload a file on submit!')
    }
    console.log('in handleFileSubmit')

  }

  render() {
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

const mapStateToProps = state => {
  return {
    band: state.band
  }
}

export default connect(mapStateToProps, actions)(BandPicInput)

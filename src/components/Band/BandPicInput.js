import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class BandPicInput extends React.Component {
  constructor(){
    super()

    this.state = {
      image: ''
    }
  }

  handleImageChange = event => {
      event.preventDefault()
      const image = event.target.files[0]
      this.setState({ image }, () => console.log(this.state.image))
  }

  handleFileSubmit = (event) => {
    event.preventDefault()
    const { image } = this.state
    if (image) {
      const formData = new FormData()
      formData.append("image", image)
      formData.append("id", this.props.band.id)
      this.props.addBandImage(formData, this.props.band.id, this.props.handleAddPicClick)
    } else {
      alert('Must upload a file on submit!')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFileSubmit}>
          <input type="file" name="image" accept="image/*" id="image_upload" onChange={this.handleImageChange}></input>
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
  const band =  state.bands.find(band => band.slug === prevProps.match.params.bandSlug)
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

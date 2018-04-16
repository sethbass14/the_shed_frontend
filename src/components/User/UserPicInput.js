import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'



class UserPicInput extends React.Component {
  constructor() {
    super()

    this.state = {
      image: ''
    }
  }

  handleImageChange = event => {
    event.preventDefault()
    const image = event.target.files[0]
    this.setState({ image })
  }

  handleFileSubmit = (event) => {
    event.preventDefault()
    const { image } = this.state
    if (image) {
      const formData = new FormData()
      formData.append("avatar", image)
      this.props.addUserImage(formData, this.props.handleUserPicClick)
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

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading
  }
}

export default connect(mapStateToProps, actions)(UserPicInput)

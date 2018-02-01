import React from 'react';
import Dropzone from 'react-dropzone';
import api from '../services/api'


class SongInput extends React.Component {
  constructor() {
    super()

    this.state = {
      fileToBeSent: {},

    }
  }

  onDrop = (file) => {
    // console.log(file)
    // console.log(api)
    // console.log(api.songs.postNewSong)
    debugger
    this.setState({ fileToBeSent: file[0] })
    api.songs.postNewSong(file[0])

  }

  render() {
    return (
      <div className='dropzone'>
        <h1>Show me anything</h1>
        <Dropzone onDrop={(file) => this.onDrop(file)}>
          <div>
            here is where files dropzone
          </div>
        </Dropzone>

      </div>
    )
  }

}

export default SongInput

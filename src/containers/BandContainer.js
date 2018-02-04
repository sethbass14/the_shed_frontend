import React from 'react';
import { Switch, Router } from 'react-router-dom';
import SongInput from '../components/SongInput'
import withAuth from '../hocs/withAuth'


class BandContainer extends React.Component {
  render() {
    return (
      <div>
        In Bands Container
      </div>
    )
  }
}

export default withAuth(BandContainer)

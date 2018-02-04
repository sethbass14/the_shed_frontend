import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongInput from '../components/SongInput';
import withAuth from '../hocs/withAuth';
import BandsIndex from '../components/BandsIndex';


class BandContainer extends React.Component {
  render() {
    return (
      <div>
        <h2> In Bands Container </h2>
        <Switch>
          <Route
            path="/bands"
            component={BandsIndex}
            />
        </Switch>
      </div>
    )
  }
}

export default withAuth(BandContainer)

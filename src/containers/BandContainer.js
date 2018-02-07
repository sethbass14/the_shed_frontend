import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import BandsIndex from '../components/BandsIndex';
import BandShow from '../components/BandShow';
import SongShow from '../components/SongShow';
import BandInput from '../components/BandInput';


class BandContainer extends React.Component {
  render() {
    return (
        <Switch>
          <Route
            path="/bands/:bandId/songs/:songId"
            component={SongShow}
            />
          <Route
            path="/bands/new"
            component={BandInput}
            />
          <Route
            path="/bands/:bandId"
            component={BandShow}
            />
          <Route
            path="/bands"
            component={BandsIndex}
            />
        </Switch>
    )
  }
}

export default BandContainer

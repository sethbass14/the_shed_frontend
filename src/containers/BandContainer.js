import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BandsIndex from '../components/Band/BandsIndex';
import BandShow from '../components/Band/BandShow';
import SongShow from '../components/Song/SongShow';
import BandInput from '../components/Band/BandInput';
import SetListShow from '../components/SetList/SetListShow';


class BandContainer extends React.Component {
  render() {
    return (
        <Switch>
          <Route
            path="/bands/:bandId/songs/:songId"
            component={SongShow}
            />
          <Route
            path="/bands/:bandId/setlists/:setListId"
            component={SetListShow}
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

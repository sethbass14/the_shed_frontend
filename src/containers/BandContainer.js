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
            path="/bands/:bandSlug/songs/:songSlug"
            component={SongShow}
            />
          <Route
            path="/bands/:bandSlug/setlists/:setListSlug"
            component={SetListShow}
            />
          <Route
            path="/bands/:bandSlug"
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

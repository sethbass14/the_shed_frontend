import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BandsIndex from '../components/Band/BandsIndex';
import BandShow from '../components/Band/BandShow';
import SongShowContainer from './SongShowContainer';
import BandInput from '../components/Band/BandInput';
import SetListContainer from './SetListContainer';


const BandContainer = () => {
    return (
        <Switch>
          <Route
            path="/bands/:bandSlug/songs/:songSlug"
            component={SongShowContainer}
            />
          <Route
            path="/bands/:bandSlug/setlists/:setListSlug"
            component={SetListContainer}
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

export default BandContainer

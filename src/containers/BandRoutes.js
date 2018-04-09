import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BandsIndex from '../components/Band/BandsIndex';
import BandShowContainer from './BandShowContainer';
import SongShowContainer from './SongShowContainer';
import SetListContainer from './SetListContainer';


const BandRoutes = () => {
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
            component={BandShowContainer}
            />
          <Route
            path="/bands"
            component={BandsIndex}
            />
        </Switch>
    )
}

export default BandRoutes

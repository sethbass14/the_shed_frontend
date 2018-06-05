import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongIndex from '../components/Song/SongIndex';
import NoMatch from '../components/NoMatch';

const SongContainer = props => {
    return (
      <div>
        <Switch>
          <Route
            exact path='/songs'
            component={SongIndex}
            />
          <Route 
            path='/songs/:anything'
            component = {NoMatch}
          />
        </Switch>
      </div>
    )
}

export default SongContainer

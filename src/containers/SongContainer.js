import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongIndex from '../components/Song/SongIndex';

const SongContainer = props => {
    return (
      <div>
        <Switch>
          <Route
            path='/songs'
            component={SongIndex}
            />
        </Switch>
      </div>
    )
}

export default SongContainer

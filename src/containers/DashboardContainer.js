import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
import * as actions from '../actions'
// import BandListContainer from '../containers/BandListContainer'
// import SongListContainer from '../containers/SongListContainer'
import DashboardShow from '../components/DashboardShow'



class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserData(this.props.user.id)
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/dashboard"
            render={ () => {
              return (
                <DashboardShow />
              )
            }}
            />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
  }
}


export default withAuth(connect(mapStateToProps, actions)(Dashboard))

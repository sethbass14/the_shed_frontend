import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = props =>
  <div className='main-container'>
    <h1>404 Resource Not Found</h1>
    <Link to="/dashboard">
      Link to Dashboard
    </Link>
  </div>

export default NoMatch

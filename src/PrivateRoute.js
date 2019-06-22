import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({ component: Component, status }) {
    return (
      <Route
        render={props => 
            status ? (
            <Component {...props} />
            )
            : 
            (
            <Redirect to={{pathname: "/register"}}/>
            )            
        }
        />
    );
  }

  export default PrivateRoute;
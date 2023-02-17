import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = (props) => {
	
	const token = JSON.parse(localStorage.getItem("user"));


	return token ? (
		<Route path={props.path} exact={props.exact} component={props.component} />
	) : (
		<Redirect to='/' />
	);
};
export default PrivateRoute;
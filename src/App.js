import React from "react";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./config/materialTheme.js";

import Events from "./Views/Events";
import Login from "./Views/Login";
import Units from "./Views/Units";
import Email from "./Views/Email";
import Settings from "./Views/Settings";

import useAuth from "./services/firebase/useAuth";
import useEvent from "./services/firebase/useEvent";
import useUnit from "./services/firebase/useUnit";
import useEmail from "./services/firebase/useEmail";

import firebase from "firebase/app"; // the firbase core lib
import "firebase/auth"; // specific products
import "firebase/firestore";
import firebaseConfig from "./config/firebase"; // the firebase config we set up ealier

let initAttemptedRoute = "/";

function Protected({ authenticated, children, ...rest }) {
	initAttemptedRoute = useLocation().pathname;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				authenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

function RedirectToDash({ authenticated, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				!authenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: initAttemptedRoute,
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

function App() {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
	const location = useLocation();
	const {
		isAuthenticated,
		signInEmailUser,
		signInWithProvider,
		signOut,
		user,
		loading
	} = useAuth(firebase.auth);

	const { readEvents } = useEvent(firebase.firestore);

	const {
		readUnits,
		readUnitAssignment,
		readUnitAssignmentTask,
		checkUnitAssignment,
		checkUnitAssignmentTask
	} = useUnit(firebase.firestore);

	const { readEmails, createEmail } = useEmail(firebase.firestore);

	if (loading) {
		return <Loader />;
	}

	return (
		<div>
			<ThemeProvider theme={theme}>
				{location.pathname !== "/join" &&
					location.pathname !== "/login" && (
						<Header signOut={signOut} user={user} />
					)}
				<div
					style={{
						width: "100vw",
						horizontalScroll: "none",
						overflowX: "hidden",
						height: "100vh"
					}}
				>
					<Switch>
						<Protected
							authenticated={isAuthenticated}
							exact
							path="/"
						>
							<Events user={user} readEvents={readEvents} />
						</Protected>
						<RedirectToDash
							authenticated={isAuthenticated}
							path="/login"
						>
							<Login
								signInWithProvider={signInWithProvider}
								signInEmailUser={signInEmailUser}
							/>
						</RedirectToDash>
						<Protected
							authenticated={isAuthenticated}
							path="/email"
						>
							<Email
								readEmails={readEmails}
								createEmail={createEmail}
								user={user}
							/>
						</Protected>
						<Protected
							authenticated={isAuthenticated}
							path="/units"
						>
							<Units
								readUnits={readUnits}
								readUnitAssignment={readUnitAssignment}
								readUnitAssignmentTask={readUnitAssignmentTask}
								checkUnitAssignment={checkUnitAssignment}
								checkUnitAssignmentTask={
									checkUnitAssignmentTask
								}
								user={user}
							/>
						</Protected>
						<Protected
							authenticated={isAuthenticated}
							path="/settings"
						>
							<Settings user={user} signOut={signOut} />
						</Protected>
					</Switch>
				</div>
			</ThemeProvider>
		</div>
	);
}

export default App;

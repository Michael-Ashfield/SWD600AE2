import React from "react";
import PropTypes from "prop-types";
import Button from "../Components/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../config/materialTheme";

function Settings(props) {
	const { signOut } = props;

	const handleSignOutClick = () => {
		signOut();
	};

	const useStyles = makeStyles(theme => ({
		background: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
			color: "white",
			height: "100%",
			padding: "0.5rem",
			height: "100%",
			marginBottom: "1rem"
		},
		main: {
			padding: "0.5rem"
		}
	}));

	const classes = useStyles();
	return (
		<div>
			<div className={classes.background}>
				<Typography variant="h1">Settings</Typography>
			</div>
			<div className={classes.main}>
				<Typography variant="h2">Account</Typography>
				<hr />
				<Button onClick={handleSignOutClick} text="Sign out" />
			</div>
		</div>
	);
}

Settings.propTypes = {};

export default Settings;

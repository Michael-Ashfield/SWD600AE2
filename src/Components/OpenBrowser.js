import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";

function OpenBrowser() {
	const openBrowser = e => {
		e.preventDefault();
		window.open("https://portal.solent.ac.uk/home.aspx");
	};

	const useStyles = makeStyles(theme => ({
		root: {
			color: theme.palette.primary.main
		}
	}));

	const classes = useStyles();

	return (
		<IconButton onClick={openBrowser}>
			<OpenInNewIcon className={classes.root} />
		</IconButton>
	);
}

export default OpenBrowser;

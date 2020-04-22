import React from "react";
import ClipLoader from "react-spinners/FadeLoader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Loader = () => {
	const useStyles = makeStyles(theme => ({
		stWrapper: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			minHeight: "100vh",
			minWidth: "100vw",
			flexDirection: "column"
		}
	}));
	const classes = useStyles();
	return (
		<div className={classes.stWrapper}>
			<ClipLoader size={80} color={"#EA302B"} loading={true} />
			<div>
				<Typography variant="body1">loading ...</Typography>
			</div>
		</div>
	);
};

export default Loader;

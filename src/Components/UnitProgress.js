import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import theme from "../config/materialTheme";

function UnitProgress(props) {
	const { value, max, allComplete } = props;

	const ColorLinearProgress = withStyles({
		colorPrimary: {
			backgroundColor: theme.palette.primary.main
		},
		barColorPrimary: {
			backgroundColor: `${allComplete ? theme.palette.secondary.dark : theme.palette.secondary.main}`
		}
	})(LinearProgress);

	const useStyles = makeStyles({
		stBar: {
			borderRadius: theme.shape.borderRadius,
			height: "1.5rem"
		}
	});

	const classes = useStyles();

	const normalise = value => ((value - 0) * 100) / (max - 0);

	return (
		<ColorLinearProgress
			variant="determinate"
			value={normalise(value)}
			className={classes.stBar}
		/>
	);
}

UnitProgress.propTypes = {};

export default UnitProgress;

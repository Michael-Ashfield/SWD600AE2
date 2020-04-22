import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

function Button(props) {
	const { onClick, text } = props;

	const useStyles = makeStyles({
		root: {
			background: "#EA302B",
			border: 0,
			borderRadius: 5,
			color: "white",
			height: 48,
			padding: "0 30px",
			"&:hover": {
				background: "#EF615D"
			}
		}
	});

	const classes = useStyles();
	return (
		<button onClick={onClick} className={classes.root}>
			{" "}
			{text}{" "}
		</button>
	);
}

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired
};

Button.defaultProps = {
	onClick: () => {}
};

export default Button;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UnitBox from "../Components/UnitBox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function Units(props) {
	const {
		readUnits,
		readUnitAssignment,
		readUnitAssignmentTask,
		checkUnitAssignment,
		checkUnitAssignmentTask,
		user
	} = props;
	const [myUnits, setMyUnits] = useState([]);

	useEffect(() => {
		const getAllUnits = async () => {
			let un = [];
			let unArray = [];
			try {
				const allEventRef = await readUnits();
				allEventRef.forEach(event => {
					un = { ...event.data(), ...{ id: event.id } };
					if (un.userID === user.uid) {
						unArray.push(un);
						setMyUnits(unArray);
					}
				});
			} catch (e) {
				console.log(e);
			}
		};

		getAllUnits();
	}, [user]);

	const useStyles = makeStyles(theme => ({
		background: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
			color: "white",
			height: "100%",
			padding: "0.5rem",
			marginBottom: "1rem"
		}
	}));

	const classes = useStyles();

	return (
		<div>
			<header className={classes.background}>
				<Typography variant="h1">Units</Typography>
			</header>
			<Grid container spacing={2}>
				{" "}
				{myUnits &&
					myUnits.map((unit, i) => (
						<Grid item xs={12} key={i}>
							<UnitBox
								user={user}
								unit={unit}
								readUnitAssignment={readUnitAssignment}
								readUnitAssignmentTask={readUnitAssignmentTask}
								checkUnitAssignment={checkUnitAssignment}
								checkUnitAssignmentTask={
									checkUnitAssignmentTask
								}
							/>
						</Grid>
					))}
			</Grid>
		</div>
	);
}

Units.propTypes = {
	readUnits: PropTypes.func.isRequired,
	readUnitAssignment: PropTypes.func.isRequired,
	readUnitAssignmentTask: PropTypes.func.isRequired,
	checkUnitAssignment: PropTypes.func.isRequired,
	checkUnitAssignmentTask: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

export default Units;

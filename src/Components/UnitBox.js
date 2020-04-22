import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UnitAssignment from "./UnitAssignment";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import theme from "../config/materialTheme";
import { makeStyles } from "@material-ui/core/styles";

function UnitBox(props) {
	const {
		user,
		unit,
		readUnitAssignment,
		readUnitAssignmentTask,
		checkUnitAssignment,
		checkUnitAssignmentTask
	} = props;
	const [assignments, setAssignments] = useState([]);

	const getAssignments = async () => {
		let assignmentList = [];
		const assignmentsRef = await readUnitAssignment(unit.id);
		assignmentsRef.forEach(assignment =>
			assignmentList.push({
				...assignment.data(),
				...{ id: assignment.id }
			})
		);
		setAssignments(assignmentList);
	};

	useEffect(() => {
		getAssignments();
	}, []);

	const useStyles = makeStyles(theme => ({
		stCard: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: theme.shape.borderRadius,
			color: "white",
			padding: "0.5rem",
			margin: "0.5rem",
			height: "100%"
		}
	}));

	const classes = useStyles();

	return (
		<div className={classes.stCard}>
			<Typography variant="h5">{unit.name}</Typography>
			<Typography variant="subtitle1">{unit.code}</Typography>
			<Grid container spacing={2}>
				{assignments &&
					assignments.map((assignment, i) => (
						<Grid item xs={6} key={i}>
							<UnitAssignment
								assignment={assignment}
								readUnitAssignmentTask={readUnitAssignmentTask}
								unit={unit}
								checkUnitAssignment={checkUnitAssignment}
								checkUnitAssignmentTask={
									checkUnitAssignmentTask
								}
								user={user}
							/>
						</Grid>
					))}
			</Grid>
		</div>
	);
}

UnitBox.propTypes = {};

export default UnitBox;

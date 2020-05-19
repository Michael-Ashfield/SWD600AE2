import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import UnitTask from "./UnitTask";
import UnitProgress from "./UnitProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import OpenBrowser from "./OpenBrowser";
import Close from "./Close";

function UnitModal(props) {
	const {
		isOpen,
		setIsOpen,
		tasks,
		assignment,
		unit,
		checkUnitAssignmentTask,
		handleChange,
		completed,
		allComplete
	} = props;

	const handleClose = e => {
		e.preventDefault();
		setIsOpen(false);
	};

	const useStyles = makeStyles(theme => ({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		stModal: {
			backgroundColor: "white",
			borderRadius: theme.shape.borderRadius,
			padding: "1rem",
			minWidth: "80vw"
		},
		modalControl: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		},
		stProgressText: {
			display: "flex",
			justifyContent: "space-between",
			width: "100%"
		}
	}));

	const classes = useStyles();

	return (
		<Modal open={isOpen} onClose={handleClose} className={classes.modal}>
			<div className={classes.stModal}>
				<div className={classes.modalControl}>
					<OpenBrowser></OpenBrowser>
					<Close setIsOpen={setIsOpen} />
				</div>

				<Typography variant="h2">{assignment.name}</Typography>

				<Typography variant="body1">
					{unit.lecturer} {unit.code}
				</Typography>
				<Typography variant="subtitle1">{assignment.name}</Typography>

				<List>
					{tasks.map((task, i) => (
						<ListItem key={i}>
							<UnitTask
								task={task}
								assignment={assignment}
								unit={unit}
								checkUnitAssignmentTask={
									checkUnitAssignmentTask
								}
								handleChange={handleChange}
							/>
						</ListItem>
					))}
				</List>
				<div>
					<Typography
						variant="body2"
						className={classes.stProgressText}
					>
						<span>
							{moment(assignment.due.seconds, "X").format(
								"Do MMM"
							)}
						</span>
						<span>
							{" "}
							{moment(assignment.due.seconds, "X").fromNow(true)}
						</span>
					</Typography>
				</div>
				<UnitProgress
					value={completed}
					max={tasks.length}
					allComplete={allComplete}
				></UnitProgress>
			</div>
		</Modal>
	);
}

UnitModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
	tasks: PropTypes.array.isRequired,
	assignment: PropTypes.object.isRequired,
	unit: PropTypes.object.isRequired,
	checkUnitAssignmentTask: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	completed: PropTypes.number.isRequired,
	allComplete: PropTypes.bool.isRequired
};

export default UnitModal;

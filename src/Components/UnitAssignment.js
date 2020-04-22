import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import UnitModal from "./UnitModal";
import UnitProgress from "./UnitProgress";
import { makeStyles } from "@material-ui/core/styles";

function UnitAssignment(props) {
	const {
		assignment,
		readUnitAssignmentTask,
		unit,
		user,
		checkUnitAssignment,
		checkUnitAssignmentTask
	} = props;
	const [isOpen, setIsOpen] = useState(false);
	const [completed, setCompleted] = useState(0);
	const [tasks, setTasks] = useState([]);
	const [allComplete, setAllComplete] = useState(false);
	let com = 0;

	const openModal = e => {
		e.preventDefault();
		setIsOpen(true);
	};

	const getTasks = async () => {
		const tasksRef = await readUnitAssignmentTask(assignment.id, unit.id);
		let taskArr = [];
		tasksRef.forEach(task => {
			taskArr.push({ ...task.data(), ...{ id: task.id } });
		});
		setTasks(taskArr);
	};

	const checkComplete = () => {
		com = 0;
		tasks.forEach(task => {
			if (task.complete === true) {
				com++;
			}
		});
		setCompleted(com);
		if (com === tasks.length) {
			setAllComplete(true);
		} else {
			setAllComplete(false);
		}
	};

	useEffect(() => {
		getTasks();
	}, []);

	useEffect(() => {
		checkComplete();
	}, [tasks]);

	const handleChange = () => {
		getTasks();
	};

	const useStyles = makeStyles(theme => ({
		stIcon: {
			color: "#EA302B"
		},
		stCard: {
			backgroundColor: theme.palette.grey[100],
			borderRadius: theme.shape.borderRadius,
			color: "black",
			padding: "0.5rem",
			height: "100%",
			display: "flex",
			flexDirection: "column"
		},
		completeAssignment: {
			backgroundColor: theme.palette.grey.A700
		},
		stProgressText: {
			display: "flex",
			justifyContent: "space-between",
			width: "100%"
		}
	}));
	const classes = useStyles();

	return (
		<div
			className={`${classes.stCard} ${
				allComplete ? classes.completeAssignment : ""
			}`}
		>
			<div className={classes.stProgressText}>
				<Typography variant="h6">{assignment.name}</Typography>
				<IconButton onClick={openModal}>
					<OpenInBrowserIcon className={classes.stIcon} />
				</IconButton>
			</div>
			<div>
				<Typography variant="body2" className={classes.stProgressText}>
					<span>
						{moment(assignment.due.seconds, "X").format("Do MMM")}
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
			/>
			<UnitModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				tasks={tasks}
				completed={completed}
				allComplete={setAllComplete}
				unit={unit}
				assignment={assignment}
				checkUnitAssignmentTask={checkUnitAssignmentTask}
				handleChange={handleChange}
			/>
		</div>
	);
}

UnitAssignment.propTypes = {};

export default UnitAssignment;

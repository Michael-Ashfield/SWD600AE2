import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function UnitTask(props) {
	const {
		task,
		assignment,
		unit,
		checkUnitAssignmentTask,
		handleChange
	} = props;
	const [complete, setComplete] = useState(task.complete);

	useEffect(() => {
		checkUnitAssignmentTask(task.id, assignment.id, unit.id, complete);
		handleChange();
	}, [complete]);

	return (
		<FormControl>
			<FormControlLabel
				value="checked"
				control={
					<Checkbox
						color="primary"
						checked={complete}
						onChange={e => setComplete(!complete)}
					/>
				}
				label={task.name}
				labelPlacement="end"
			/>
		</FormControl>
	);
}

UnitTask.propTypes = {
	task: PropTypes.object.isRequired,
	assignment: PropTypes.object.isRequired,
	unit: PropTypes.object.isRequired,
	checkUnitAssignmentTask: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default UnitTask;

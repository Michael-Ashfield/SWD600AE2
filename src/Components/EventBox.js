import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import EventModal from "./EventModal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function EventBox(props) {
	const { user, event, isToday } = props;
	const [isOpen, setIsOpen] = useState(false);

	const openModal = e => {
		e.preventDefault();
		setIsOpen(true);
	};

	const useStyles = makeStyles(theme => ({
		stIcon: {
			color: "#EA302B"
		},
		stCard: {
			backgroundColor: theme.palette.grey[100],
			borderRadius: theme.shape.borderRadius,
			padding: "0 0.5rem"
		},
		stInner: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			color: "black"
		}
	}));
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<div className={classes.stCard}>
				<div className={classes.stInner}>
					<Typography variant="body1" component="span">
						{isToday
							? moment(event.date.seconds, "X").format("h:mm")
							: moment(event.date.seconds, "X").format("ddd")}
					</Typography>
					<Typography variant="body1" component="span">
						{event.name}
					</Typography>
					<div>
						<Typography variant="body1" component="span">
							{event.room}
						</Typography>
						<IconButton onClick={openModal}>
							<OpenInBrowserIcon className={classes.stIcon} />
						</IconButton>
					</div>
				</div>
				<EventModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					event={event}
				></EventModal>
			</div>
		</Grid>
	);
}

EventBox.propTypes = {};

export default EventBox;

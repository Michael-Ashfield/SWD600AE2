import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EventBox from "../Components/EventBox";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function Events(props) {
	const { readEvents, user } = props;
	const [today, setToday] = useState([]);
	const [week, setWeek] = useState([]);

	useEffect(() => {
		const getAllEvents = async () => {
			let eventToday = [];
			let eventWeek = [];
			const allEventRef = await readEvents();
			allEventRef.forEach(event => {
				let ev = { ...event.data() };
				if (ev.userId === user.uid) {
					if (moment(ev.date.seconds, "X").isSame(moment(), "day")) {
						eventToday.push(ev);
						setToday(eventToday);
					} else if (
						!moment(ev.date.seconds, "X").isSame(moment(), "day") &&
						moment(ev.date.seconds, "X").isSame(moment(), "week")
					) {
						eventWeek.push(ev);
						setWeek(eventWeek);
					}
				}
			});
		};

		getAllEvents();
	}, [user]);

	const useStyles = makeStyles(theme => ({
		background: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
			color: "white",
			height: "100%",
			padding: "0.5rem",
			marginBottom: "1rem"
		},
		background2: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: `${theme.shape.borderRadius}`,
			color: "white",
			height: "100%",
			padding: "0.5rem",
		}
	}));

	const classes = useStyles();

	return (
		<div>
			<div className={classes.background}>
				<Typography variant="h2">Your day</Typography>

				<Grid container spacing={2}>
					{today.map((element, i) => (
						<EventBox
							key={i}
							user={user}
							event={element}
							isToday={true}
						/>
					))}
				</Grid>
			</div>
			<div className={classes.background2}>
				<Typography variant="h2">Your week</Typography>
				<Grid container spacing={1}>
					{week.map((element, i) => (
						<EventBox
							key={i}
							user={user}
							event={element}
							isToday={false}
						/>
					))}
				</Grid>
			</div>
		</div>
	);
}

Events.propTypes = {
	readEvents: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

export default Events;

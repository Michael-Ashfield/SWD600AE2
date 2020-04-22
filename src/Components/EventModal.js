import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import OpenBrowser from "./OpenBrowser";
import Typography from "@material-ui/core/Typography";
import Close from "./Close";
import theme from "../config/materialTheme";
import mapJM from "../assets/mapJM.jpg";
import mapRM from "../assets/mapRM.jpg";



function EventModal(props) {
	const { isOpen, setIsOpen, event } = props;
	const [buildingMap, setBuildingMap] = useState(mapRM);

	useEffect(() => {
		/*
    This would be adjusted for each building with high quality versions of the images
    */
		switch (event.building) {
			case "RM":
				setBuildingMap(mapRM);
				break;
			case "JM":
				setBuildingMap(mapJM);
				break;
			default:
				setBuildingMap(mapRM);
		}
	}, []);

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
			minHeight: "60vh",
			backgroundImage: `url("${buildingMap}")`,
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "bottom"
		},
		modalControl: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
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
				<Typography variant="h3">{event.name}</Typography>
				<Typography variant="body1">
					{event.lecturer} {event.unit}
				</Typography>
				<Typography variant="body1">{event.room}</Typography>
			</div>
		</Modal>
	);
}

EventModal.propTypes = {};

export default EventModal;

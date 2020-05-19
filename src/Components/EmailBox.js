import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import EmailModal from "./EmailModal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function EmailBox(props) {
	const { email } = props;

	const [isOpen, setIsOpen] = useState(false);

	const openModal = e => {
		e.preventDefault();
		setIsOpen(true);
	};

	const useStyles = makeStyles(theme => ({
		emailFrom: {
			fontWeight: "bold"
		},
		emailSubject: {
			padding: "0 10px 0"
		},
		stIcon: {
			color: theme.palette.primary.main
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
				<div onClick={openModal} className={classes.stInner}>
					<Typography variant="body1" className={classes.emailFrom}>
						{email.from.substring(0, 5) + ".."}
					</Typography>{" "}
					<Typography
						variant="body1"
						className={classes.emailSubject}
					>
						{email.subject}
					</Typography>
					<OpenInBrowserIcon className={classes.stIcon} />
				</div>
				<EmailModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					email={email}
				></EmailModal>
			</div>
		</Grid>
	);
}

EmailBox.propTypes = {
	email: PropTypes.object.isRequired
};

export default EmailBox;

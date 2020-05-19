import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import OpenBrowser from "./OpenBrowser";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import ReplyIcon from "@material-ui/icons/Reply";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

function EmailModal(props) {
	const { email, isOpen, setIsOpen } = props;
	const [starred, setStarred] = useState(false);
	const [foldered, setFoldered] = useState(false);

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
			borderRadius: "5px",
			padding: "1rem"
		},
		emailSubject: {
			fontWeight: "bold"
		},
		modalControl: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		},
		emailButtons: {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "center",
		},
		emailIcon: {
			color: theme.palette.primary.main
		}
	}));

	const classes = useStyles();

	const star = e => {
		e.preventDefault();
		setStarred(!starred);
	};

	const folder = e => {
		e.preventDefault();
		setFoldered(!foldered);
	};

	const close = e => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<Modal open={isOpen} onClose={handleClose} className={classes.modal}>
			<div className={classes.stModal}>
				<div className={classes.modalControl}>
					<OpenBrowser />
					<IconButton onClick={close}>
						<CloseIcon></CloseIcon>
					</IconButton>
				</div>

				<Typography variant="h3">{email.from}</Typography>
				<Typography variant="body1" className={classes.emailSubject}>
					{email.subject}
				</Typography>
				<Typography variant="body2">{email.body}</Typography>
				<div className={classes.emailButtons}>
					<IconButton onClick={star} className={classes.emailIcon}>
						{starred ? <StarIcon /> : <StarBorderIcon />}
					</IconButton>
					<IconButton className={classes.emailIcon}>
						<ReplyIcon />
					</IconButton>
					<IconButton onClick={folder} className={classes.emailIcon}>
						{foldered ? <FolderIcon /> : <FolderOpenIcon />}
					</IconButton>
					<IconButton className={classes.emailIcon}>
						<DeleteOutlineIcon />
					</IconButton>
				</div>
			</div>
		</Modal>
	);
}

EmailModal.propTypes = {
	email: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired
};

export default EmailModal;

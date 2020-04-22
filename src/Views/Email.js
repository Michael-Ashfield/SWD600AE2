import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EmailBox from "../Components/EmailBox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../config/materialTheme";

function Email(props) {
	const { readEmails, createEmail, user } = props;
	const [emailsNew, setEmailsNew] = useState([]);
	const [emailsOld, setEmailsOld] = useState([]);

	useEffect(() => {
		const getAllEmails = async () => {
			let emailsNewArr = [];
			let emailsOldArr = [];
			const allEmailRef = await readEmails();
			allEmailRef.forEach(email => {
				let em = { ...email.data() };
				if (em.userId == user.uid) {
					if (em.seen === false) {
						emailsNewArr.push(em);
						setEmailsNew(emailsNewArr);
					} else {
						emailsOldArr.push(em);
						setEmailsOld(emailsOldArr);
					}
				}
			});
		};

		getAllEmails();
	}, []);

	const useStyles = makeStyles(theme => ({
		background: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: `0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius}`,
			color: "white",
			height: "100%",
			padding: "0.5rem",
			height: "100%",
			marginBottom: "1rem"
		},
		emailGroup: {
			backgroundColor: theme.palette.grey[900],
			borderRadius: theme.shape.borderRadius,
			color: "white",
			height: "100%",
			padding: "0.5rem",
			height: "100%",
			margin: "1rem 0.5rem"
		}
	}));

	const classes = useStyles();

	return (
		<div>
			<div className={classes.background}>
				<Typography variant="h1">Emails</Typography>
			</div>
			<div>
				<div className={classes.emailGroup}>
					<Typography variant="h2">New</Typography>

					<Grid container spacing={2}>
						{emailsNew.map((email, i) => (
							<EmailBox
								key={i}
								email={email}
								createEmail={createEmail}
								user={user}
							/>
						))}
					</Grid>
				</div>
				<div className={classes.emailGroup}>
					<Typography variant="h2">Emails</Typography>
					<Grid container spacing={2}>
						{emailsOld.map((email, i) => (
							<EmailBox
								key={i}
								email={email}
								createEmail={createEmail}
								user={user}
							/>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
}

Email.propTypes = {};

export default Email;

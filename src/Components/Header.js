import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SchoolIcon from "@material-ui/icons/School";
import MailIcon from "@material-ui/icons/Mail";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";

function Header() {
	let history = useHistory();

	const handleClick = toLink => {
		history.push(toLink);
	};

	const useStyles = makeStyles({
		link: {
			color: "#EA302B"
		},
		bar: {
			backgroundColor: "#F5F5F5",
			position: "fixed",
			bottom: 0,
			width: "100%"
		}
	});

	const classes = useStyles();

	return (
		<div>
			<BottomNavigation className={classes.bar}>
				<BottomNavigationAction
					label="Calendar"
					onClick={() => handleClick("/")}
					icon={<CalendarTodayIcon className={classes.link} />}
				/>
				<BottomNavigationAction
					label="units"
					onClick={() => handleClick("/units")}
					icon={<SchoolIcon className={classes.link} />}
				/>
				<BottomNavigationAction
					label="Mail"
					onClick={() => handleClick("/email")}
					icon={<MailIcon className={classes.link} />}
				/>
				<BottomNavigationAction
					label="Settings"
					onClick={() => handleClick("/settings")}
					icon={<SettingsIcon className={classes.link} />}
				/>
			</BottomNavigation>
		</div>
	);
}

export default Header;

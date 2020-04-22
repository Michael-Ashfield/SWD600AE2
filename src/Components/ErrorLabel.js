import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";




const ErrorLabel = props => {

    const useStyles = makeStyles(theme => ({
		label: {
			color: "red",
            fontWeight: "bolder",
            margin: "1% 0 4% 0",
		}
	}));

	const classes = useStyles();

    const {children} =  props;

    return (
        <label className={classes.label}> 
            {children}
        </label>
    )
}



export default ErrorLabel

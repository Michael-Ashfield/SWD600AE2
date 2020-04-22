import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

function Close(props) {
    const {setIsOpen} = props;

    const handleClose = e => {
		e.preventDefault();
		setIsOpen(false);
	};

    return (
        <IconButton onClick={handleClose}>
            <CloseIcon></CloseIcon>
        </IconButton>
    )
}

Close.propTypes = {
	setIsOpen: PropTypes.func.isRequired
}

export default Close


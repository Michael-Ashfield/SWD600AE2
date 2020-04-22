import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Components/Button";
import ErrorLabel from "../Components/ErrorLabel";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import * as yup from "yup";

function LoginForm(props) {
	const { buttonText, onSubmit, serverError, onSocialLogin } = props;
	const [displayEmail, setDisplayEmail] = useState(true);

	const loginFormSchema = yup.object().shape({
		email: yup
			.string()
			.email("please enter a valid email")
			.required("please enter a email"),
		password: yup
			.string()
			.required("please enter a password")
			.min(5, "password must be 5 characters long")
	});

	const { register, handleSubmit, errors, setValue } = useForm({
		validationSchema: loginFormSchema
	});

	const handleClick = e => {
		e.preventDefault();
		setDisplayEmail(!displayEmail);
	};

	const handleInnerSubmit = data => {
		console.log(data);
		onSubmit(data);
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(handleInnerSubmit)}>
				<RHFInput
					as={
						<TextField
							type="text"
							label="Email"
							variant="outlined"
							autoComplete="current-email"
							error={errors.email}
							helperText={errors.email && errors.email.message}
						/>
					}
					name="email"
					register={register}
					setValue={setValue}
				/>
				<br></br>
				<RHFInput
					as={
						<TextField
							type="password"
							label="Password"
							variant="outlined"
							autoComplete="current-password"
							error={errors.password}
							helperText={
								errors.password && errors.password.message
							}
						/>
					}
					name="password"
					register={register}
					setValue={setValue}
				/>
				<br></br>

				<Button text={buttonText} type="submit" />
				<ErrorLabel>{serverError} </ErrorLabel>
			</form>
		</React.Fragment>
	);
}

LoginForm.propTypes = {
	buttonText: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onSocialLogin: PropTypes.func.isRequired,
	error: PropTypes.string
};

LoginForm.defaultProps = {
	buttonText: "JOIN",
	serverError: ""
};

export default LoginForm;

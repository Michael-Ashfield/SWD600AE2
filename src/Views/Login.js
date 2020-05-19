import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../Components/LoginForm";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


function Login(props) {
  const { signInEmailUser, signInWithProvider } = props;
  const [error, setError] = useState();

  const handleSubmit = async data => {
    const { email, password } = data;

    try {
      const user = await signInEmailUser(email, password);
    } catch (error) {
      debugger;
      setError(error.message);
    }
  };

  const handleSocialLogin = provider => {
    signInWithProvider(provider);
  };

  const useStyles = makeStyles({
    header: {
      color: "#EA302B",
      textAlign: "center",
      margin: "auto"
    },
    login: {
      paddingTop: "50px",
    }
  })
	const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.login}>
    <div>
      <Typography variant="h1" className={classes.header}>
        MySolent
      </Typography>
      <CardContent>
        <Form
          onSocialLogin={handleSocialLogin}
          serverError={error}
          onSubmit={handleSubmit}
          buttonText="LOGIN"
        />
      </CardContent>
    </div>
    </Grid>

  );
}

Login.propTypes = {
  signInEmailUser: PropTypes.func.isRequired,
  signInWithProvider: PropTypes.func.isRequired
};

export default Login;

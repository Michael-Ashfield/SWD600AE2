import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, styled } from "@material-ui/core/styles";
import Form from "../Components/LoginForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";


function Login(props) {
  const { signInEmailUser, signInWithProvider } = props;
  const [error, setError] = useState();

  const handleSubmit = async data => {
    const { email, password } = data;

    try {
      const user = await signInEmailUser(email, password);
      console.log(user);
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
      <h1 className={classes.header}>
        MySolent
      </h1>
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

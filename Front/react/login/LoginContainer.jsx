import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "../../store/actions/Login";
import { registerUser } from "../../store/actions/Register";
import history from "../../utils/history";

const mapStateToProps = (state) => {
  return {
    userFail: state.login.data.failLogin,
    user: state.login.data.dataUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (obj) => dispatch(loginUser(obj)),
    goRegister: (email, pass, name) =>
      dispatch(registerUser(email, pass, name)),
  };
};

const LoginContainer = ({ setLogin, goRegister, userFail, user, history }) => {
  const [input, setInput] = useState({}); //state for input Form
  const [failed, setFailed] = useState(false); //login fail
  const [register, setRegister] = useState(false); //user ask to register
  const [registered, setRegistered] = useState(false); // user has registered

  useEffect(() => {
    if (user.email) history.push("/inicio"); // when user login succeed
  }, [user]);

  useEffect(() => {
    // redux listener: when user fail login
    setFailed(userFail);
  }, [userFail]);

  const handleSubmit = (event) => {
    //submit form login/register
    event.preventDefault();
    if (register) {
      // Register Form
      const data = {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
      };
      goRegister(
        event.target[1].value,
        event.target[2].value,
        event.target[0].value
      );
      setRegistered(true);
      setRegister(false);
    } else {
      //Login Form
      const data = {
        email: event.target[0].value,
        password: event.target[1].value,
      };
      setLogin(data);
    }
  };

  const handleChange = (event) => {
    setInput({ [event.target.name]: event.target.value });
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      valor={input}
      userFail={failed}
      setRegister={setRegister}
      register={register}
      registered={registered}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { loginUser, failLoginFalse } from '../../store/actions/Login';
import { registerUser, setFalse } from '../../store/actions/Register';
import history from '../../utils/history';

const mapStateToProps = (state) => {
  return {
    userFail: state.login.data.failLogin,
    user: state.login.data.dataUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (obj) => dispatch(loginUser(obj)),
    goRegister: (email, pass, name) => dispatch(registerUser(email, pass, name))
  };
};

const LoginContainer = ({ setLogin, goRegister, userFail, user, history }) => {
  
  const [input, setInput] = useState({});
  const [failed, setFailed] = useState(false);
  const [register, setRegister] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if(user.email) history.push('/inicio')
    }, [user]);

  useEffect(() => {
    return ()=> {
      setRegister(false)
      setRegistered(false)
      setFailed(false)
      setInput({})
    }    
  }, []);

  useEffect(() => {
    if(userFail) {
      alert('Try again, please!')
      setFailed(userFail)}
    }, [userFail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(register){
      const data= {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
      }
      goRegister(event.target[1].value, event.target[2].value, event.target[0].value)
      setRegistered(true)
      setRegister(false)
    } else{
      const data = {
        email: event.target[0].value,
        password: event.target[1].value,
      }
      setLogin(data)
    }
  }

  const askRegister = () => {
    setRegister(true)
  }

  const handleChange = (event) => {
    setInput({ [event.target.name]: event.target.value });
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      valor={input}
      userFail={failed}
      wantRegister={askRegister}
      register={register}
      registered={registered}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);


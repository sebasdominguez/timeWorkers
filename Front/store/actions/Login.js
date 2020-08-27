import { LOGIN_USER } from "../constans";
import axios from "axios";

axios.defaults.withCredentials = true;

const LoginUser = (dataUser, booleanLogin, booleanRedirect) => ({
  type: LOGIN_USER,
  data: { dataUser, failLogin: booleanLogin, redirect: booleanRedirect },
});

export const loginUser = (data) => (dispatch) => {
  return axios
    .post("http://localhost:3000/api/users/login", data)
    .then((resp) => {
      if (resp.request.status == 200) {
        var objLogin = new Object();
        objLogin.email= resp.data.email
        objLogin.id= resp.data.id
        objLogin.isAdmin= resp.data.isAdmin
        objLogin.name= resp.data.name
        objLogin.expectedHours= resp.data.expectedHours
        dispatch(LoginUser(objLogin, false, true))
      }
      if (resp.request.status == 401) {
        dispatch(LoginUser({}, true, false));
      }
    })
    .catch((err) => {
      dispatch(LoginUser({}, true));
    });
};

export const failLoginFalse = () => (dispatch) => {
  dispatch(LoginUser(undefined, false, undefined));
};



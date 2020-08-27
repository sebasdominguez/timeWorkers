import { REGISTER_USER } from "../constans";
import axios from "axios";

axios.defaults.withCredentials = true;

const RegisterUser = (dataUser, booleanLogin, redirect) => ({
  type: REGISTER_USER,
  data: { dataUser, failRegister: booleanLogin, redirect: redirect },
});

export const registerUser = (email, password, name) => (dispatch ) => {
  axios
    .post("http://localhost:3000/api/users/register", { email, password, name })
    .then((resp) => {
      if (resp.request.status == 201) {
        dispatch(RegisterUser(resp.data, false, true));
      }
      if (resp.request.status == 401) {
        dispatch(RegisterUser({}, true));
      }
    })
    .catch((err) => {
      dispatch(RegisterUser({}, true));
    });
};

export const setFalse = () => (dispatch) => {
  dispatch(RegisterUser(undefined, false, false));
};


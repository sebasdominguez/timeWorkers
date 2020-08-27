import { GET_REGISTRY, SET_TOTAL_WORKED } from "../constans";
import axios from "axios";

axios.defaults.withCredentials = true;

const setRegistry = (data) => ({
  type: GET_REGISTRY,
  data,
});

const setTotal = (data) => ({
  type: SET_TOTAL_WORKED,
  data,
});

export const getRegistry = () => (dispatch) => {
  return axios.get("http://localhost:3000/api/registry")
  .then((registry) => {
    dispatch(setRegistry(registry.data));
  });
};

export const totalWorked = (milisec, data) => (dispatch) => {
  return axios.put("http://localhost:3000/api/users", milisec)
  .then((dataBack) => {
    dispatch(setTotal(data))
  })
}

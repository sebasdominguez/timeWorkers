import axios from "axios";

const Status = (boolean)=>({
  type: "STATUS",
  boolean
})

const Lunch = (boolean)=>({
  type: "LUNCH",
  boolean
})

const Registry = (data)=>({
  type: "REGISTRY",
  data
})

export const SetEntry = (boolean, obj) => dispatch =>{
	axios.post("http://localhost:3000/api/registry", obj)
  .then(() => dispatch(Status(boolean)))
}

export const SetOut = (boolean, obj) => dispatch =>{
  axios.put("http://localhost:3000/api/registry", obj)
  .then(() => dispatch(Status(boolean)))
}

export const SetLunch = (boolean, obj) => dispatch =>{
  axios.put("http://localhost:3000/api/registry", obj)
  .then(() => dispatch(Lunch(boolean)))
}
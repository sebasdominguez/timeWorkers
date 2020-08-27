import { GET_REGISTRY, SET_TOTAL_WORKED } from "../constans";

const intialState = {
  registry: {},
  totalWorked: {},
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_REGISTRY:
      return { ...state, registry: action.data };
    case SET_TOTAL_WORKED:
      return { ...state, totalWorked: action.data };
    default:
      return state;
  }
}

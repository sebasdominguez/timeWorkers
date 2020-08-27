import { VIEW, STATUS, LUNCH } from "../constans";

const intialState = {
  status: false, //FALSE-> Out , TRUE->Working
  lunch: false,
 };

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case STATUS:
      return { ...state, status: action.boolean }
    case LUNCH:
      return { ...state, lunch: action.boolean }
    default:
      return state;
  }
}

import { LOGIN_USER } from "../constans";

const initialState = {
  data: { 
  	dataUser: {}, 
  	failLogin: false, 
  	redirect: false
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      action.data.dataUser.name  ? localStorage.setItem('auth', true) : null
      return { ...state, data: action.data  };
    default: return state;
  }
}

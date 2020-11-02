import { LOGIN_USER, REGISTER_USER, FORM_INFO } from "../action/type";
const initialState = {
  user: [],
  eventForm: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      console.log(action.payload, "inside reducer");
      return {
        ...state,
        user: action.payload,
      };
    }
    case REGISTER_USER: {
      console.log(action.data.user, "inside reducer");
      return {
        ...state,
        user: action.data.user,
      };
    }
    case FORM_INFO: {
      console.log(action.data, "ahcek the form");
      return {
        ...state,
        eventForm: action.payload,
      };
    }
    default:
      return state;
  }
}

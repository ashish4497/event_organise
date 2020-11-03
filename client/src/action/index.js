import { LOGIN_USER, REGISTER_USER, EVENT_FORM, FORM_INFO } from "./type";
const url = "http://localhost:8000/api/v1/users";

export const signup = (data, cb) => (dispatch) => {
  fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "inside action login");
      dispatch({ type: REGISTER_USER, data });
      cb(true);
    });
};

export const login = (data, cb) => (dispatch) => {
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "inside action login");
      dispatch({ type: LOGIN_USER, payload: data });
      cb(true);
    });
};

export const eventForm = (data, cb) => (dispatch) => {
  fetch(`${url}/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: EVENT_FORM, payload: data });
    });
};

export const fetchEvent = (url) => {
  // console.log("in the fetch event");
  return function (dispatch) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data, "check fetch information");
        dispatch({
          type: FORM_INFO,
          payload: data,
        });
      });
  };
};

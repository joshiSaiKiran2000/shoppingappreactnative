// authActions.js
import axios from 'axios';

export const login = (userName, password) => async (dispatch) => {
  const obj = JSON.stringify({
    username: userName,
    password: password,
  });

  const customConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    let result = await axios.post(
      'https://fakestoreapi.com/auth/login',
      obj,
      customConfig
    );

    dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.token });
    console.log(result.data.token)
  } catch (error) {
    console.log('login error: ', error);
    dispatch({ type: 'LOGIN_FAILURE', payload: true});
  }
};

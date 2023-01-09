import axios from 'axios';
import { login , loginError } from '../redux/reducers/useSlice';
import toast from 'react-hot-toast';
import { createAction } from 'redux-actions';

const URL = 'http://localhost:8080';

export const postLogin = (state) => {
	return async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const { data } = await axios.post(`${URL}/api/auth/login/`, state, config);
			dispatch(login(data.token));
			toast.success("You are successfully logged in")
			setTimeout(() => { 
				window.location.reload();
			}, 800)
		} catch (error) {
			console.log(error.response.data);
			toast.error(error.response.data);
            // dispatch(loginError(error.response.data.non_field_errors[0]))
		}
	};
};

export function logout() {
    return async (dispatch) => {
        dispatch(logout());
    }
  }


export const getStoresSuccess = createAction('GET_STORES_SUCCESS');
export const getStoresError = createAction('GET_STORES_ERROR');

export function getStores() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(`${URL}/api/store/`, { headers });
      dispatch(getStoresSuccess(response.data));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Si le jeton d'authentification n'est pas valide ou s'il n'est pas présent,
        // déconnectez l'utilisateur et affichez un message d'erreur
        dispatch(logout());
        dispatch(getStoresError('Vous devez vous connecter pour accéder à cette page'));
      } else {
        dispatch(getStoresError(error.message));
      }
    }
  };
}



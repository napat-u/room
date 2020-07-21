import customers from '../apis/customers';
import { FETCH_INFO } from './types';

export const fetchInfo = () => async dispatch => {
    const response = await customers.get('/roominfo')

    dispatch({  type: FETCH_INFO, payload: response.data })
}
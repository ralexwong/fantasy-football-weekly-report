import {
    FETCH_ESPN
} from '../types';

import history from '../../history';
import axios from 'axios';


export const fetchEspn = id => async dispatch => {
    console.log(id)

    const response = await axios.get(`api/espn/fetchEspn`, {
        params : {
            id: id
        }
    })
    // const data = response.data;
    console.log(response.data)

    // dispatch({ type: FETCH_ESPN, payload: data });
}
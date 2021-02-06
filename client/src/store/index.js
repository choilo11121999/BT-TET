import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { apiResponse: '' };
export const store = createStore(reducer, initialState);
import axios from "axios";
import {
  START_FETCH_HEAT,
  FETCH_HEAT_SUCCESS,
  FETCH_HEAT_ERROR,
} from "./heatChartType";

export const fetchDataHeat = () => {
  return (dispatch) => {
    dispatch(startFetchHeat());
    axios
      .get("http://localhost:9000/dataHeatChart")
      .then((response) => {
        const data = response.data;
        dispatch(fetchHeatSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchHeatError(error.message));
      });
  };
};

export const startFetchHeat = () => {
  return {
    type: START_FETCH_HEAT,
  };
};

export const fetchHeatSuccess = (data) => {
  return {
    type: FETCH_HEAT_SUCCESS,
    payload: data,
  };
};

export const fetchHeatError = (error) => {
  return {
    type: FETCH_HEAT_ERROR,
    payload: error,
  };
};

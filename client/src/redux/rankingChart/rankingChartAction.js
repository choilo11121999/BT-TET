import axios from "axios";
import {
  START_FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./rankingChartType";

export const fetchDataRanking = () => {
  return (dispatch) => {
    dispatch(startFetchData());
    axios
      .get("http://localhost:9000/dataRankingChart")
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error.message));
      });
  };
};

export const startFetchData = () => {
  return {
    type: START_FETCH_DATA,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

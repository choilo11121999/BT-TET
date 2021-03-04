import {
  START_FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./rankingChartType";

const initialRankingState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialRankingState, action) => {
  switch (action.type) {
    case START_FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

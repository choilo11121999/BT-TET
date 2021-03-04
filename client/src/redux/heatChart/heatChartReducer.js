import {
  START_FETCH_HEAT,
  FETCH_HEAT_SUCCESS,
  FETCH_HEAT_ERROR,
} from "./heatChartType";

const initialHeatState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialHeatState, action) => {
  switch (action.type) {
    case START_FETCH_HEAT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HEAT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_HEAT_ERROR:
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

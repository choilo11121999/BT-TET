import {
  START_FETCH_API_OS,
  FETCH_API_SUCCESS,
  FETCH_API_ERROR,
} from "./pieChartType";

const initialState = {
  loading: false,
  datas: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_API_OS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_API_SUCCESS:
      return {
        loading: false,
        datas: action.payload,
        error: "",
      };
    case FETCH_API_ERROR:
      return {
        loading: false,
        datas: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

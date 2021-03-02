import { combineReducers } from "redux";
import pieChartReducer from "./pieChart/pieChartReducer";

const rootReducer = combineReducers({
  pieChart: pieChartReducer,
});

export default rootReducer;

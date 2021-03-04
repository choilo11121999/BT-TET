import { combineReducers } from "redux";
import pieChartReducer from "./pieChart/pieChartReducer";
import rankingChartReducer from "./rankingChart/rankingChartReducer";

const rootReducer = combineReducers({
  pieChart: pieChartReducer,
  rankingChart: rankingChartReducer
});

export default rootReducer;

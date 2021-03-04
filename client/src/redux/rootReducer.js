import { combineReducers } from "redux";
import pieChartReducer from "./pieChart/pieChartReducer";
import rankingChartReducer from "./rankingChart/rankingChartReducer";
import heatChartReducer from "./heatChart/heatChartReducer";

const rootReducer = combineReducers({
  pieChart: pieChartReducer,
  rankingChart: rankingChartReducer,
  heatChart: heatChartReducer
});

export default rootReducer;

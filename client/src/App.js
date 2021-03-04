import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import PieChart from "./components/PieChart";
import RankingChart from "./components/rankingChart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="pie">
         <PieChart />
        </div>
        <div className="ranking">
         <RankingChart />
        </div>
      </div>
    </Provider>
  );
}

export default App;

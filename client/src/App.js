import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import PieChart from "./components/PieChart";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PieChart />
      </div>
    </Provider>
  );
}

export default App;

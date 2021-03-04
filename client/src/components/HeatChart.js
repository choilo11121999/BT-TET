import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchDataHeat } from '../redux';
import { DisplayHeatChart } from './DisplayHeatChart';

const HeatChart = () => {
  const heatState = useSelector((state) => state.heatChart, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchDataHeat()), [dispatch]);

  return heatState.loading ? (
    <div className="loader"></div>
  ) : heatState.error ? (
    <div>
      <h2 style={{ textAlign: "center" }}>{heatState.error}</h2>
      <DisplayHeatChart dataHeat={heatState.data} />
    </div>
  ) : (
    <div>
      <h3 style={{marginLeft: '30px', marginTop: '15px'}}>Heat Chart</h3>
      <DisplayHeatChart dataHeat={heatState.data} />
    </div>
  );
}

export default HeatChart;

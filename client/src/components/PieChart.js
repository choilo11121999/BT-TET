/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchApi } from "../redux";
import { Display } from "./Display";

const PieChart = () => {
  const pieChartData = useSelector((state) => state.pieChart, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [ios, android] = pieChartData.datas;
  const iosPer = useMemo(() => {
    return Math.round((ios / (ios + android)) * 100);
  }, [ios, android]);
  const androidPer = useMemo(() => {
    return Math.round((android / (ios + android)) * 100);
  }, [ios, android]);

  return pieChartData.loading ? (
    <div className='loader'></div>
  ) : pieChartData.error ? (
    <div>
        <h2>{pieChartData.error}</h2>
        <Display
            ios={0}
            android={0}
            iosPer={0}
            androidPer={0}
            loadName=""
        />
    </div>
  ) : (
    <Display
      ios={ios}
      android={android}
      iosPer={iosPer}
      androidPer={androidPer}
      loadName=""
    />
  );
};

export default PieChart;

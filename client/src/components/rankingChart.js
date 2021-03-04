/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchDataRanking } from "../redux";
import { DisplayRankingChart } from "./DisplayRankingChart";

const RankingChart = () => {
  const rankingChartSate = useSelector(
    (state) => state.rankingChart,
    shallowEqual
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDataRanking());
  }, [dispatch]);

  return rankingChartSate.loading ? (
    <div className="loader"></div>
  ) : rankingChartSate.error ? (
    <div>
      <h2 style={{ textAlign: "center" }}>{rankingChartSate.error}</h2>
      <DisplayRankingChart data={rankingChartSate.data} />
    </div>
  ) : (
    <DisplayRankingChart data={rankingChartSate.data} />
  );
};

export default RankingChart;

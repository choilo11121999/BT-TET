/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux";
import { VictoryPie } from "victory";

const PieChart = () => {
    const pieChartData = useSelector(state => state.pieChart);
    const dispatch = useDispatch();
    
    useEffect(() => {
      fetchApi();
      dispatch(fetchApi());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    

  const ios = useMemo(() => 
    pieChartData.datas[0], [pieChartData.datas[0]]);
  const android = useMemo(() => 
    pieChartData.datas[1], [pieChartData.datas[1]]);
  const iosPer = useMemo(() => {
    return Math.round((ios / (ios + android)) * 100)
  }, [ios, android]);
  const androidPer =  useMemo(() => {
    return Math.round((android / (ios + android)) * 100)
  }, [ios, android]);

  return pieChartData.loading ? (
    <h2>Loading</h2>
  ) : pieChartData.error ? (
    <h2>{pieChartData.error}</h2>
  ) : (
    <div>
      <h3>Device Type</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg width={400} height={300}>
          <VictoryPie
            colorScale={["cyan", "purple"]}
            standalone={false}
            width={300}
            height={300}
            innerRadius={75}
            data={[
              { x: "ios", y: iosPer },
              { x: "adr", y: androidPer },
            ]}
          />
        </svg>
        <div>
          <table>
            <tr>
              <td>
                <span id="ios"></span>iOS:
                <div style={{ marginLeft: "40px", fontSize: "20px" }}>
                  {iosPer}%
                </div>
              </td>
              <td>{ios}</td>
            </tr>
            <tr>
              <td>
                <span id="android"></span>Android:
                <div style={{ marginLeft: "40px", fontSize: "20px" }}>
                  {androidPer}%
                </div>
              </td>
              <td>{android}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

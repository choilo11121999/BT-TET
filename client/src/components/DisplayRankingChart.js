/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import { map, sum } from "lodash";

export const DisplayRankingChart = ({ data }) => {
  const date = [], ios = [], android = [];

  const pushData = (arr, data) => map(data, (n) => arr.push(n));

  useMemo(() => {
    pushData(date, data.date);
    pushData(ios, data.ios);
    pushData(android, data.android);
  }, [data]);

  // Tong so IOS
  const sumIos = useMemo(() => sum(ios), [ios]);

  // Tong so Android
  const sumAndroid = useMemo(() => sum(android), [android]);

  // Du lieu de tao Chart
  const sampleData = {
    series: [
      {
        name: "iOS",
        data: ios,
      },
      {
        name: "Android",
        data: android,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        offsetX: 20,
        offsetY: 10,
      },
      colors: ["#48c0b0", "#925de2"],
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Ranking Chart",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#000",
        },
      },
      grid: {
        borderColor: "#e7e7e7",
      },
      xaxis: {
        categories: date,
        labels: {
          show: true,
          rotate: 0
        },
      },
      yaxis: {
        tickAmount: 3,
        min: 0,
        max: 30,
      },
      legend: {
        show: false,
        horizontalAlign: "left",
      },
    },
  };

  return (
    <div>
      <Chart
        options={sampleData.options}
        series={sampleData.series}
        type="line"
        width="750"
        height="200"
      />
      <div>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li style={{ marginRight: "20px" }}>
            <span id="android"></span> Android{" "}
            <span style={{ marginLeft: "5px", fontSize: "17px" }}>
              {sumAndroid}
            </span>
          </li>
          <li>
            <span id="ios"></span> IOS{" "}
            <span style={{ marginLeft: "5px", fontSize: "17px" }}>
              {sumIos}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

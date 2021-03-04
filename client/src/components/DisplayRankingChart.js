/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useEffect, useState } from "react";
import Chart from "react-apexcharts";

export const DisplayRankingChart = ({ data }) => {
  const date = [], ios = [], android = [];
  const [state, setstate] = useState({
    date: [],
    ios: [],
    android: []
  });

  useEffect(() => {
    data.forEach(element => {
        date.push(element.date);
        ios.push(element.ios);
        android.push(element.android);
    });
    setstate({
      date: date,
      ios: ios,
      android: android
    });
  }, [data]);

  // Tong so IOS
  const sumIos = useMemo(() => {
    return state.ios.reduce((a,b) => a + b, 0)
  }, [state.ios]);

  // Tong so Android
  const sumAndroid = useMemo(() => {
    return state.android.reduce((a,b) => a + b, 0)
  }, [state.android]);

  // Du lieu de tao Chart
  const sampleData = {
    series: [
      {
        name: "iOS",
        data: state.ios,
      },
      {
        name: "Android",
        data: state.android,
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
        categories: state.date,
        labels: {
          show: true,
          rotate: 0,
          formatter: function (val) {
            return val === state.date[0] || 
                  val === state.date[state.date.length-1] ||
                  val === state.date[state.date.length/3] ||
                  val === state.date[2*state.date.length/3] ? val : "";
          },
        },
      },
      yaxis: {
        tickAmount: 3,
        min: 0,
        max: 30,
        labels: {
          formatter: function (val) {
            return val === 10 || val === 20 ? val : "";
          },
        },
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
        height="250"
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

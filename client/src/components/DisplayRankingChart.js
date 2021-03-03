import React, { useMemo } from "react";
import Chart from "react-apexcharts";

export const DisplayRankingChart = ({ ios, android }) => {
  // Du lieu truc X
  const categories = ios
    ? ios.map((data, index) => {
        switch (index) {
          case 0:
            return "2019-07-01";
          case 17:
            return "2019-08-08";
          case 34:
            return "2019-09-15";
          case 49:
            return "2019-10-23";
          default:
            return "";
        }
      })
    : [];

  // Tong so IOS
  const sumIos = useMemo(() => {
    return ios ? ios.reduce((a, b) => a + b, 0) : 0;
  }, [ios]);

  // Tong so Android
  const sumAndroid = useMemo(() => {
    return android ? android.reduce((a, b) => a + b, 0) : 0;
  }, [android]);

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
        categories: categories,
        labels: {
          show: true,
          rotate: 0,
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

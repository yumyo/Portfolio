import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

const LineChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const root = am5.Root.new(chartRef.current);

      // Apply dark theme
      root.setThemes([am5themes_Dark.new(root)]);

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
          layout: root.verticalLayout,
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "year",
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 30,
          }),
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Users",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "users",
          categoryXField: "year",
          stroke: am5.color("#a78bfa"),
          fill: am5.color("#a78bfa"),
        })
      );

      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get("fill"),
          }),
        });
      });

      series.data.setAll([
        { year: "2016", users: 127115 },
        { year: "2017", users: 155300 },
        { year: "2018", users: 183908 },
        { year: "2019", users: 201774 },
        { year: "2020", users: 243369 },
      ]);

      xAxis.data.setAll([
        { year: "2016" },
        { year: "2017" },
        { year: "2018" },
        { year: "2019" },
        { year: "2020" },
      ]);

      return () => {
        root.dispose();
      };
    }
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }} ref={chartRef}></div>;
};

export default LineChart;
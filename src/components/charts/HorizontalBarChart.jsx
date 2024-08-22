import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

const HorizontalBarChart = ({ category, value, barColor, maxValue }) => {
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
          paddingLeft: 40,
          paddingRight: 20,
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "category",
          renderer: am5xy.AxisRendererY.new(root, {
            inversed: true,
            minGridDistance: 30,
            inside: false,
          }),
        })
      );

      yAxis.get("renderer").labels.template.set("forceHidden", true);

      const xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 150,
          }),
          min: 0,
          max: maxValue + (maxValue * 0.02),
          strictMinMax: true,
          extraMax: 0.05,
        })
      );

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "value",
          categoryYField: "category",
          sequencedInterpolation: true,
          fill: am5.color(barColor),
          stroke: am5.color(barColor),
        })
      );

      series.columns.template.setAll({
        cornerRadiusBR: 5,
        cornerRadiusTR: 5,
      });

      // Add a label bullet to indicate the exact value, positioned as a marker on the X-axis
      series.bullets.push(function(root, series, dataItem) {
        return am5.Bullet.new(root, {
          locationX: 1,
          sprite: am5.Label.new(root, {
            text: dataItem.get("valueX").toLocaleString(),
            fill: am5.color("#ffffff"), // White color for visibility
            centerY: am5.p100, // Position at the bottom
            centerX: am5.p50, // Center on the X-axis
            dy: 20, // Move down to place on X-axis
          })
        });
      });

      series.data.setAll([{ category, value }]);
      yAxis.data.setAll([{ category }]);

      return () => {
        root.dispose();
      };
    }
  }, [category, value, barColor, maxValue]);

  return <div id="chartdiv" style={{ width: "100%", height: "100px" }} ref={chartRef}></div>;
};

export default HorizontalBarChart;
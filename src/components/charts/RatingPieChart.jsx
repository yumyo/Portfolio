import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

const RatingPieChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const root = am5.Root.new(chartRef.current);

      // Apply dark theme
      root.setThemes([am5themes_Dark.new(root)]);

      const chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          layout: root.horizontalLayout,
        })
      );

      const series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          innerRadius: am5.percent(50),
        })
      );

      // Use the specified colors
      series.get("colors").set("colors", [
        am5.color("#a78bfa"), // Lavender
        am5.color("#4db6ac"), // Teal
      ]);

      series.data.setAll([
        { category: "Rating", value: 4.1 },
        { category: "Remaining", value: 0.9 },
      ]);

      series.slices.template.setAll({
        stroke: am5.color(0xffffff),
        strokeWidth: 2,
      });

      return () => {
        root.dispose();
      };
    }
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }} ref={chartRef}></div>;
};

export default RatingPieChart;
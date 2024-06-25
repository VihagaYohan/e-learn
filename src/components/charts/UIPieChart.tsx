import React, { Component } from "react";
import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts";

type chartModel = {
  id: number;
  value: number;
  label: string;
};

interface propTyppes {
  data: chartModel[];
}

// model data
const data = [
  { id: 0, value: 10, label: "Pass" },
  { id: 1, value: 15, label: "Failed" },
  { id: 2, value: 20, label: "Repeat" },
];

const UIPieChart = ({}) => {
  return (
    <Box
      sx={{
        border: 1,
        bgcolor: "white",
        // minHeight: 400,
        padding: 4,
      }}
    >
      <PieChart
        series={[
          {
            data: data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
    </Box>
  );
};

export default UIPieChart;

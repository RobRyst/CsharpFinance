import { AgCharts } from "ag-charts-react";
import { useState } from "react";

const getChartData = () => {
  return [
    { asset: "Dining Out", amount: 75 },
    { asset: "Personal Care", amount: 100 },
    { asset: "Bills", amount: 750 },
    { asset: "Entertainment", amount: 50 },
  ];
};

const BudgetDiagram = () => {
  const [options, setOptions] = useState({
    data: getChartData(),
    title: {
      text: "Monthly Budget",
    },
    series: [
      {
        type: "donut",
        angleKey: "amount",
        innerRadiusRatio: 0.55,
      },
    ],
  });

  return <AgCharts options={options} />;
};

export default BudgetDiagram;

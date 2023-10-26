import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import LineChart from "../components/LineChart";

Chart.register(CategoryScale);

  export default function App() {
    const [chartData, setChartData] = useState({
      // ...chart data
    });

  return (
    <div className="App">
     <LineChart chartData={chartData} />
    </div>
  );
  }

export default App;

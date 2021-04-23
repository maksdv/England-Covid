import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { NationFetch } from "../../types";
import { AxisTick } from "./AxisTick";

const ChartComponent = ({ data }: { data: NationFetch }) => {
  const { data: covidData } = data;
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ResponsiveContainer>
        <LineChart height={200} data={covidData.reverse()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" height={100} tick={AxisTick} />
          <YAxis />
          <Tooltip formatter={(val: any) => [val, "New cases"]} />
          <Line
            type="monotone"
            dataKey="newCases"
            stroke="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;

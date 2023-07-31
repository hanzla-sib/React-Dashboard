import React from "react";
import { BiSolidCarBattery } from "react-icons/bi";
import Pichart from "./pichart";
import { Progress, Space } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Main = () => {
  return (
    <div className="flex flex-col p-8 ">
      <div className="flex justify-between  items-center ">
        <div className="text-gray-400 text-xl font-semibold">Dashboard</div>
        <div className="rounded-md  bg-[#4F73E0] text-white">
          <button className="rounded-md p-1">Generate Report</button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 rounded-md py-8 gap-8 grid-cols-1">
        {/* Charts */}
        <div className="flex rounded-xl p-6 shadow-xl items-center justify-between border border-l-4 border-l-blue-400 hover:scale-110">
          <div className="flex flex-col">
            <p className="text-purple-400 text-sm ">EARNINGS (MONTHLY)</p>
            <h1 className="font-semibold text-gray-500">$40,000</h1>
          </div>
          <div>
            <BiSolidCarBattery size={30} />
          </div>
        </div>
        <div className="flex rounded-xl p-6 shadow-xl items-center justify-between border border-l-4 border-l-green-400 hover:scale-110">
          <div className="flex flex-col">
            <p className="text-green-600 text-sm">EARNINGS (ANNUAL)</p>
            <h1 className="font-semibold text-gray-500">$240,000</h1>
          </div>
          <div>
            <BiSolidCarBattery size={30} />
          </div>
        </div>
        <div className="flex rounded-xl p-6 shadow-xl items-center justify-between border border-l-4 border-l-green-600 hover:scale-110">
          <div className="flex flex-col">
            <p className="text-green-600 text-sm">TASKS</p>
            <h1 className="font-semibold text-gray-500">$240,000</h1>
          </div>
          <div>
            <BiSolidCarBattery size={30} />
          </div>
        </div>
        <div className="flex rounded-xl p-6 shadow-xl items-center justify-between border border-l-4 border-l-yellow-400 hover:scale-110">
          <div className="flex flex-col">
            <p className="text-green-600 text-sm">PENDING REQUESTS</p>
            <h1 className="font-semibold text-gray-500">$240,000</h1>
          </div>
          <div>
            <BiSolidCarBattery size={30} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  md:space-x-3  ">
        <div className="basis-[70%] shadow-2xl ">
          <div className="p-4 text-lg text-gray-500">
            <h1>Earnings Overview</h1>
          </div>
          <div className=" w-full h-96  ">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="basis-[30%] shadow-2xl">
          <div className="p-3 text-lg text-gray-500">
            <h1>Earnings Overview</h1>
          </div>

          <Pichart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 py-8 text-gray-500">
        <div className="basis-[40%] shadow-2xl p-8 ">
          <div className="text-lg text-gray-500">
            <h2>Project Overview</h2>
          </div>
          <div className="w-full md:hover:scale-105">
            <h2>Mitigation Rate</h2>
            <Progress percent={30} status="success" />
            <h2>Sales Tracking</h2>
            <Progress percent={50} status="active" />
            <h2>Customer Database</h2>
            <Progress percent={70} status="exception" />
          </div>
        </div>
        <div className="basis-[60%] shadow-2xl p-8">
          <div className="text-lg text-gray-500">
            <h2>Resources</h2>
          </div>
          <div className="md:hover:scale-105">
            <Progress
              percent={99.9}
              status="active"
              strokeColor={{ from: "#108ee9", to: "#87d068" }}
            />
            <Progress
              percent={99.9}
              status="active"
              strokeColor={{ from: "#108ee9", to: "#87d068" }}
            />
            <Space wrap>
              <Progress
                type="circle"
                status="active"
                percent={90}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
              <Progress
                type="circle"
                status="active"
                percent={100}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

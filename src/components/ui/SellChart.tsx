import { Loading } from "@/pages";
import { useCompletedPaymentBookingQuery } from "@/redux/features/booking/booking.api";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TableDataError from "./TableDataError";

const SellChart = () => {
  const [range, setRange] = useState("");
  const [barData, setBarData] = useState([]);

  const {
    data: paymentData,
    isLoading,
    isError,
  } = useCompletedPaymentBookingQuery(range);

  console.log(paymentData);

  // ! effect to set bar data in state
  useEffect(() => {
    if (paymentData?.data?.length >= 30) {
      const newData = paymentData?.data.slice(0, 30);
      setBarData(newData);
    } else {
      setBarData(paymentData?.data);
    }
  }, [paymentData, isLoading]);

  let content = null;

  // * if data is loading
  if (isLoading) {
    content = <Loading />;
  }

  // * if any error
  if (!isLoading && isError) {
    content = <TableDataError message="Something went wrong " />;
  }

  // * if there is no data
  if (!isLoading && !isError && paymentData?.data?.length < 1) {
    content = <TableDataError message="No data Found" />;
  }

  // * for data
  if (!isLoading && !isError && paymentData?.data?.length >= 1) {
    content = (
      <div className="chartDataContainer  ">
        {/* select input starts  */}
        <div className="selectInput  mb-14  ">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-700 "
          >
            Select Option :
          </label>
          <select
            id="countries"
            className=" w-[25%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  "
            onChange={(e) => setRange(e.target.value)}
          >
            <option selected>Default </option>

            <option value="seven">Last seven days</option>
            <option value="thirty">Last thirty days</option>
          </select>
        </div>
        {/* select input ends  */}

        {/* chart starts */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="updatedAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="amount"
              fill="#8884d8"
              activeBar={<Rectangle fill="purple" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
        {/* chart ends */}
      </div>
    );
  }

  return (
    <div className="SellChartContainer">
      <div className="SellChartWrapper rounded-md bg-gray-100 border border-gray-200 p-6 shadow-md ">
        <h1 className=" mb-8 px-3 xsm:px-4 sm:px-5 md:px-6 font-medium text-2xl  md:text-3xl   ">
          Revinue Per Day
        </h1>
        {/*  */}
        {content}
        {/*  */}
      </div>
    </div>
  );
};

export default SellChart;

// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// import { useEffect, useState } from "react";
// import { useGetAllCompletedOrdersPriceQuery } from "../../features/order/orderApi";

// const SellChart = () => {
//   const [range, setRange] = useState("");

//   const [barData, setBarData] = useState([]);

//   const { data: completedOrderValue, isLoading } =
//     useGetAllCompletedOrdersPriceQuery(range);

//   // ! effect to set bar data in state
//   useEffect(() => {
//     if (completedOrderValue?.length >= 30) {
//       const newData = completedOrderValue.slice(0, 30);
//       setBarData(newData);
//     } else {
//       setBarData(completedOrderValue);
//     }
//   }, [completedOrderValue, isLoading]);

//   if (isLoading) {
//     return <p>loading...</p>;
//   }

//   return (
//     <div className="SellChartContainer">
//       <div className="chartWrapper rounded bg-gray-100 border border-gray-200 p-6 shadow-md ">
//         <h3 className="brand mb-6 ">Sell per day</h3>

//         {/* select input starts  */}
//         <div className="selectInput  mb-14  ">
//           <label
//             htmlFor="countries"
//             className="block mb-2 text-sm font-medium text-gray-700 "
//           >
//             Select Sell
//           </label>
//           <select
//             id="countries"
//             className=" w-[25%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  "
//             onChange={(e) => setRange(e.target.value)}
//           >
//             <option selected>Default </option>

//             <option value="seven">Last seven days</option>
//             <option value="thirty">Last thirty days</option>
//           </select>
//         </div>
//         {/* select input ends  */}

//         {/* chart starts */}
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart
//             data={barData}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="updatedAt" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar
//               dataKey="amount"
//               fill="#8884d8"
//               activeBar={<Rectangle fill="purple" stroke="blue" />}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//         {/* chart ends */}
//       </div>
//     </div>
//   );
// };

// export default SellChart;

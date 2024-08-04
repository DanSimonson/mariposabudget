/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ngsAmT2Pglk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// "use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
// import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
// import { Pie, PieChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"

// export default function Component() {
//   const [transactions, setTransactions] = useState([
//     { id: 1, name: "Rent", amount: -1200, type: "expense" },
//     { id: 2, name: "Salary", amount: 3500, type: "income" },
//     { id: 3, name: "Groceries", amount: -250, type: "expense" },
//     { id: 4, name: "Utilities", amount: -150, type: "expense" },
//   ])
//   const [newTransaction, setNewTransaction] = useState({ name: "", amount: 0, type: "expense" })
//   const handleInputChange = (e) => {
//     setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value })
//   }
//   const handleAddTransaction = () => {
//     if (newTransaction.name.trim() !== "" && newTransaction.amount !== 0) {
//       setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }])
//       setNewTransaction({ name: "", amount: 0, type: "expense" })
//     }
//   }
//   const totalIncome = transactions.filter((t) => t.type === "income").reduce((total, t) => total + t.amount, 0)
//   const totalExpenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((total, t) => total + Math.abs(t.amount), 0)
//   const balance = totalIncome + totalExpenses
//   return (
// <div className="bg-background rounded-lg border p-6 w-full max-w-md flex flex-col gap-6">
//   <div className="flex items-center justify-between">
//     <h1 className="text-2xl font-bold">Budget App</h1>
//     <Button variant="outline" size="icon">
//       <SettingsIcon className="w-5 h-5" />
//     </Button>
//   </div>
//   <div className="grid gap-4">
//     <div className="grid gap-2">
//       <Label htmlFor="transaction">Add Transaction</Label>
//       <div className="flex items-center gap-2">
//         <Input
//           id="transaction"
//           name="name"
//           placeholder="Description"
//           value={newTransaction.name}
//           onChange={handleInputChange}
//         />
//         <Input
//           type="number"
//           name="amount"
//           placeholder="Amount"
//           value={newTransaction.amount}
//           onChange={handleInputChange}
//         />
//         <Select
//           name="type"
//           value={newTransaction.type}
//           onValueChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="expense">Expense</SelectItem>
//             <SelectItem value="income">Income</SelectItem>
//           </SelectContent>
//         </Select>
//         <Button onClick={handleAddTransaction}>Add</Button>
//       </div>
//     </div>
//     <div className="grid gap-4">
//       <div className="flex items-center justify-between">
//         <div className="text-muted-foreground">Balance</div>
//         <div className={`font-bold ${balance >= 0 ? "text-green-500" : "text-red-500"}`}>${balance.toFixed(2)}</div>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="text-muted-foreground">Total Income</div>
//         <div className="font-bold text-green-500">${totalIncome.toFixed(2)}</div>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="text-muted-foreground">Total Expenses</div>
//         <div className="font-bold text-red-500">${totalExpenses.toFixed(2)}</div>
//       </div>
//     </div>
//     <div className="grid gap-4">
//       <div className="flex justify-center">
//         <PiechartlabelChart className="aspect-square" />
//       </div>
//       <h2 className="text-lg font-semibold text-center">Expenses</h2>
//       <div className="border rounded-lg overflow-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead className="text-right">Amount</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {transactions
//               .filter((t) => t.type === "expense")
//               .map((t) => (
//                 <TableRow key={t.id}>
//                   <TableCell>{t.name}</TableCell>
//                   <TableCell className="text-right">-${Math.abs(t.amount).toFixed(2)}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//     <div className="grid gap-4">
//       <h2 className="text-lg font-semibold text-center">Balance</h2>
//       <div className="flex justify-center">
//         <PiechartlabelChart className="aspect-square" />
//       </div>
//       <div className="flex justify-center">
//         <PiechartlabelChart className="aspect-square" />
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

// function LinechartChart(props) {
//   return (
// <div {...props}>
//   <ChartContainer
//     config={{
//       desktop: {
//         label: "Desktop",
//         color: "hsl(var(--chart-1))",
//       },
//     }}
//   >
//     <LineChart
//       accessibilityLayer
//       data={[
//         { month: "January", desktop: 186 },
//         { month: "February", desktop: 305 },
//         { month: "March", desktop: 237 },
//         { month: "April", desktop: 73 },
//         { month: "May", desktop: 209 },
//         { month: "June", desktop: 214 },
//       ]}
//       margin={{
//         left: 12,
//         right: 12,
//       }}
//     >
//       <CartesianGrid vertical={false} />
//       <XAxis
//         dataKey="month"
//         tickLine={false}
//         axisLine={false}
//         tickMargin={8}
//         tickFormatter={(value) => value.slice(0, 3)}
//       />
//       <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//       <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
//     </LineChart>
//   </ChartContainer>
// </div>
//   )
// }

// function PiechartlabelChart(props) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           visitors: {
//             label: "Visitors",
//           },
//           chrome: {
//             label: "Chrome",
//             color: "hsl(var(--chart-1))",
//           },
//           safari: {
//             label: "Safari",
//             color: "hsl(var(--chart-2))",
//           },
//           firefox: {
//             label: "Firefox",
//             color: "hsl(var(--chart-3))",
//           },
//           edge: {
//             label: "Edge",
//             color: "hsl(var(--chart-4))",
//           },
//           other: {
//             label: "Other",
//             color: "hsl(var(--chart-5))",
//           },
//         }}
//         className="mx-auto aspect-square max-h-[250px] pb-0"
//       >
//         <PieChart>
//           <ChartTooltip content={<ChartTooltipContent hideLabel />} />
//           <Pie
//             data={[
//               { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//               { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//               { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//               { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//               { browser: "other", visitors: 90, fill: "var(--color-other)" },
//             ]}
//             dataKey="visitors"
//             label
//             nameKey="browser"
//           />
//         </PieChart>
//       </ChartContainer>
//     </div>
//   )
// }

// function SettingsIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }

import React from "react";
import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/extras";
const TrackIncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();
  //className="w-full px-auto flex justify-between"
  return (
    <>
      {/* <div className="bg-white shadow p-6 flex justify-between my-5 mx-0"> */}
      <div className="w-full flex justify-between mt-4 mb-4 text-2xl">
        <h4>Income</h4>
        <p className="text-green-500 ">
          ${addCommas(Number(income?.toFixed(2)))}
        </p>
      </div>
      <div className="w-full flex justify-between text-2xl">
        <h4>Expense</h4>
        <p className="text-red-500">
          ${addCommas(Number(expense?.toFixed(2)))}
        </p>
      </div>
      {/* </div> */}
    </>
  );
};

export default TrackIncomeExpense;

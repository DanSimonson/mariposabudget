import React from "react";

const TrackIncomeExpense = async () => {
  return (
    <div className="bg-white shadow p-6 flex justify-between my-5 mx-0">
      <div className="mr-4">
        <h4>Income</h4>
        <p className="text-green-500">$700</p>
      </div>
      <div className="flex-1 text-center border-l-2 pl-4">
        <h4>Expense</h4>
        <p className="text-red-500">$200</p>
      </div>
    </div>
  );
};

export default TrackIncomeExpense;

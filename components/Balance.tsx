import { useState } from "react";
import getBalance from "@/app/actions/getBalance";
import { addCommas } from "@/lib/extras";
const Balance = async () => {
  const { balance } = await getBalance();
  let result;
  if (typeof balance !== "undefined" && balance > 0) {
    result = (
      <div className="w-full flex justify-between mt-4 text-2xl">
        <h4>Balance</h4>
        <h1 className="text-green-500">
          ${addCommas(Number(balance?.toFixed(2) ?? 0))}
        </h1>
      </div>
    );
  } else {
    result = (
      <div className="w-full flex justify-between mt-4 text-2xl">
        <h4>Balance</h4>
        <h1 className="text-red-500">
          ${addCommas(Number(balance?.toFixed(2) ?? 0))}
        </h1>
      </div>
    );
  }

  return <>{result}</>;
};

export default Balance;

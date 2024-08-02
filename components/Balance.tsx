import getBalance from "@/app/actions/getBalance";
import { addCommas } from "@/lib/extras";
const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
    </>
  );
};

export default Balance;

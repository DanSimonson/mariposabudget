import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="text-center">
      <h1 className="mt-2 text-pretty font-semibold">Welcome</h1>
      <p className="mt-2 text-pretty font-semibold">
        Please sign in to manage your transactions
      </p>
      <div className="bg-cyan-500 cursor-pointer w-1/2 mx-auto py-1 rounded-sm mt-2">
        <SignInButton />
      </div>
    </div>
  );
};
export default Guest;

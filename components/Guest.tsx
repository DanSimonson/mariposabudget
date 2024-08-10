import { SignInButton } from "@clerk/nextjs";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { VortexDemo } from "./VortexDemo";
const Guest = () => {
  return (
    <>
      <div className="h-[100%]">
        <VortexDemo />
      </div>
    </>
  );
};
export default Guest;

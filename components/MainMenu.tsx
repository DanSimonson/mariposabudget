import { inspect } from "@/lib/inspect";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { GiMountaintop } from "react-icons/gi";

export default async function MainMenu() {
  const user = await inspect();
  return (
    <Navbar className="w-full flex items-center justify-between max-w-4xl mx-auto px-4 py-5 rounded-md bg-primary-foreground">
      <NavbarBrand href="https://www.mariposaweb.net">
        <span className="self-center whitespace-nowrap px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white font-bold flex flex-row justify-around p-10">
          <GiMountaintop className="size-10" />
          mariposaweb
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </Navbar>
  );
}

{
  /* <nav className="bg-black text-white">
<div className="border border-blue-500 flex justify-between items-center max-w-4xl mx-auto my-0 px-8 py-0">
  <h2>Mariposa Budget</h2>

  {/* rounded-sm bg-cyan-500 p-2 my-1 
  <div className="">
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
</div>
</nav> */
}

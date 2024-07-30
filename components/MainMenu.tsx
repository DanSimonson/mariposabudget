import { inspect } from "@/lib/inspect";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function MainMenu() {
  const user = await inspect();

  return (
    <nav className="bg-black text-white">
      <div className="border border-blue-500 flex justify-between items-center max-w-4xl mx-auto my-0 px-8 py-0">
        <h2>Mariposa Budget</h2>

        <div className="rounded-sm bg-cyan-500 p-2 my-1">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Galeery</div>
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}

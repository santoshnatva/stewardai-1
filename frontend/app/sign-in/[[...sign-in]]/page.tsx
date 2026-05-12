import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f1e3c]">
      <SignIn />
    </main>
  );
}

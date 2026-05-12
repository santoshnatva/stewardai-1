import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Database, Cpu, Upload } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0f1e3c] text-white flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span className="text-xl font-bold tracking-tight text-white">StewArdAI</span>
        <div className="flex gap-3">
          <SignInButton>
            <button className="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
              Get Started
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
          AI-Powered Data Governance
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
          Govern Your Data with{" "}
          <span className="text-blue-400">AI Precision</span>
        </h1>
        <p className="text-lg text-blue-100/70 max-w-xl mb-10">
          AI-Powered Data Governance — From Snowflake to Collibra in Minutes
        </p>
        <div className="flex gap-4">
          <SignUpButton>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition text-sm">
              Start for Free
            </button>
          </SignUpButton>
          <SignInButton>
            <button className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition text-sm">
              Sign In
            </button>
          </SignInButton>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-8 pb-24 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-blue-400 w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">Connect Snowflake</h3>
            <p className="text-blue-100/60 text-sm">
              Securely connect to your Snowflake instance and browse databases, schemas, tables, and columns.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="text-blue-400 w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">AI Generates Governance Assets</h3>
            <p className="text-blue-100/60 text-sm">
              Claude AI auto-generates semantic and conceptual layer assets with business definitions for every asset.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Upload className="text-blue-400 w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">Push to Collibra</h3>
            <p className="text-blue-100/60 text-sm">
              Review, accept or reject each asset, then push approved assets to Collibra with full lineage relations.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-6 text-blue-100/40 text-xs">
        © {new Date().getFullYear()} StewArdAI. All rights reserved.
      </footer>
    </main>
  );
}

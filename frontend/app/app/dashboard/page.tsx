import Link from "next/link";
import { Snowflake } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6">
      <h1 className="text-3xl font-extrabold text-[#0f1e3c] mb-2">
        Welcome to StewArdAI
      </h1>
      <p className="text-gray-500 mb-12 text-base">
        Select Your Source System
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {/* Snowflake — active */}
        <Link href="/app/connect/snowflake">
          <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 flex flex-col items-center gap-4 shadow-md hover:shadow-lg hover:border-blue-400 transition cursor-pointer group">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition">
              <Snowflake className="w-7 h-7 text-blue-500" />
            </div>
            <span className="font-semibold text-[#0f1e3c] text-base">Snowflake</span>
            <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">Connect</span>
          </div>
        </Link>

        {/* BigQuery — coming soon */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-4 opacity-50 cursor-not-allowed">
          <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-gray-400 text-base">BigQuery</span>
          <span className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">Coming Soon</span>
        </div>

        {/* PostgreSQL — coming soon */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-4 opacity-50 cursor-not-allowed">
          <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
              <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
            </svg>
          </div>
          <span className="font-semibold text-gray-400 text-base">PostgreSQL</span>
          <span className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

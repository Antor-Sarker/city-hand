import Sidebar from "@/components/dashboard/sidebar";
import { Suspense } from "react";
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50/60 mb-32 flex">
      <Sidebar role="client" />

      <Suspense
        fallback={
          <div className="text-center text-xl text-red-400">loading...</div>
        }
      >
        <div className="flex-1">{children}</div>
      </Suspense>
    </div>
  );
}

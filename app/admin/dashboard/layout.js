import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50/60 mb-32 flex">
      <Sidebar role="admin" />
      <div className="flex-1">{children}</div>
    </div>
  );
}

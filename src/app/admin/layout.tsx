import { Sidebar } from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-900">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden px-8 py-8">{children}</div>
    </div>
  );
}

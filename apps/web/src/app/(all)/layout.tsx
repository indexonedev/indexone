import Sidebar from "@/components/sidebar";

export default function AllLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-start">
      <Sidebar />
      {children}
    </div>
  );
}
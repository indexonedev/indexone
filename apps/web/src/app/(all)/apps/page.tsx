import AppCard from "./_components/app-card";
import AppsHeader from "./_components/apps-header";

export default function AppsPage() {
  return(
    <div className="text-zinc-400 py-4 w-full">
      <AppsHeader />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
}
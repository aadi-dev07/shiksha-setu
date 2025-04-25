
import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow sm:rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Welcome to your Dashboard</h2>
          <p className="text-gray-600">Your secure space is ready.</p>
        </div>
      </main>
    </div>
  );
}

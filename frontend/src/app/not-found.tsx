import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900">
      <h1 className="text-6xl sm:text-8xl font-black font-display tracking-tight mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold mb-3">Page Not Found</h2>
      <p className="text-sm text-zinc-500 max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-black font-bold uppercase tracking-wider text-xs shadow-md transition-all hover:scale-105 active:scale-95"
      >
        Back to Home
      </Link>
    </div>
  );
}

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-10">
      <div className="flex items-center gap-3">
        <Image 
          src="/financial-era-log.svg" 
          alt="Financial Era Logo" 
          width={64} 
          height={64}
          className="w-16 h-16"
        />
        <span className="font-bold text-3xl">Financial Era</span>
      </div>
      
      <div className="hidden md:flex items-center bg-gray-900/50 border border-gray-700 rounded-full px-4 py-1.5 w-1/3">
        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input type="text" placeholder="Search knowledge, markets, ideas..." className="bg-transparent border-none text-sm focus:outline-none text-gray-300 w-full" />
        <span className="text-xs text-gray-500 border border-gray-600 rounded px-1.5">⌘K</span>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition">Markets</a>
        <a href="#" className="hover:text-white transition">Knowledge</a>
        <a href="#" className="hover:text-white transition">Articles</a>
        <a href="#" className="hover:text-white transition">Books</a>
        <a href="#" className="hover:text-white transition">About</a>
        <button className="hover:text-white">☾</button>
        <a href="#" className="hover:text-white transition">Sign In</a>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-2 rounded-full font-medium transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

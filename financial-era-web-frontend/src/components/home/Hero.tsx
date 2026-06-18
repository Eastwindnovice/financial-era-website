import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <div className="max-w-3xl mb-16">
        <p className="text-blue-500 font-medium mb-4 text-2xl">Financial Era</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Understanding the world<br />
          through <span className="gradient-text-blue">logic,</span><br />
          <span className="gradient-text-blue">history</span> and <span className="gradient-text-pink">capital.</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg">
          A knowledge platform for lifelong learners, investors and builders.<br />
          Explore ideas that shape the world and your future.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
            Explore Knowledge <span>→</span>
          </button>
          <button className="glass-panel hover:bg-white/5 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
            Start Reading <span>📖</span>
          </button>
        </div>
      </div>
      
      <Image 
        src="/homepage-top-right.png" 
        alt="Planet decoration" 
        width={1150}
        height={1150}
        className="earth-asset"
        style={{
          position: 'absolute',
          right: '-4%',
          top: '-30%',
          width: '75vw',
          maxWidth: '1150px',
          minWidth: '915px',
          height: 'auto',
          objectFit: 'contain',
          mixBlendMode: 'screen',
          opacity: 0.85,
          filter: 'brightness(1.1) contrast(1.05)',
          pointerEvents: 'none',
          zIndex: -1
        }}
        priority
      />
    </div>
  );
}

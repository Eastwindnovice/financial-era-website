export default function Dashboard() {
  const marketData = [
    { symbol: "SPX", name: "S&P 500", last: "5,281.40", change: "+64.21", changePercent: "+1.23%", positive: true },
    { symbol: "NDX", name: "Nasdaq 100", last: "18,574.43", change: "+269.87", changePercent: "+1.47%", positive: true },
    { symbol: "DJI", name: "Dow Jones", last: "39,069.59", change: "+330.93", changePercent: "+0.85%", positive: true },
    { symbol: "VIX", name: "Volatility Index", last: "12.45", change: "-0.42", changePercent: "-3.27%", positive: false },
  ];

  const insights = [
    { title: "The Great Rebalancing: Capital Flows in 2024", date: "Mar 3, 2024", gradient: "from-blue-900 to-indigo-900" },
    { title: "Why History Rhymes in Markets", date: "Mar 2, 2024", gradient: "from-orange-900 to-red-900" },
    { title: "AI + Productivity: My 2024 Workflow", date: "Mar 1, 2024", gradient: "from-teal-900 to-emerald-900" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Market Overview */}
      <div className="glass-panel rounded-xl p-5 lg:col-span-3">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-bold">Market Overview</h3>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Live
          </span>
        </div>
        <div className="flex gap-4 text-sm text-gray-400 mb-4 border-b border-gray-800 pb-2">
          <span className="text-white border-b-2 border-blue-500 pb-2 -mb-[9px]">Indices</span>
          <span>Commodities</span>
          <span>Crypto</span>
          <span>Forex</span>
        </div>
        <table className="w-full text-sm">
          <thead className="text-gray-500 text-xs text-left">
            <tr>
              <th className="font-normal pb-2">Symbol</th>
              <th className="font-normal pb-2 text-right">Last</th>
              <th className="font-normal pb-2 text-right">Change</th>
              <th className="font-normal pb-2 text-right">Change %</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((item, index) => (
              <tr key={index} className={index !== marketData.length - 1 ? "border-b border-white/5" : ""}>
                <td className="py-2">
                  <div className="font-medium">{item.symbol}</div>
                  <div className="text-xs text-gray-500">{item.name}</div>
                </td>
                <td className="text-right">{item.last}</td>
                <td className={`text-right ${item.positive ? "text-green-400" : "text-red-400"}`}>{item.change}</td>
                <td className={`text-right ${item.positive ? "text-green-400" : "text-red-400"}`}>{item.changePercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#" className="text-blue-400 text-sm mt-4 inline-block hover:text-blue-300">
          View all markets →
        </a>
      </div>

      {/* Market Chart */}
      <div className="glass-panel rounded-xl p-5 lg:col-span-5 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Market Chart</h3>
          <div className="flex gap-2 text-xs">
            <button className="bg-blue-600 text-white px-2 py-1 rounded">1D</button>
            <button className="text-gray-400 hover:text-white px-2 py-1">1W</button>
            <button className="text-gray-400 hover:text-white px-2 py-1">1M</button>
            <button className="text-gray-400 hover:text-white px-2 py-1">3M</button>
            <button className="text-gray-400 hover:text-white px-2 py-1">1Y</button>
            <button className="text-gray-400 hover:text-white px-2 py-1">ALL</button>
          </div>
        </div>
        <div className="flex-grow flex items-end relative border-l border-b border-gray-700/50 pt-10">
          <div className="absolute right-0 top-1/4 bg-blue-600 text-white text-xs px-2 py-1 rounded">5,281.40</div>
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,80 Q10,70 20,60 T40,50 T60,30 T80,40 T100,20" fill="none" stroke="#ec4899" strokeWidth="1.5" className="ml-10" />
            <path d="M0,60 Q10,50 20,40 T40,60 T60,20 T80,10 T100,30" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Latest Insights */}
      <div className="glass-panel rounded-xl p-5 lg:col-span-4">
        <h3 className="font-bold mb-6">Latest Insights</h3>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex gap-4 items-center group cursor-pointer">
              <div className="w-16 h-12 bg-gray-800 rounded-md shrink-0 border border-gray-700 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${insight.gradient}`}></div>
              </div>
              <div>
                <h4 className="font-medium text-sm group-hover:text-blue-400 transition">{insight.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{insight.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <a href="#" className="text-blue-400 text-sm hover:text-blue-300">
            View all insights →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CategoryCards() {
  const categories = [
    {
      icon: "🧠",
      title: "Logic",
      description: "Build razor-sharp thinking with logic, reasoning and mental models.",
      color: "blue",
    },
    {
      icon: "🪙",
      title: "Finance",
      description: "Learn finance, investing and markets with clarity and depth.",
      color: "blue",
    },
    {
      icon: "🏛️",
      title: "Economic History",
      description: "Understand cycles, crises and the evolution of economic systems.",
      color: "blue",
    },
    {
      icon: "🌐",
      title: "Markets",
      description: "Real-time market data, insights and independent research.",
      color: "blue",
    },
    {
      icon: "{</>}",
      title: "Programming",
      description: "Share knowledge about coding, tools and building in public.",
      color: "pink",
    },
    {
      icon: "📖",
      title: "Books",
      description: "Book summaries, PDFs and reading notes with reflections.",
      color: "pink",
    },
    {
      icon: "✍️",
      title: "Articles",
      description: "Thoughts on current events, economics, tech and life.",
      color: "pink",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`glass-panel p-6 rounded-xl hover:-translate-y-1 transition duration-300 ${
            category.color === "pink" ? "border-pink-500/30" : ""
          }`}
        >
          <div className={`w-10 h-10 mb-4 ${category.color === "pink" ? "text-pink-500" : "text-blue-400"}`}>
            {category.icon}
          </div>
          <h3 className="font-bold text-lg mb-2">{category.title}</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">{category.description}</p>
          <a
            href="#"
            className={`text-sm font-medium ${
              category.color === "pink"
                ? "text-pink-500 hover:text-pink-400"
                : "text-blue-400 hover:text-blue-300"
            }`}
          >
            Explore →
          </a>
        </div>
      ))}
    </div>
  );
}

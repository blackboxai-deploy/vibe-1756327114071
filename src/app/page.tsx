export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to your first Next.js application
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            This is a simple Hello World page built with Next.js 14, React, and Tailwind CSS. 
            The page features a modern gradient design and responsive layout.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/20">
            <div className="text-sm text-gray-500 font-medium">Framework</div>
            <div className="text-lg font-semibold text-gray-800">Next.js 14</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/20">
            <div className="text-sm text-gray-500 font-medium">Styling</div>
            <div className="text-lg font-semibold text-gray-800">Tailwind CSS</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/20">
            <div className="text-sm text-gray-500 font-medium">Status</div>
            <div className="text-lg font-semibold text-green-600">Ready</div>
          </div>
        </div>
      </div>
    </main>
  );
}
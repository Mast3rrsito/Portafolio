function ProjectsApp() {
    return (
        <div className="min-h-screen p-10 bg-gradient-to-br from-gray-900 to-black text-white">
            <a href="index.html" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
                <div className="icon-arrow-left mr-2"></div> Back to Hub
            </a>
            <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Selected Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-800 bg-gray-900/50 p-6 rounded-xl hover:border-green-500/50 transition-all group">
                        <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                            <div className="icon-folder text-4xl text-gray-600 group-hover:text-green-400 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Project Alpha {item}</h3>
                        <p className="text-gray-400 text-sm mb-4">A high-performance web application built with React and modern web technologies.</p>
                        <div className="flex gap-2 text-xs">
                            <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded">React</span>
                            <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded">Node</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectsApp />);

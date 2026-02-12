function ContactApp() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-gray-900 to-black p-4 text-font-code">
            <div className="w-full max-w-md border border-gray-700 bg-black/50 backdrop-blur-xl p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
                
                {/* Decorative background glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                 <a href="index.html" className="inline-flex items-center text-gray-500 hover:text-white mb-10 transition-colors text-sm uppercase tracking-widest">
                    <div className="icon-arrow-left mr-2"></div> Return to Base
                </a>
                
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <h1 className="text-2xl font-bold text-white tracking-widest uppercase">Direct Link</h1>
                    
                    {/* Discord Logo SVG */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 animate-pulse"></div>
                        <svg className="w-24 h-24 text-indigo-400 relative z-10 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 00-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5328-9.7135-3.5686-13.638a.0687.0687 0 00-.0313-.0284zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                        </svg>
                    </div>

                    <p className="text-gray-400 text-sm max-w-xs">
                        Connect with me directly on the network.
                    </p>

                    <a 
                        href="https://discord.com/users/YOUR_ID_HERE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="
                            group relative px-8 py-4 bg-indigo-600/20 text-indigo-300 
                            font-bold border border-indigo-500/50 rounded hover:bg-indigo-600 hover:text-white 
                            transition-all duration-300 flex items-center gap-3 overflow-hidden
                        "
                    >
                        <span className="relative z-10">OPEN PROFILE</span>
                        <div className="icon-external-link relative z-10 group-hover:rotate-45 transition-transform duration-300"></div>
                        
                        {/* Hover shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactApp />);

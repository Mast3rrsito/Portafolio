// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white font-code">
          <div className="text-center p-8 border border-red-500 rounded">
            <h1 className="text-2xl font-bold text-red-500 mb-4">System Malfunction</h1>
            <p className="text-gray-400 mb-4">Critical error detected in sector 7G.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-custom-gradient" data-name="app-container" data-file="app.js">
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

        {/* Top Navigation */}
        <TopNav />

        {/* Main Content Layout */}
        <div className="relative z-10 w-full h-full p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-8 pointer-events-none">
          
          {/* Left Section - Navigation */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-center pointer-events-auto">
             <MenuButtons />
          </div>

          {/* Center/Right Section - Content */}
          <div className="col-span-1 md:col-span-8 flex flex-col items-center justify-center relative space-y-12">
            
            {/* Main Title Group */}
            <div className="text-center w-full z-20">
              <h1 className="text-5xl md:text-7xl font-bold text-neon-blue tracking-[0.2em] mb-4">
                <ScrambleText text="PORTFOLIO" delay={500} />
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
                 <ScrambleText text="Master!" delay={1500} />
              </h2>
            </div>
            
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

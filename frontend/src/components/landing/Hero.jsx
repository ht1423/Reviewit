import React from 'react'
import { useNavigate } from 'react-router-dom'
 
function Hero() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center mt-48 relative  bg-black pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center max-w-4xl transform -translate-y-10 space-y-10 mb-24 sm:mb-0 relative z-10 bg-black">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Build your workspace with ease
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
          Start creating and organizing your projects with <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Reviewit</span> today.
        </p>
        <button 
          onClick={() => navigate('/create')} 
          className="text-white bg-indigo-800 py-2 px-8 sm:py-3 sm:px-10 text-lg font-semibold transition-all duration-300 transform hover:opacity-70 shadow-lg cursor-pointer uppercase relative group" style={{
            letterSpacing: '3px',
            wordSpacing: '4px'
          }}>
          <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-10 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></span>
          <span className="relative">Create Workspace</span>
        </button>

        {/* Floating Elements */}
        <div className="absolute -right-20 top-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute -left-20 bottom-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float delay-1000"></div>

        {/* Review Counter Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="text-4xl font-bold text-indigo-400 mb-2">10K+</div>
            <div className="text-gray-400">Active Reviews</div>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">5K+</div>
            <div className="text-gray-400">Happy Users</div>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 max-w-2xl mx-auto">
          <div className="bg-black p-8 rounded-xl border border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-700"></div>
              <div>
                <div className="text-white font-semibold">Sarah Johnson</div>
                <div className="text-gray-400 text-sm">Product Manager</div>
              </div>
            </div>
            <p className="text-gray-300 italic">"Reviewit has transformed how our team handles project reviews. The interface is intuitive and the collaboration features are exactly what we needed."</p>
          </div>
        </div>

        {/* Feature Highlights Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Real-time Collaboration</h3>
            <p className="text-gray-400">Work together seamlessly with real-time updates and feedback.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Advanced Analytics</h3>
            <p className="text-gray-400">Gain insights with detailed analytics and reporting tools.</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Reviewit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Experience blazing fast performance with our optimized platform.</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-400">Your data is protected with enterprise-grade security measures.</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Features</h3>
              <p className="text-gray-400">Intelligent tools that adapt to your workflow needs.</p>
            </div>
          </div>
        </div>

        {/* Fun Interactive Section */}
        <div className="mt-24 text-center">
          <div className="bg-black p-12 rounded-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center space-x-4 mb-6">
              <span className="text-4xl animate-bounce">🎨</span>
              <span className="text-4xl animate-bounce delay-100">✨</span>
              <span className="text-4xl animate-bounce delay-200">🚀</span>
              <span className="text-4xl animate-bounce delay-300">💫</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Magic?</h2>
            <p className="text-gray-300 text-lg mb-6">Join our creative community and turn your ideas into reality!</p>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="mt-24 relative">
          <div className="h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          <div className="absolute -bottom-20 left-0 right-0 h-40 pointer-events-none">
            <div className="relative h-full">
              {/* Floating Elements */}
              <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-indigo-500/20 rounded-full animate-float-slow"></div>
              <div className="absolute bottom-8 left-1/3 w-2 h-2 bg-purple-500/20 rounded-full animate-float-medium"></div>
              <div className="absolute bottom-16 left-1/2 w-4 h-4 bg-blue-500/20 rounded-full animate-float-fast"></div>
              <div className="absolute bottom-4 right-1/4 w-3 h-3 bg-indigo-500/20 rounded-full animate-float-slow"></div>
              <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-purple-500/20 rounded-full animate-float-medium"></div>
              <div className="absolute bottom-20 right-1/2 w-4 h-4 bg-blue-500/20 rounded-full animate-float-fast"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  @keyframes tilt {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(5deg); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-tilt {
    animation: tilt 10s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float 8s ease-in-out infinite;
  }
  .animate-float-medium {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-fast {
    animation: float 4s ease-in-out infinite;
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

import React from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. Explore our
            premium interior design products and services in Patna.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Home size={20} />
            <span>Home Page</span>
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Need help? Contact S-Tech Interior for premium furniture and
            interior design services in Patna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

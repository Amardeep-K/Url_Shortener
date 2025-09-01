import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            MySite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            
            <Link to="/url-shortener" className="hover:text-blue-600">Url Shortener</Link>
            
            <Link to="/register" className="hover:text-blue-600">Register</Link>
            
           
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4 py-3 space-y-2 flex flex-col items-center">
           <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-blue-600">Home</Link>
            
            <Link onClick={() => setIsOpen(false)} to="/url-shortener" className="hover:text-blue-600">Url Shortener</Link>
            
            <Link onClick={() => setIsOpen(false)} to="/register" className="hover:text-blue-600">Register</Link>
        
           
          </div>
        </div>
      )}
    </nav>
  );
}

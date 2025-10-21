
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            <Link to="/">APB Water Systems</Link>
          </div>
          <div className="space-x-4">
            <Link to="/devhome" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* 🌟 ExpensoFlow Animated Logo */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide animate-pulse bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
          ExpensoFlow
        </h1>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <Link to="/" className="nav-button">
            Dashboard
          </Link>
          <Link to="/add-expense" className="nav-button">
            Add Expense
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

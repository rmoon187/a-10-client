import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.webp'
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, handleLogOut } = useContext(AuthContext);

    return (
        <nav className="bg-[#84cc16] text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo & Name */}
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <span className="text-black"><img className="w-12 rounded-lg" src={logo} alt="" /></span> AthletiX
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:gap-5 lg:gap-6 md:text-[10px] lg:text-base">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <Link to="/all-sports" className="hover:text-black">All Sports Equipment</Link>
                    <Link to="/add-equipment" className="hover:text-black">Add Equipment</Link>
                    <Link to="/my-equipment" className="hover:text-black">My Equipment List</Link>
                </div>

                {/* Login Button */}
                {user ? (<div className="hidden md:flex gap-3 ">
                    <div className="relative group">
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/40"}
                            alt="User"
                            className="w-12 h-12 rounded-full object-cover cursor-pointer border-2 border-blue-400"
                        />
                        {/* Tooltip */}
                        <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                            {user?.displayName || "User"}
                        </span>
                    </div>
                    <button
                        onClick={handleLogOut}
                        className="bg-red-500 px-2 py-1 text-white rounded-md flex items-center"
                    >
                        Logout
                    </button>
                </div>) : (<div className="hidden md:flex gap-3 ">
                    <Link to="/login" className="bg-black font-bold text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black">
                        Login
                    </Link>
                    <Link to="/register" className="bg-black font-bold text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black">
                        Register
                    </Link>
                </div>)}


                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#84cc16] flex flex-col items-center py-4 space-y-4">
                    <Link to="/" className="hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/all-sports" className="hover:text-black" onClick={() => setIsOpen(false)}>All Sports Equipment</Link>
                    <Link to="/add-equipment" className="hover:text-black" onClick={() => setIsOpen(false)}>Add Equipment</Link>
                    <Link to="/my-equipment" className="hover:text-black" onClick={() => setIsOpen(false)}>My Equipment List</Link>
                    <Link to="/login" className="bg-black text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black" onClick={() => setIsOpen(false)}>
                        Login
                    </Link>
                    <Link to="/register" className="bg-black text-[#84cc16] px-4 py-2 rounded-lg hover:bg-white hover:text-black" onClick={() => setIsOpen(false)}>
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar

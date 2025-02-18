import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from '../assets/logo.webp'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center space-y-4">
                {/* Website Name */}
                <div className="flex justify-center items-center gap-3">
                    <img className="w-12  rounded-lg" src={logo} alt="" />
                    <h2 className="text-2xl  font-bold text-[#84cc16]">AthletiX</h2>

                </div>
                {/* Contact Info */}
                <p>Email: support@athletix.com | Phone: +123 456 7890</p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 text-[#84cc16]">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <Facebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <Twitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <Instagram size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AthletiX. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer
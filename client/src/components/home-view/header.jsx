import { Link, useNavigate } from "react-router-dom"; // Adicione useNavigate aqui
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Inicialização do navigate

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex items-center justify-between px-6 md:px-20 py-4 bg-white">
      <div className="flex items-center">
        <img
          src="/LogoHorizontalOrange.png"
          alt="JOV Logo"
          width={60}
          height={33}
        />
      </div>
      <div className="md:hidden">
        <Button
          variant="outline"
          onClick={toggleMenu}
          className="border-orange-500"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-64 bg-white p-6 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:translate-x-0 md:w-auto md:bg-transparent md:p-0 md:flex md:flex-grow md:items-center md:justify-between`}
      >
        <Button
          variant="ghost"
          onClick={toggleMenu}
          className="absolute top-4 right-4 md:hidden"
        >
          <X className="h-6 w-6" />
        </Button>
        <nav className="flex flex-col space-y-4 mt-8 md:flex-row md:items-center md:space-y-0 md:space-x-8 md:mt-0 md:mx-auto">
          <Link
            to="/features"
            className="text-orange-500 font-medium hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-orange-500 font-medium hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            to="/community"
            className="text-orange-500 font-medium hover:text-gray-900"
          >
            Community
          </Link>
          <Link
            to="/support"
            className="text-orange-500 font-medium hover:text-gray-900"
          >
            Support
          </Link>
        </nav>
        <div className="flex flex-col space-y-4 mt-8 md:flex-row md:items-center md:space-y-0 md:space-x-4 md:mt-0">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
            onClick={() => navigate("/auth/login")} // Redireciona para a página de login
          >
            Log in
          </Button>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white border border-orange-500"
            onClick={() => navigate("/auth/register")} // Redireciona para a página de registro
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

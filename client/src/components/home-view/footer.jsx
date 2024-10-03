import React from "react";
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <nav className="mb-6">
          <ul className="flex space-x-6">
            <li>
              <SocialLink href="https://youtube.com" aria-label="YouTube">
                <Youtube className="w-6 h-6" />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </SocialLink>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-gray-600 text-center">
          © {currentYear} JOV. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

const SocialLink = ({ children, href, ...props }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </Link>
);

export default Footer;

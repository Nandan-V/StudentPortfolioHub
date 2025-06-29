import { Link, useLocation } from "wouter";
import { User, Mail } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-github-dark/90 backdrop-blur-sm border-b border-github-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="/">
              <button
                className={`flex items-center text-sm transition-colors duration-200 ${
                  location === "/"
                    ? "text-github-text"
                    : "text-github-text-secondary hover:text-github-blue"
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Portfolio
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`flex items-center text-sm transition-colors duration-200 ${
                  location === "/contact"
                    ? "text-github-text"
                    : "text-github-text-secondary hover:text-github-blue"
                }`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

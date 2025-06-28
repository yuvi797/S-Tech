import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400">
              S-Tech Enterprises
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Transforming spaces with premium interior design products and
              exceptional service. Your dream home is our mission.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/share/19Pn1q8WYc/"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/stechenterprisespatna?igsh=dXg2aG4wZzQ3d2ow"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>

              <a
                href="https://youtube.com/@stechenterprisespatna?si=n2sWHGARWcQf_EP7"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Furniture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Lighting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Wall Art
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Home Decor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <div className="text-gray-300 text-xs sm:text-sm">
                  Ashiana Digha Road, Near May Flower School
                  <br />
                  Patna, 800011
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={16} />
                <a
                  href="tel:+918404821194"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  +91-8404821194
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={16} />
                <a
                  href="mailto:entersisesstar39@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm break-all"
                >
                  entersisesstar39@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} S-Tech Enterprises. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              Designed with ❤️ for beautiful interiors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

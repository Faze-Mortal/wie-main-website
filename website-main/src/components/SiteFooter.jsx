import React from 'react';
import { NavLink } from 'react-router-dom';

const EmailIcon = () => <i className="las la-envelope text-xl mt-1" />;
const LocationIcon = () => <i className="las la-map-marker-alt text-xl mt-1" />;

const SiteFooter = () => {
  const currentYear = 2026;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blogs" },
  ];

  return (
    <div className="relative z-50 w-full flex flex-col justify-end bg-[var(--dark-amethyst-2,#240046)]">
      {/* Content wrapper with max-width matching other phases */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-10 pt-20 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-gray-400">
          
          {/* Col 1: Logo and Description */}
          <div className="col-span-1 lg:col-span-2 space-y-5">
            <h3 className="text-white text-2xl font-bold font-cambo">IEEE WIE MUJ</h3>
            <p className="max-w-lg text-sm leading-relaxed">
              IEEE Women in Engineering MUJ is dedicated to promoting women in tech and inspiring girls worldwide to follow their passion in engineering and science.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition duration-200 ${isActive ? "text-white font-medium" : "hover:text-[var(--mauve,#e0aaff)]"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <EmailIcon />
                <a href="mailto:ieeewiemuj@gmail.com" className="hover:text-[var(--mauve,#e0aaff)] transition duration-200">
                  ieeewiemuj@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <LocationIcon />
                <span>
                  Manipal University Jaipur,
                  <br />
                  Dehmi Kalan, Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© {currentYear} IEEE WIE MUJ. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-[var(--mauve,#e0aaff)] transition duration-200">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[var(--mauve,#e0aaff)] transition duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SiteFooter;

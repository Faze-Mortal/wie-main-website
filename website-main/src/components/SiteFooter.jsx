import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const EmailIcon = () => <i className="las la-envelope text-xl mt-1" />;
const LocationIcon = () => <i className="las la-map-marker-alt text-xl mt-1" />;

const SiteFooter = () => {
  const currentYear = 2026;
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    // Apply stagger delays once on mount
    const items = footerRef.current.querySelectorAll('.footer-item');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.08}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0,
      }
    );

    observer.observe(footerRef.current);
    
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blogs" },
  ];

  return (
    <div className={`relative z-50 w-full flex flex-col justify-end bg-[var(--dark-amethyst-2,#240046)] ${isVisible ? 'is-visible' : ''}`} ref={footerRef}>
      <style>{`
        .footer-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.0, 0.0, 0.2, 1), transform 0.6s cubic-bezier(0.0, 0.0, 0.2, 1);
        }
        .is-visible .footer-item {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      {/* Content wrapper with max-width matching other phases */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-10 pt-20 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-gray-400">
          
          {/* Col 1: Logo and Description */}
          <div className="col-span-1 lg:col-span-2 space-y-5">
            <h3 className="text-white text-2xl font-bold font-cambo footer-item">IEEE WIE MUJ</h3>
            <p className="max-w-lg text-sm leading-relaxed footer-item">
              IEEE Women in Engineering MUJ is dedicated to promoting women in tech and inspiring girls worldwide to follow their passion in engineering and science.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 footer-item">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path} className="footer-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${isActive ? "text-white font-medium" : "hover:text-[var(--mauve,#e0aaff)]"}`
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
            <h3 className="text-white text-lg font-semibold mb-4 footer-item">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex flex-col space-y-1 pb-2">
                <span className="text-white font-medium footer-item">Palakshi Sirsat</span>
                <span className="text-xs footer-item">Chairperson</span>
                <a href="tel:+916266563992" className="hover:text-[var(--mauve,#e0aaff)] transition-colors duration-200 footer-item inline-block">
                  62665 63992
                </a>
              </div>
              
              <div className="flex flex-col space-y-3">
                <a href="mailto:ieeewiemuj@gmail.com" className="hover:text-[var(--mauve,#e0aaff)] transition-colors duration-200 footer-item inline-block">
                  ieeewiemuj@gmail.com
                </a>
                <span className="flex flex-col">
                  <span className="footer-item">Manipal University Jaipur,</span>
                  <span className="footer-item">Dehmi Kalan, Jaipur, Rajasthan</span>
                </span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p className="footer-item">© {currentYear} IEEE WIE MUJ. All rights reserved.</p>
          <div className="space-x-4 footer-item">
            <a href="#" className="hover:text-[var(--mauve,#e0aaff)] transition-colors duration-200 inline-block">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[var(--mauve,#e0aaff)] transition-colors duration-200 inline-block">Terms of Service</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SiteFooter;


import { useState, useRef, useEffect } from 'react';

const tabs = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#certificates" },
];

const Header = () => {
  const [draweropen, setdraweropen] = useState(false);
  const [active, setactive] = useState("Home");

  const toggle = () => {
    setdraweropen(!draweropen);
  };

  // 🧩 Refs to handle dynamic width & position for indicator
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.name === active);
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorStyle({
        width: `${activeTab.offsetWidth}px`,
        transform: `translateX(${activeTab.offsetLeft}px)`,
      });
    }
  }, [active]);

  const handleNavClick = (e, tabName, href) => {
    e.preventDefault();
    setactive(tabName);
    setdraweropen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="relative top-0 left-0 right-0 font-inter w-full z-50 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-5 flex justify-between items-center h-20 border-b-neutral-300">
            
            {/* Logo */}
            <div className="md:text-[25px] text-xl font-bold flex items-center space-x-1">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">&lt;</span>
              <span className="text-white">Aman</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">/</span>
              <span className="text-white">Singh</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">&gt;</span>
            </div>

            {/* Desktop Navigation Tabs */}
            <div className="hidden md:flex relative bg-[#0c0c27] rounded-xl p-1 border border-zinc-700">
              {/* Highlight Indicator */}
              <div
                className="absolute top-1 bottom-1 left-0 bg-white rounded-lg transform transition-all duration-300"
                style={indicatorStyle}
              ></div>

              {tabs.map((tab, i) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  ref={(el) => (tabRefs.current[i] = el)}
                  onClick={(e) => handleNavClick(e, tab.name, tab.href)}
                  className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === tab.name ? "text-black" : "text-zinc-400"
                  }`}
                >
                  {tab.name}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="buttons space-x-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "Contact", "#contact")}
                className="hidden md:flex justify-center items-center text-white bg-gradient-to-r from-blue-500 to-cyan-500 
                hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-md"
              >
                Contact me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex justify-center items-center md:hidden px-2.5 py-1 bg-[#0a0a59] rounded-lg text-center border border-zinc-600">
              <button className="cursor-pointer" onClick={toggle}>
                {draweropen ? '✖' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {draweropen && (
            <>
              <ul className="md:hidden flex flex-col items-center px-6 space-y-3 w-full mb-3">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => handleNavClick(e, "Home", "#home")} 
                    className="text-md hover:text-zinc-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleNavClick(e, "About", "#about")} 
                    className="text-md hover:text-zinc-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    onClick={(e) => handleNavClick(e, "Education", "#education")} 
                    className="text-md hover:text-zinc-500"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    onClick={(e) => handleNavClick(e, "Skills", "#skills")} 
                    className="text-md hover:text-zinc-500"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={(e) => handleNavClick(e, "Projects", "#projects")} 
                    className="text-md hover:text-zinc-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#certificates" 
                    onClick={(e) => handleNavClick(e, "Achievements", "#certificates")} 
                    className="text-md hover:text-zinc-500"
                  >
                    Certificates
                  </a>
                </li>
              </ul>
              <div className="flex justify-center items-center md:hidden mb-4 space-x-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "Contact", "#contact")}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 
                  hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-md mb-3 mr-7"
                >
                  Contact
                </a>
                <button
                  onClick={toggle}
                  className="border border-gray-500 text-white px-4 py-2 rounded-md mb-3"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
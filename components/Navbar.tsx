export const Navbar = (
    <>
      {/* Start navbar */}
      <div className="bg-gray-100 border-green-800">
        {/* Top Contact Bar */}
        <div className="border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">
              {/* Left Side - Contact Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-800">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +40 123 456 789
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@appns.ro
                </div>
              </div>
  
              {/* Right Side - Social Media */}
              <div className="flex items-center space-x-4">
                <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
                  {/* Twitter Icon SVG */}
                </a>
                <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
                  {/* Facebook Icon SVG */}
                </a>
                <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
                  {/* Instagram Icon SVG */}
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Navigation */}
        <nav className="bg-green-700 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left section (Logo + Name) */}
              <div className="flex items-center flex-shrink-0">
                <a href="/" className="flex-shrink-0">
                  <img className="w-14 h-14" src="images/bbbbb.png" alt="APNC logo" />
                </a>
                {/* Association Name */}
                <div className="ml-4">
                  <span className="text-white text-lg font-semibold tracking-tight hidden sm:block">
                    Asociația pentru Promovarea<br className="lg:hidden" /> Nutiției Sănătoase
                  </span>
                  <span className="text-white text-sm font-semibold tracking-tight sm:hidden">
                    APNS
                  </span>
                </div>
              </div>
  
              {/* Centered Desktop Navigation */}
              <div className="hidden md:block flex-auto mx-4">
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white bg-green-600 hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Acasa</a>
                  <a href="#" className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Blog</a>
                  <a href="#" className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Webinare</a>
                </div>
              </div>
  
              {/* Right section (Language switcher + Mobile menu button) */}
              <div className="flex items-center flex-shrink-0">
                {/* Language Switcher Desktop */}
                <div className="hidden md:block">
                  <div className="flex space-x-2">
                    <button className="bg-white text-green-700 px-3 py-1 rounded-md text-sm font-medium">RO</button>
                    <button className="text-white hover:bg-green-600 px-3 py-1 rounded-md text-sm font-medium transition-colors">EN</button>
                  </div>
                </div>
  
                {/* Mobile menu button */}
                <div className="md:hidden ml-4">
                  <button type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none">
                    {/* Mobile Icons SVGs */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* End navbar */}
    </>
  );
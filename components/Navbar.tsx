export const Navbar = (
  <>
    {/* Start navbar */}
    <div className="shadow-lg drop-shadow-lg bg-green-700 border-b border-gray-100">
      {/* Top Contact Bar */}
      <div className="border-b border-green-600">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-white">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* ... */}
                </svg>
                +40 123 456 789
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* ... */}
                </svg>
                contact@appns.ro
              </div>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                {/* Twitter icon */}
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                {/* Facebook icon */}
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                {/* Instagram icon */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      {/* Switched to light background here */}
      <nav className="bg-gray-100 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section (Logo + Name) */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex-shrink-0">
                <img className="w-14 h-14" src="images/bbbbb.png" alt="APNC logo" />
              </a>
              {/* Association Name */}
              <div className="ml-4">
                <span className="text-green-700 text-lg font-semibold tracking-tight hidden sm:block">
                  Asociația pentru Promovarea<br className="lg:hidden" /> Nutiției Sănătoase
                </span>
                <span className="text-green-700 text-sm font-semibold tracking-tight sm:hidden">
                  APNS
                </span>
              </div>
            </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:block flex-auto mx-4">
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-green-700 hover:bg-green-200 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Acasa
                </a>
                <a
                  href="#"
                  className="text-green-700 hover:bg-green-200 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-green-700 hover:bg-green-200 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Webinare
                </a>
              </div>
            </div>

            {/* Right section (Language switcher + Mobile menu button) */}
            <div className="flex items-center flex-shrink-0">
              {/* Language Switcher Desktop */}
              <div className="hidden md:block">
                <div className="flex space-x-2">
                  <button className="bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium">
                    RO
                  </button>
                  <button className="text-green-700 hover:bg-green-200 px-3 py-1 rounded-md text-sm font-medium transition-colors">
                    EN
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden ml-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:bg-green-200 focus:outline-none"
                >
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

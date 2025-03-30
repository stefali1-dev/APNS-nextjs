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
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
            <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
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
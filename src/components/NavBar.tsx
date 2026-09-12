import { FOCUS_RING, GRADIENT_BG, GRADIENT_TEXT } from "../Theme/Theme";

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact'] as const;
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${GRADIENT_BG} text-sm font-bold text-white`}>
        DS
      </span>
      <span className="text-lg font-extrabold tracking-tight">
        Dev<span className={GRADIENT_TEXT}>Stack</span>
      </span>
    </div>
  );
}

const NavBar = () => {

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[42px_1fr_auto] items-center px-4 sm:px-6 lg:px-8 md:flex md:justify-between">
          {/* Left: hamburger (mobile) / logo (desktop) */}
            <div className="flex items-center justify-start md:shrink-0">
                <button
                    type="button"
                    className={`${FOCUS_RING} -ml-2 rounded-md p-2 text-gray-700 md:hidden`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>
                <div className="hidden md:block">
                    <Logo />
                </div>
            </div>

            {/* Center: logo (mobile) / nav links (desktop) */}
            <div className="flex items-center justify-center">
                <div className="md:hidden">
                    <Logo />
                </div>
                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                    <li key={link}>
                        <button
                            type="button"
                            onClick={() => setActiveLink(link)}
                            className={`${FOCUS_RING} text-sm font-medium transition-colors ${
                                activeLink === link ? 'text-pink-600' : 'text-gray-700 hover:text-gray-900'
                            }`}
                            >
                            {link}
                        </button>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Right: auth buttons */}
            <div className="flex items-center justify-end gap-2 sm:gap-3">
                <button type="button" className={`${FOCUS_RING} text-xs font-medium text-gray-700 hover:text-gray-900 sm:text-sm`}>
                    Sign In
                </button>
                <button
                    type="button"
                    className={`${FOCUS_RING} rounded-full ${GRADIENT_BG} px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-pink-200 transition-transform hover:scale-[1.03] sm:px-4 sm:py-1.5 sm:text-sm`}
                >
                    Sign Up
                </button>
            </div>
        </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1 ">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveLink(link);
                    setIsMenuOpen(false);
                  }}
                  className={`${FOCUS_RING} block w-full rounded-md px-3 py-2 text-left text-sm font-medium ${
                    activeLink === link ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <button type="button" className={`${FOCUS_RING} block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50`}>
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar

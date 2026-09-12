import { FOCUS_RING, GRADIENT_BG, GRADIENT_TEXT } from "../Theme/Theme";

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
];

const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn'] as const;

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Desktop layout stays exactly the same */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.8fr_0.8fr_0.7fr]">
          {/* Brand */}
          <div className="max-sm:text-center">
            <div className="flex items-center gap-2 max-sm:justify-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${GRADIENT_BG} text-sm font-bold text-white`}
              >
                DS
              </span>

              <span className="text-lg font-extrabold tracking-tight">
                Dev<span className={GRADIENT_TEXT}>Stack</span>
              </span>
            </div>

            <p className="mt-4 text-sm  leading-relaxed text-gray-500 max-sm:mx-auto max-sm:max-w-155">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-4 text-sm font-medium text-gray-600 max-sm:justify-center max-sm:gap-0">
              {SOCIALS.map((social, index) => (
                <div key={social} className="flex items-center">
                  <a
                    href="#"
                    className={`${FOCUS_RING} hover:text-gray-900`}
                  >
                    {social}
                  </a>

                  {index < SOCIALS.length - 1 && (
                  <span className="hidden px-4 text-gray-500 max-sm:inline max-sm:px-5">
                   •
                  </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="max-sm:hidden">
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Product
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5">
              {LINK_GROUPS[0].links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`${FOCUS_RING} text-sm text-gray-500 hover:text-gray-900`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="max-sm:hidden">
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Company
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5">
              {LINK_GROUPS[1].links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`${FOCUS_RING} text-sm text-gray-500 hover:text-gray-900`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="max-sm:hidden">
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5">
              {LINK_GROUPS[2].links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`${FOCUS_RING} text-sm text-gray-500 hover:text-gray-900`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex items-center justify-between gap-3 border-t border-gray-100 pt-6 text-sm text-gray-400 max-sm:mt-12 max-sm:pt-6">
          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex shrink-0 gap-2">
            <a
              href="#"
              className={`${FOCUS_RING} hover:text-gray-700`}
            >
              Privacy
            </a>

            <a
              href="#"
              className={`${FOCUS_RING} hover:text-gray-700`}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
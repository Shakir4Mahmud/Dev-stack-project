

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        
          <div>
            <div className="mb-5 flex items-center gap-2">
              <img
                src="./B14-A05-DevStack/assets/DS-logo.png"
                alt="Dev Stack logo"
                className="h-8 w-8"
              />

              <h2 className="text-lg font-bold text-gray-900">
                Dev <span className="text-pink-600">Stack</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm text-gray-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <a href="#" className="block hover:text-pink-600">
                Home
              </a>
              <a href="#" className="block hover:text-pink-600">
                Technologies
              </a>
              <a href="#" className="block hover:text-pink-600">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <a href="#" className="block hover:text-pink-600">
                About
              </a>
              <a href="#" className="block hover:text-pink-600">
                Contact
              </a>
              <a href="#" className="block hover:text-pink-600">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <a href="#" className="block hover:text-pink-600">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-pink-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-600">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

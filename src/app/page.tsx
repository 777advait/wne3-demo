import Container from "@/components/Container";

export default function HomePage() {
  return (
    <main>
      <Container className="py-12">
        <div className="space-y-4">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text and Buttons */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="font-inter bg-gradient-to-b from-foreground to-background/0 bg-clip-text text-4xl md:text-6xl font-bold leading-[150%] text-transparent animate__animated animate__fadeInUp">
                Modern ecommerce with a twist
              </h1>
              <p className="text-xl text-muted-foreground animate__animated animate__fadeInUp animate__delay-1s">
                Experience AI-powered shopping like never before
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate__animated animate__fadeInUp animate__delay-2s">
                <button className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                  Join Waitlist
                </button>
                <button className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground/10 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative animate__animated animate__fadeIn animate__delay-1s">
              <img
                src="https://www.wne3.com/assets/merchandise%20store-EXOmCLaO.svg"
                alt="ecommerce illustration"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>

          {/* Contact Section */}
          <section id="contact" className="py-12">
            <Container>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Column: Text and Illustration */}
                  <div className="text-center md:text-left space-y-6">
                    <h2 className="font-inter bg-gradient-to-b from-foreground to-background/0 bg-clip-text text-4xl md:text-6xl font-bold leading-[150%] text-transparent animate__animated animate__fadeInUp">
                      Get Early Access
                    </h2>
                    <p className="text-xl text-muted-foreground animate__animated animate__fadeInUp animate__delay-1s">
                      Join the waitlist and be among the first to experience
                      AI-powered ecommerce
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <img
                          src="https://www.wne3.com/assets/prompt-EidmSCsU.svg"
                          alt="Location"
                          className="w-6 h-6 mr-3"
                        />
                        <p className="text-lg text-muted-foreground">
                          Vishakapatnam, Andhra Pradesh, India
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="https://www.wne3.com/assets/receive-DdTMkGWD.svg"
                          alt="Email"
                          className="w-6 h-6 mr-3"
                        />
                        <p className="text-lg text-muted-foreground">
                          technology@wne3.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Form */}
                  <div className="bg-neutral-800 p-8 rounded-xl shadow-lg animate__animated animate__fadeInRight">
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-foreground/50"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-foreground/50"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-foreground/50"
                          placeholder="Enter your email"
                        />
                      </div>

                      <button
                        type="button"
                        className="w-full bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors"
                      >
                        Join Waitlist
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Footer Section */}
          <footer id="footer">
  <div className="max-w-[1800px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Column 1: Brand Info */}
        <div className="animate__animated animate__fadeIn">
          <h3 className="text-xl font-bold mb-4">WNE3</h3>
          <p className="text-muted-foreground mb-4">
            Revolutionizing ecommerce with AI-powered personalization
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#hero"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-muted-foreground">
              Vishakapatnam, Andhra Pradesh, India
            </li>
            <li className="text-muted-foreground">
              technology@wne3.com
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="animate__animated animate__fadeIn animate__delay-3s">
          <h3 className="text-lg font-semibold mb-4">Join Newsletter</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-800 pt-8 mt-8">
        <div className="text-center text-muted-foreground">
          <p>© 2024 WNE3 Technologies Private Limited</p>
          <p className="mt-2">All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
      </Container>
    </main>
  );
}
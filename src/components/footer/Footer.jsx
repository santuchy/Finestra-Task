import FinestraBg from "../../assets/Resource/Finestra.png";  
import FooterLogo from "../../assets/Resource/Logo.png";    

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[linear-gradient(to_top_right,#d9e9fa,#ffd5ff,#ffd9c1)] pt-28 pb-16 rounded-t-[40px] overflow-hidden">

      {/* Background large text image */}
      <img
        src={FinestraBg}
        alt="Finestra Background"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-40 pointer-events-none select-none"
      />

      {/* Main content */}
      <div className="relative max-w-11/12 mx-auto px-6 z-10">

        {/* Top area */}
        <div className="flex flex-col lg:flex-row justify-between gap-20">

          {/* Left title */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[56px] md:text-[74px] font-semibold text-black leading-tight">
              Let’s Sit &Talk
            </h1>

            {/* Address */}
            <div className="mt-16">
              <h3 className="text-xl font-medium text-black mb-4">Address</h3>

              <p className="text-gray-700 font-semibold leading-relaxed">
                475 Cherry Dr, Troy, Michigan 48083<br />
                United States ( (248) 823-3200 )
              </p>
            </div>
          </div>

          {/* Right email and menus */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">

            {/* Email input line */}
            <div>
              <p className="text-gray-400 text-4xl mb-2">Enter Your Email</p>

              <div className="border-b border-gray-400 w-full pb-3 flex items-center justify-between">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-lg placeholder-gray-500"
                  placeholder=""
                />
                <span className="text-2xl">↗</span>
              </div>
            </div>

            {/* Menu columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

              {/* Company */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>About</li>
                  <li>Pricing</li>
                  <li>Jobs</li>
                  <li>Blog</li>
                </ul>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>Sales Software</li>
                  <li>Marketplace</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              {/* Help center */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Help Center</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>Community</li>
                  <li>Knowledge Base</li>
                  <li>Academy</li>
                  <li>Support</li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="relative mt-28 flex flex-col md:flex-row items-center gap-8 justify-between">

          

          {/* copyright */}
          <p className="text-gray-700 text-sm mt-6">
            © 2024 Copyright By Sansbro - Finestra
          </p>

          {/* Logo */}
          <img
            src={FooterLogo}
            alt="Footer Logo"
            className="pl-15 rounded-full"
          />
        

        {/* Bottom links */}
          <div className="flex flex-wrap gap-10 text-gray-700 text-sm">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Legal</span>
            <span>Recalls</span>
          </div>
          </div>

      </div>
    </footer>
  );
}

import DashboardMain from "../../assets/Resource/Finance dashboard 1.png";
import DashboardMobile from "../../assets/Resource/iPhone 13 mini - 13.png";
import Cursor1 from "../../assets/Resource/fluent_cursor-20-filled (1).png"
import Cursor2 from "../../assets/Resource/fluent_cursor-20-filled.png"

export default function Hero() {
  return (
    <div className="w-full bg-white flex justify-center pb-10">
      {/* WHITE BACKGROUND OUTSIDE */}
      <section
        className="
          relative 
          w-[95%] md:w-[92%] lg:w-[90%] 
          bg-[linear-gradient(to_top_right,#deebf2,#f8bed3,#f7d0c4,#f3f3f3)]
          rounded-3xl
           md:px-10 lg:px-20
          shadow-xl
        "
      >
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Left Badge */}
          <div className="absolute left-6 md:left-20 top-12 flex-1 items-center gap-1">
            <div className="pl-9"><img src={Cursor1} alt="" /></div>
            <div className="bg-yellow-200 text-black text-sm px-4 py-1 rounded-full shadow">
              Finance
            </div>
          </div>

          {/* Right Badge */}
          <div className="absolute right-6 md:right-20 top-12 flex-1 items-center gap-1">
            <div><img src={Cursor2} alt="" /></div>
            <div className="bg-red-200 text-black text-sm px-4 py-1 rounded-full shadow">
              Business
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold  text-black mt-10">
            Make Your Money <br /> Work Harder
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-lg">
            Initiating a business venture may appear overwhelming, yet our forte
            lies in simplifying the entire process for you.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="bg-black text-white px-7 py-3 rounded-full text-lg hover:opacity-90 transition">
              Get Started Free
            </button>

            <button className="border border-black text-black px-7 py-3 rounded-full text-lg hover:bg-gray-100 transition">
              Watch A Demo
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-800">
            <span className="text-red-500 text-xl">★</span>
            <span className="font-medium">Trustpilot</span>

            <div className="flex text-red-500 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <span className="text-gray-600 ml-2">3800+ 5 Stars</span>
          </div>
        </div>

        {/* Main dashboard */}
    <div className="relative mt-5 flex justify-center ">
        {/* BACKGROUND DASHBOARD */}
        <img
            src={DashboardMain}
            alt="Dashboard Main"
            className="
            w-[85%] md:w-[70%] lg:w-[60%]
            rounded-4xl shadow-3xl border-20 border-b border-white/40"
        />
        {/* 2nd dashboard front mobile*/}
        <img
            src={DashboardMobile}
            alt="Dashboard Mobile"
            className="
            absolute 
            top-[-98px]
            right-[70%] 
            top-x right-x
            translate-x-[180%]
            w-44 md:w-60 lg:w-120 h-128
            drop-shadow-2xl"
        />
        </div>

      </section>
    </div>
  );
}

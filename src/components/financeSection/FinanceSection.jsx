import FinanceCard from "../../assets/Resource/finance.png";
import Img1 from "../../assets/Resource/Img1.png"
import Img2 from "../../assets/Resource/Img2.png"
import inline from "../../assets/Resource/Line 601.png"

export default function FinanceSection() {
  return (
    <section className="w-full  py-20">
      <div className="max-w-[90%] mx-auto px-6 bg-[#F9F9F9] rounded-3xl p-10">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-25">

          {/* Left image */}
          <div className="bg-[#EBEBEB8F] p-10 rounded-3xl shadow-sm border border-gray-200">
            <img
              src={FinanceCard}
              alt="Finance Card"
              className="w-[380px] md:w-[420px] lg:w-[433px] rounded-2xl"
            />
          </div>

          {/* Right side text */}
          <div className="max-w-xl">
            <span className="bg-red-100 text-black px-3 py-1 rounded-full text-xs font-medium">
              Account Transfer
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black mt-4">
              Maximizing <br /> Efficiency In Daily <br /> Finance
            </h1>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              See your whole financial picture in one place, alongside a smarter approach
              to investing and real human.
            </p>

            <div className="flex items-center gap-6 mt-8">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
              <button className="bg-red-400 text-white px-8 py-3 rounded-full text-lg hover:bg-red-500 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="h-24" />

        {/* Bottom section (Key Reasons) */}
        <div className="flex flex-col lg:flex-row w-full justify-around gap-16">

          {/* Left title */}
          <div className=" ">
            <h1 className="lg:text-6xl md:text-5xl font-bold leading-tight text-black">
              Key Reasons To <br /> Choose Us
            </h1>

            
          </div>
          <div>
                <p className="mt-5 text-gray-700 text-xl leading-relaxed max-w-md">
              Whatever your customers’ payment <br /> preferences, we’ll help you find the right <br /> solution for your business.
            </p>
            </div>
          </div>

          {/* Bottom stats grid */}
          <div className=" grid-cols-1 md:grid-cols-3 gap-20 w-3/4 mx-auto mt-15 flex justify-around">

            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <span className="text-red-400 text-sm font-medium">🔴 Customers</span>
              <h2 className="text-6xl font-bold mt-3">20K+</h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                In 38 Countries, We Work As One Global Team To Help Clients
              </p>
            </div>
            <div>
                <img src={inline} alt="" className="h-40 w-1 pt-5"/>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <span className="text-red-400 text-sm font-medium">🟠 Impact</span>
              <h2 className="text-6xl font-bold mt-3">98%</h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                We Have Worked With 89% Of The Global 500 Companies.
              </p>
            </div>
            <div>
                <img src={inline} alt="" className="h-40 w-1 pt-5"/>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <span className="text-red-400 text-sm font-medium">🟡 Experience</span>
              <h2 className="text-6xl font-bold mt-3">89%</h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                We Started With A Rebellious Mindset And Set Ourselves The Challenge
              </p>
            </div>
          </div>


        </div>
      
    </section>
  );
}

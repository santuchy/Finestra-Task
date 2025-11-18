import ExpenseImg from "../../assets/Resource/Frame 1707482047.png";

export default function ManageSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[90%] mx-auto">

        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-around gap-160">
          {/* Left Title */}
          <div className="justify-start">
            <h1 className="text-6xl md:text-6xl font-bold leading-tight text-black">
              Manage <br /> Money Wisely
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl text-xl">
              Master the Art of Financial Management: Strategies and Tools to Optimize
              Your Budget, Build Wealth, and Secure a Stable Financial Future
            </p>
          </div>

          {/* Right button */}
          <div className="justify-end flex flex-col  lg:items-end gap-4 pt-5">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg">
              Get Started Free
            </button>
            <button className="text-gray-700 font-medium hover:underline">
              Explore More About Us
            </button>
          </div>
        </div>

        {/* Cards section */}
        <div className="mt-10 flex flex-col lg:flex-row gap-10 justify-around">

          {/* Left side (Learn More + Expense Card) */}
          <div className="w-full lg:w-2/4  gap-6">

            {/* Left small card */}
            <div className="bg-[#F6F6F6] rounded-3xl border border-gray-200 p-6 shadow-sm flex justify-between">

              <div>
                <button className="border border-red-300 text-red-400 px-6 py-2 rounded-full text-xl font-medium hover:bg-red-50 transition">
                Learn More
              </button>
              <h3 className="mt-10 text-3xl font-semibold text-black leading-snug">
                Manage Your <br /> Money Wisely
              </h3>
              <p className="mt-2 text-gray-500 text-xl">
                Master the Art of Financial <br /> Management
              </p>
              </div>

              <div className="">
                <img
                src={ExpenseImg}
                alt="Expense Chart"
                className="w-488px h-367px mt-5 rounded-xl bg-[#F6F6F6]"
              />
              </div>
              
            </div>
          </div>

          {/* Right side quick transfer */}
          <div className="w-full lg:w-1/3 bg-[#F6F6F6] rounded-3xl border border-gray-200 p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-black">Quick Transfer</h3>

              {/* Tabs */}
              <div className="flex items-center gap-2">
                <button className="text-gray-600 text-sm">All</button>
                <button className="bg-red-200 text-black text-sm px-4 py-1 rounded-full">
                  Contacts
                </button>
              </div>
            </div>

            {/* Avatars */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-xl">
                  +
                </div>
                <span className="text-sm text-gray-500 mt-1">Add New</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-500 mt-1">Albert Sky</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-500 mt-1">Edwer San</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-500 mt-1">Erwan Why</span>
              </div>

              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 text-lg">
                →
              </div>
            </div>

            {/* Bottom Send button */}
            <div className="flex items-center justify-between mt-10">
              <h2 className="text-4xl font-semibold text-gray-800">$349.00</h2>

              <button className="px-10 py-3 bg-red-400 text-white rounded-full text-lg hover:bg-red-500 transition">
                Send
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

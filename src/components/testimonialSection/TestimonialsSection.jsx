import EmojiLeft from "../../assets/Resource/emoji1.png";
import EmojiRight from "../../assets/Resource/emoji2 (1).png";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-24 bg-gradient-to-b from-[#ffffff] via-[#fef3ee] to-[#ffffff] -mt-10">
      <div className="max-w-[1300px] mx-auto px-6 relative">
        
        {/* Left emoji */}
        <img
          src={EmojiLeft}
          alt="emoji-left"
          className="absolute left-0 top-24 w-22 opacity-100 hidden md:block"
        />

        {/* Right emoji */}
        <img
          src={EmojiRight}
          alt="emoji-right"
          className="absolute right-0 top-24 w-22  opacity-100 hidden md:block"
        />

        {/* Top text*/}
        <div className="flex justify-center gap-10 text-black text-lg">
          <button className="hover:text-black transition">Our Customers</button>
          <button className="hover:text-black transition">Talk About IT</button>
          <button className="hover:text-black transition">Better Than Us</button>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mt-6 leading-tight">
          Hear What Customer <br /> Have To Say
        </h1>

        {/* subtext */}
        <p className="text-gray-500 text-center max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
          See Your Whole Financial Picture In One Place, Alongside <br />
          A Smarter Approach To Investing And Real Human.
        </p>

        {/* Grid of testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          {/* Card 1 */}
          <div className="bg-[#F0E6E0] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#C89A7E] rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">Megan</h3>
                <p className="text-gray-600 text-sm">Student at New York University</p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
              “This cup is fantastic! It is so well insulated. I live in the desert,
              and it keeps my cold drinks cold in the heat”
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F0E6E0] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">Jerry Tang</h3>
                <p className="text-gray-600 text-sm">Recent graduate, Marketing at Sweatpals</p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
              “Joining Mate community is the best thing I have ever done.
              The projects I worked on gave me the experience I needed
              in content Marketing”
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F0E6E0] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">Jerry Tang</h3>
                <p className="text-gray-600 text-sm">Recent graduate, Marketing at Sweatpals</p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
              “I love the color. It’s even better in person.
              I love that iron flask gives you multiple lids as well.
              It’s sturdy.”
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F0E6E0] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">David K.</h3>
                <p className="text-gray-600 text-sm">
                  Recent graduate, Marketing at Sweatpals
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
              “I love the color. It’s even better in person.
              I love that iron flask gives you multiple lids as well.
              It’s sturdy. It is kept my cold beverages clothes for
              way longer than I had expected it to.”
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F0E6E0] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">Megan</h3>
                <p className="text-gray-600 text-sm">Student at New York University</p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
              “I absolutely love this cup. I’ve bought several different brands
              and there’s always something I end up not liking about them.
              This one checks all of the boxes.”
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#F0E6E0] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">David K.</h3>
                <p className="text-gray-600 text-sm">Recent graduate</p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed text-[15px]">
              “I absolutely love this cup. I’ve bought several different brands
              and there’s always something“
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

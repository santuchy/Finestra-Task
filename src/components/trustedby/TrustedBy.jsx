import Logo1 from "../../assets/Resource/Logomark.png";  
import Logo2 from "../../assets/Resource/Logomark (1).png";  
import Logo3 from "../../assets/Resource/Logomark (2).png";  
import Logo4 from "../../assets/Resource/Logomark (3).png";  
import Logo5 from "../../assets/Resource/Logomark (4).png";  
import Logo6 from "../../assets/Resource/Logomark (5).png";  

export default function TrustedBy() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-10/12 mx-auto">

        {/* TITLE */}
        <h3 className="text-center text-gray-700 font-medium text-2xl mb-10">
          Laved by 25 million+ users
        </h3>

        {/* LOGO ROW */}
        <div className="flex items-center justify-between gap-10 md:gap-16 lg:gap-25 opacity-60">
          {/* Single Logo Item */}
          <div className="flex items-center gap-2">
            <img src={Logo1} alt="logo1" className="w-10 h-10 object-contain" />
            <span className="text-gray-500 font-medium text-2xl">Circooles</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logo2} alt="logo2" className="w-10 h-10 object-contain" />
            <span className="text-gray-500 font-medium text-2xl">Quotient</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logo3} alt="logo3" className="w-10 h-10 object-contain" />
            <span className="text-gray-500 font-medium text-2xl">Hourglass</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logo4} alt="logo4" className="w-10 h-10 object-contain" />
            <span className="text-gray-500 font-medium text-2xl">Command+R</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logo5} alt="logo5" className="w-10 h-10 object-contain" />
            <span className="text-gray-500 font-medium text-2xl">Catalog</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logo6} alt="logo6" className="w-10 h-10 object-contain" />
            <span className="text-gray-500 font-medium text-2xl">Layers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

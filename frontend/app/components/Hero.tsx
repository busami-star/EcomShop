import HeroProducts from "./HeroProducts";
import HeroCalltoAction from "./HeroCalltoAction";
import HeroFeatures from "./HeroFeatures";

const Hero = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 blur-3xl"></div> */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <HeroFeatures />
        <HeroProducts />
        <HeroCalltoAction />

      </div>
    </section>
  );
};

export default Hero;

import PortPhoto from "./HeroComps/PortPhoto";
import PortTitle from "./HeroComps/PortTitle";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-[60px] bg-woodland-muted h-screen flex items-center justify-center"
    >
      <div className="hidden md:block ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-4 mt-10 ">
            <article className="col-span-1 scale-125">
              <PortPhoto />
            </article>

            <article className="col-span-1 p-4 md:space-y-16 text-woodland-text md:my-auto">
              <PortTitle />
            </article>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="p-4 space-y-4 text-woodland-text space-y-8">
            <PortPhoto />
            <PortTitle />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;

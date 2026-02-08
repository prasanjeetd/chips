import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none lg:min-h-screen lg:h-full pt-10 lg:pt-0 md:mt-20 xl:mt-0 w-full text-center lg:text-left">
          <FlavorTitle />
        </div>
        <div className="h-full mt-10 lg:mt-0">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;

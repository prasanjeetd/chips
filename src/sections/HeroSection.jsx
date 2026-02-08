import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            <img
              src="/images/hero-bg-tablet.png"
              className="absolute inset-0 size-full object-cover"
            />
            {/* Light overlay to tone down the background */}
            <div
              className="absolute inset-0 bg-milk/40"
              style={{ backgroundColor: 'rgba(250, 234, 222, 0.4)' }}
            />
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto md:scale-125 lg:scale-150"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1
              className="hero-title"
              style={{
                color: "#fff",
                textShadow: "4px 9px 10px black",
                ...(isMobile && { margin: "40px 0" })
              }}
            >
              Freaking Delicious
            </h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div
              className="hero-subtitle"
              style={{
                backgroundColor: "#faeade",
                borderTop: "2px solid black",
                borderBottom: "2px solid black",
              }}
            >
              <h1 style={{
                color: "black",
                textShadow: "none",
                ...(isMobile && { lineHeight: "1.0" })
              }}>
                UNSTOPPABLE CRUNCH{" "}
              </h1>
            </div>
          </div>

          <h2>
            Experience the ultimate crunch with SPYLT Chips: Shatter your
            cravings and fuel your focus with every perfectly seasoned bite.
          </h2>

          <div className="hero-button">
            <p>Grab a Bag</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

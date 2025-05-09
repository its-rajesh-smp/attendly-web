import { Button } from "@/components/ui/Button";
import { authNavigationPaths } from "@/constants/auth.const";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router";

function HeroSection() {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  return (
    <section id="hero" className="relative">
      <img
        src="https://startupbricks.in/_next/static/images/dot-pattern-0a53c4b4aea3ed3e3d957ec8fe96cb1c.svg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="w-full bg-gradient-to-r from-purple-700 to-blue-600 h-[500px] md:py-0 py-10  md:flex items-center">
        <div className="container flex flex-col justify-center items-center mx-auto px-4 z-10 relative">
          <div className="max-w-3xl flex flex-col justify-center items-center">
            <div className="h-full w-full flex lg:justify-center items-center  ">
              <img src="/favicon.png" className="w-10 h-10" />
              <h1 className="font-bold text-3xl ml-3 text-white">Attendly</h1>
            </div>

            <h1 className="text-6xl lg:flex justify-center items-center flex-col font-bold text-white mb-6">
              <span className="block">We Make</span>
              <span className="block">
                Events <span className="text-yellow-300">Happen</span>
              </span>
            </h1>

            <div className="flex flex-wrap flex-col md:flex-row w-full justify-center gap-3">
              {!isAuthenticated && (
                <Link to={authNavigationPaths.REGISTER}>
                  <Button
                    className="bg-pink-500  max-w-xs hover:bg-pink-600 text-white"
                    size="lg"
                  >
                    Join Now
                  </Button>
                </Link>
              )}

              <a href="#current-events">
                <Button
                  variant="outline"
                  className="bg-white/10   max-w-2xs  text-white  border-white"
                  size="lg"
                >
                  Explore Events
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

export default HeroSection;

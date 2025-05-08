import { Button } from "@/common/components/UI/Button";
import { Link } from "react-router";

function LeftPanel() {
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-white animate-fade-in bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="max-w-md text-center">
        <div className="mb-4 flex items-center justify-center">
          <img src="/favicon.png" className="w-10 h-10" />
          <h1 className="ml-2 text-2xl font-bold">Attendly</h1>
        </div>
        <h2 className="text-5xl font-bold mb-4">We Make</h2>
        <h2 className="text-5xl font-bold mb-6">
          Events <span className="text-amber-300">Happen</span>
        </h2>
        <p className="mb-8 text-white/80">
          Join Attendly today and discover amazing events happening around you.
          From concerts to conferences, we've got you covered.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" className="bg-white/10 border-white/20 ">
            <Link to="/">Explore Events</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;

import { Button } from "@/common/components/UI/Button";

function LeftPanel() {
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-white animate-fade-in bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="max-w-md text-center">
        <div className="mb-4 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
            A
          </div>
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
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            Explore Events
          </Button>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white border-none">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;

import { Button } from "@/common/components/UI/Button";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className=" relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative">
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
                <Button
                  className="bg-pink-500  max-w-xs hover:bg-pink-600 text-white"
                  size="lg"
                >
                  <Link to="/create-account">Join Now</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10  max-w-2xs  text-white hover:bg-white/20 border-white"
                  size="lg"
                >
                  <Link to="/">Explore Events</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <img
                src="/src/assets/gibli-event-image.jpg"
                alt="Attendly Events"
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Discover Amazing Events
              </h2>
              <p className="text-gray-600 mb-6">
                Attendly helps you discover and join the most exciting events
                happening around you. From concerts and workshops to conferences
                and meetups, we've got you covered!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <CalendarDays className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Easy RSVP</h3>
                    <p className="text-sm text-gray-500">
                      Quick one-click RSVP to any event
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <MapPin className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location Based</h3>
                    <p className="text-sm text-gray-500">
                      Find events near you easily
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Users className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Community</h3>
                    <p className="text-sm text-gray-500">
                      Connect with like-minded people
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link to="/create-account">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 lg:px-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our most popular upcoming events and connect with amazing
              people from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                <img
                  className="w-full h-full object-cover absolute"
                  src="/src/assets/webdev-summit.jpg"
                  alt="Event 1"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-700">
                  Tech Conference
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Web Development Summit
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the latest trends in web development from industry
                  experts.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">June 15, 2025</span>
                  <Button variant="outline" size="sm">
                    RSVP
                  </Button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 relative">
                <img
                  className="w-full h-full object-cover absolute"
                  src="/src/assets/music.jpg"
                  alt="Event 2"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-pink-700">
                  Music Festival
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Summer Music Fest</h3>
                <p className="text-gray-600 mb-4">
                  Three days of amazing music performances and art
                  installations.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    July 10-12, 2025
                  </span>
                  <Button variant="outline" size="sm">
                    RSVP
                  </Button>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-600 relative">
                <img
                  className="w-full h-full object-cover absolute"
                  src="/src/assets/ui-ux.jpg"
                  alt="Event 3"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-orange-700">
                  Workshop
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  UX Design Masterclass
                </h3>
                <p className="text-gray-600 mb-4">
                  Intensive workshop on creating delightful user experiences.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">August 5, 2025</span>
                  <Button variant="outline" size="sm">
                    RSVP
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join Exciting Events?
            </h2>
            <p className="mb-8 text-white/80">
              Create your account now to discover and RSVP to amazing events
              happening around you. Join our community of event enthusiasts
              today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-white text-purple-700 hover:bg-white/90"
                size="lg"
              >
                <Link to="/create-account">Create Account</Link>
              </Button>
              <Button
                className="bg-pink-500 hover:bg-pink-600 text-white"
                size="lg"
              >
                <Link to="/create-account">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-5 md:px-20">
          <div className="flex flex-col gap-4 md:flex-row justify-between ">
            <div className="mb-6 w-full flex flex-col  justify-start  md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Attendly
                </span>
              </Link>
              <p className="text-gray-500 mt-2">Your ultimate event platform</p>
            </div>
            <div className="flex w-full justify-between md:justify-end flex-wrap gap-8">
              <div>
                <h4 className="font-medium mb-3">Navigation</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link to="/" className="hover:text-purple-600">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-purple-600">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create-account"
                      className="hover:text-purple-600"
                    >
                      Create Account
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-purple-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t text-center text-gray-500 text-sm">
            <p>© 2025 Attendly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

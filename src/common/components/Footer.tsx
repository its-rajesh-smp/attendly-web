import { logout } from "@/pages/auth/reducers/auth.reducer";
import { Link } from "react-router";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

function Footer() {
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();
  return (
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
                  <a href="#hero" className="hover:text-purple-600">
                    Home
                  </a>
                </li>
                <li>
                  {isAuthenticated ? (
                    <span
                      onClick={() => dispatch(logout())}
                      className="hover:text-purple-600 cursor-pointer"
                    >
                      Log Out
                    </span>
                  ) : (
                    <Link to="/register" className="hover:text-purple-600">
                      Register
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link to="/privacy" className="hover:text-purple-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/tc" className="hover:text-purple-600">
                    Terms of Service
                  </Link>
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
  );
}

export default Footer;

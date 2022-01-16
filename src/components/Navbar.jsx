import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-300">
      <div className="flex justify-between items-center p-2 space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl dark:bg-gray-500 dark:text-gray-900 font-bold bg-blue-500 text-white py-1 px-2 rounded-full">
            Google 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-lg dark:bg-gray-500 dark:text-gray-900 font-semibold bg-white border rounded-full px-2 hover:shadow-lg py-1"
        >
          {darkTheme ? '🌞Light' : '🌜Dark'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;

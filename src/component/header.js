import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header bg-black">
      <div className="nav max-w-screen-xl mx-auto w-11/12 py-4 flex justify-between">
        <h1 className="tw-text-center text-white text-2xl font-black font-serif cursor-pointer">
          MJ's BLOG
        </h1>
        <Link to="/writePage">
          <button
            type="button"
            className="searchBtn text-white font-300 border border-white px-3 rounded-md"
          >
            글쓰기
          </button>
        </Link>
      </div>
      {/* navs */}
    </header>
  );
}

export default Header;

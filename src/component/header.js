import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header bg-black">
      <div className="nav max-w-screen-xl mx-auto w-11/12 py-4 flex justify-between">
        <h1
          className="tw-text-center text-white text-2xl font-black font-serif cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          MJ's BLOG
        </h1>
        <button
          type="button"
          className="searchBtn text-white font-300 border border-white px-3 rounded-md"
          onClick={() => {
            navigate("/writePage");
          }}
        >
          글쓰기
        </button>
      </div>
      {/* navs */}
    </header>
  );
}

export default Header;

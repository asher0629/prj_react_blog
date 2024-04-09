import { useNavigate, useLocation } from "react-router-dom";
import { getToken, removeToken } from "../utils/tokenUtils";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isWritepage = location.pathname === "/write";
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
        <div className="flex">
          {getToken() ? (
            <>
              <button
                type="button"
                className="searchBtn text-white font-300 border border-white px-3 rounded-md"
                onClick={() => {
                  removeToken();
                  window.location.reload();
                }}
              >
                로그아웃
              </button>
              {isWritepage ? (
                <></>
              ) : (
                <button
                  type="button"
                  className="ml-2 searchBtn text-white font-300 border border-white px-3 rounded-md"
                  onClick={() => {
                    navigate("/write");
                  }}
                >
                  글쓰기
                </button>
              )}
            </>
          ) : (
            <button
              type="button"
              className="searchBtn text-white font-300 border border-white px-3 rounded-md"
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </button>
          )}
        </div>
      </div>
      {/* navs */}
    </header>
  );
}

export default Header;

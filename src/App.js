import "./App.css";
import Pagination from "./component/pagination";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <div className="App">
      <div className="w-full h-full min-h-screen">
        <header className="header bg-black">
          <div className="nav max-w-screen-xl mx-auto w-11/12 py-4 flex justify-between">
            <h1 className="tw-text-center text-white text-2xl font-black font-serif cursor-pointer">
              MJ's BLOG
            </h1>
            <button
              type="button"
              className="searchBtn text-white font-300 border border-white px-3 rounded-md"
            >
              글쓰기
            </button>
          </div>
          {/* navs */}
        </header>

        <div className="listSection">
          <ul className="listWrap max-w-screen-xl mx-auto w-11/12 py-10 flex flex-col space-y-3">
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
            <li className="list border border-black py-3 px-6 cursor-pointer">
              <div className="flex justify-between">
                <span className="listCategory text-sm">카테고리</span>
                <p className="text-sm mr-3 text-zinc-500">2024-03-17</p>
              </div>
              <h4 className="listTitle font-black mb-2 text-lg mt-4">글제목</h4>
            </li>
          </ul>
        </div>
        {/* list */}

        <Pagination />
        <WritePage />
      </div>
    </div>
  );
}

export default App;

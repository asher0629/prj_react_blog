import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [canSave, setCanSave] = useState(false);

  useEffect(() => {
    if (
      title === "" || title.length <= 0 || title.trim() === "" ||
      body === "" || body.length <= 0 || body.trim() === "" ||
      category === "" || category.length <= 0 || category.trim() === ""
    ) {
      setCanSave(false)
    } else {
      setCanSave(true)
    }
  }, [title, body, category])
  return (
    <div className="App">
      <div className="w-full h-full min-h-screen">
        <header className="header bg-[#000]">
          <div className="nav max-w-screen-xl mx-auto w-11/12 py-4 justify-between">
            <h1 className="tw-text-center text-white text-2xl font-black font-serif">MJ's BLOG</h1>
            <button type="button" className="searchBtn text-white">버튼있어요{canSave}</button>
          </div>
          {/* navs */}
        </header>
      </div>
      {/* 네비게이션 컴포넌트 */}


    </div>
  );
}

export default App;

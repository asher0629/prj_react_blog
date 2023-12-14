import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header id="header">
          <div className="nav">
            <div className="menuButton">
              <span className="menuLine"></span>
              <span className="menuLine"></span>
              <span className="menuLine"></span>
            </div>
            {/* menuButton */}
            <h1>MJ's DEVELOP BLOG</h1>
          </div>
          {/* navs */}
          <button type="button" className="searchBtn">0</button>
        </header>

      </div>
    </div>
  );
}

export default App;

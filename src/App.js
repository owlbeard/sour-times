import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import Random from './components/Random';

function App() {
  return (
    <div className="relative flex flex-col">
      <div
        id="header"
        className="fixed 2xl:px-80 xl:px-60 lg:px-40 md:px-20 sm:px-4 pt-3 border-b border-t-4 border-t-sour border-b-sourBottomBorder w-screen"
      >
        <Header />
      </div>
      <div className="fixed flex flex-grow top-28 w-full">
        <div
          id="leftPanel"
          className="2xl:pl-80 xl:pl-60 lg:pl-40 md:pl-20 sm:pl-4 pt-8"
        >
          <Routes>
            <Route path="/" element={<LeftPanel channel="hot" />} />
            <Route path="/top" element={<LeftPanel channel="top" />} />
            <Route
              path="/problematics"
              element={<LeftPanel channel="problematics" />}
            />
            <Route path="/sports" element={<LeftPanel channel="sports" />} />
            <Route
              path="/relationships"
              element={<LeftPanel channel="relationships" />}
            />
            <Route
              path="/politics"
              element={<LeftPanel channel="politics" />}
            />
          </Routes>
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Random />}></Route>
          </Routes>
        </div>
        <div className="flex-grow w-60"></div>
      </div>
    </div>
  );
}

export default App;

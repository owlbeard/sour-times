import Header from './components/Header';
import Random from './components/Random';
import Footer from './components/Footer';
import SourThings from './components/SourThings';
import { Context } from './context/Context';
import { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import Top from './components/Top';
import Problematics from './components/Problematics';

function App() {
  const [panel, setPanel] = useState('hot');
  const data = {
    panel,
    setPanel,
  };
  return (
    <Context.Provider value={data}>
      <div className="relative flex flex-col">
        <div className="fixed 2xl:px-80 xl:px-60 lg:px-40 md:px-20 sm:px-4 pt-3 border-b border-t-4 border-t-sour border-b-sourBottomBorder w-screen z-50 bg-sourBG">
          <Header />
        </div>
        <div className="flex flex-grow top-32 w-full">
          <div
            id="headings"
            className="2xl:pl-80 xl:pl-40 lg:pl-20 md:pl-10 pt-8 fixed top-28 max-sm:hidden flex flex-col gap-6 overflow-auto pr-2 h-sourLeftHeight"
          >
            {panel === 'top' ? (
              <Top />
            ) : panel === 'problematics' ? (
              <Problematics />
            ) : (
              <LeftPanel channel={panel} />
            )}
          </div>
          <div className="mt-28 ml-sourLeft max-w-2xl">
            <Random />
          </div>
          <div className="flex-grow mt-28 ml-4 w-1/4">
            <SourThings />
          </div>
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;

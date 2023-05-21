import React, { useEffect } from 'react';
import { Context, useContext } from '../context/Context';
import Icon from '../assets/water.svg';

export default function Navbar() {
  const { panel, setPanel } = useContext(Context);
  const change = (e) => {
    setPanel(e.target.textContent.replace(/#/g, ''));
  };
  useEffect(() => {
    for (const a of document.querySelectorAll('a')) {
      if (a.textContent.includes(panel)) {
        let border = document.querySelector('.border-b-4');
        if (border) border.classList.remove('border-b-4');
        a.classList.add('border-b-4');
      }
    }
  }, [panel]);

  return (
    <div className="text-sourText text-xs font-semibold flex justify-between gap-4">
      <div className="flex justify-between pt-2 gap-4 flex-grow">
        <button
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8 pb-2"
          onClick={change}
        >
          hot
        </button>
        <button
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
          onClick={change}
        >
          top
        </button>
        <button
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
          onClick={change}
        >
          problematics
        </button>
        <button
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
          onClick={change}
        >
          #sports
        </button>
        <button
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
          onClick={change}
        >
          #relationships
        </button>
        <button
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
          onClick={change}
        >
          #politics
        </button>
      </div>
      <ul className="flex gap-5 items-center">
        <li className="flex gap-1 items-center pb-2">
          <div className="bg-red-600 rounded-full w-6 h-6">
            <img className="rotate-90" id="pena" src={Icon} alt="pena" />
          </div>
          <a href="https://www.youtube.com/penavideo" className="text-white">
            pena
          </a>
        </li>
        <li className="flex gap-1 items-center pb-2">
          <div className="rounded-full w-7 h-7">
            <img id="sour" src={Icon} alt="pena" />
          </div>
          <a href="https://eksiseyler.com/" className="text-white">
            sour things{' '}
          </a>
        </li>
      </ul>
    </div>
  );
}

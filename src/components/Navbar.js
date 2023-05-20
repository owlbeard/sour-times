import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../assets/water.svg';

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    for (const a of document.querySelectorAll('a')) {
      let locText = location.pathname.replace(/[/]/g, '');
      if (a.textContent.includes(locText) && locText !== '') {
        let border = document.querySelector('.border-b-4');
        if (border) border.classList.remove('border-b-4');
        a.classList.add('border-b-4');
      } else if (locText === '' && a.textContent.includes('hot')) {
        let border = document.querySelector('.border-b-4');
        if (border) border.classList.remove('border-b-4');
        a.classList.add('border-b-4');
      }
    }
  }, [location]);

  return (
    <div className="text-sourText text-xs font-semibold flex justify-between gap-4">
      <ul className="flex justify-between pt-2 gap-4 flex-grow">
        <Link
          to="/"
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8 pb-2"
        >
          <li>hot</li>
        </Link>
        <Link
          to="/top"
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
        >
          <li>top</li>
        </Link>
        <Link
          to="/problematics"
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
        >
          <li>problematics</li>
        </Link>
        <Link
          to="/sports"
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
        >
          <li>#sports</li>
        </Link>
        <Link
          to="/relationships"
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
        >
          <li>#relationships</li>
        </Link>
        <Link
          to="/politics"
          className="hover:border-b-4 active:border-b-4 border-b-sour px-8"
        >
          <li>#politics</li>
        </Link>
      </ul>
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

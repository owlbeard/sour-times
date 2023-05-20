import React from 'react';
import Entries from '../data/entries.json';
import User from '../data/user.json';
import UpArrow from '../assets/arrow-up.svg';
import DownArrow from '../assets/arrow-down.svg';
import IconEmpty from '../assets/water-outline.svg';
import Icon from '../assets/water.svg';
import Share from '../assets/share.svg';
import uniqid from 'uniqid';

export default function Random() {
  const paint = function (e) {
    let target = e.target;
    target.setAttribute('src', `${Icon}`);
    target.setAttribute('id', 'icon');
  };
  const undoPaint = function (e) {
    let target = e.target;
    target.setAttribute('src', `${IconEmpty}`);
    target.setAttribute('id', 'sourText');
  };
  return (
    <div>
      {Entries.map((entry) => {
        let pp = User.find((user) => {
          return user.name === entry.writer;
        });
        if (pp !== undefined) pp = pp.pp;
        return entry.entry !== '' ? (
          <div className="pl-6 pt-8" key={uniqid()}>
            <h1 className="text-xl text-sourText font-bold mb-4">
              {entry.heading}
            </h1>
            <p className="text-sourText text-sm mb-2">{entry.entry}</p>
            <div className="flex justify-between">
              <span className="flex items-center gap-4">
                <button
                  aria-label="Thanks!"
                  className="border border-sourText rounded-sm"
                >
                  <img
                    id="sourText"
                    className="h-3"
                    src={UpArrow}
                    alt="up arrow"
                  />
                </button>
                <button
                  aria-label="BOO!"
                  className="border border-sourText rounded-sm"
                >
                  <img
                    id="sourText"
                    className="h-3"
                    src={DownArrow}
                    alt="down arrow"
                  />
                </button>
                <button aria-label="Add to favorites!">
                  <img
                    id="sourText"
                    className="h-5"
                    src={IconEmpty}
                    alt="sourtimes"
                    onMouseEnter={paint}
                    onMouseLeave={undoPaint}
                  />
                </button>
                <button className="text-sm text-sourText">{entry.fav}</button>
              </span>
              <span className="flex items-center gap-1">
                <button aria-label="Share">
                  <img id="sourText" className="h-5" src={Share} alt="share" />
                </button>
                <button>...</button>
              </span>
            </div>
            <div className="flex justify-end item-center gap-2 mt-2">
              <div className="flex flex-col justify-end">
                <p className="text-right text-sour">{entry.writer}</p>
                <p>{entry.date}</p>
              </div>
              <img className="h-10 w-10 rounded-full" src={pp} alt="profile" />
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

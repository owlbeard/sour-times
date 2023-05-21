import React from 'react';
import Icon from '../assets/water.svg';
import Glasses from '../assets/glasses.svg';
import ImageOne from '../assets/vnmtFFDBTfW4stNj-638164610047203373.jpg';
import ImageTwo from '../assets/BcVcsZoAQ3mzWEIr-638163940252575479.jpg';
import ImageThree from '../assets/GNTu2sDYQvR3ZtJg-638163773962367708.jpg';

export default function SourThings() {
  return (
    <div className="mt-20 ml-4 w-72 h-72 border-t-sourThingsBorder border-t-sourThings flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 p-2 border-t border-t-sourMute">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img id="sour" className="h-6" src={Icon} alt="sourthings icon" />
              <a href="https://eksiseyler.com/kanal/tarih">
                <p className="text-xs text-sourHalfMute hover:underline">
                  HISTORY
                </p>
              </a>
            </div>
            <div className="flex item-center gap-2">
              <img id="icon" className="h-4" src={Glasses} alt="glasses icon" />
              <p className="text-sourThingsSeen text-sourHalfMute">4,5k</p>
            </div>
          </div>
          <a href="https://eksiseyler.com/piyanonun-mucidi-hakkinda-fazla-bilgi-olmayan-bartolomeo-cristoforinin-hayat-hikayesi">
            <p className="text-xs text-sourText font-semibold hover:underline">
              The Life Story of Bartolomeo Cristofori, Inventor of the Piano
            </p>
          </a>
        </div>
        <a href="https://eksiseyler.com/piyanonun-mucidi-hakkinda-fazla-bilgi-olmayan-bartolomeo-cristoforinin-hayat-hikayesi">
          <img
            className="h-sourThingsImage min-w-sourThingsImage w-sourThingsImage"
            src={ImageOne}
            alt="history"
          />
        </a>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 p-2 border-t border-t-sourMute">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img id="sour" className="h-6" src={Icon} alt="sourthings icon" />
              <a href="https://eksiseyler.com/kanal/is-hayati">
                <p className="text-xs text-sourHalfMute hover:underline">
                  BUSINESS LIFE
                </p>
              </a>
            </div>
            <div className="flex item-center gap-2">
              <img id="icon" className="h-4" src={Glasses} alt="glasses icon" />
              <p className="text-sourThingsSeen text-sourHalfMute">8,2k</p>
            </div>
          </div>
          <a href="https://eksiseyler.com/oradaki-birinden-almanya-gocmeyi-dusunen-calisanlar-icin-ne-derece-uygun-bir-ulke">
            <p className="text-xs text-sourText font-semibold hover:underline">
              From Someone There: How Good Is Germany For Employees Considering
              Immigration?
            </p>
          </a>
        </div>
        <a href="https://eksiseyler.com/oradaki-birinden-almanya-gocmeyi-dusunen-calisanlar-icin-ne-derece-uygun-bir-ulke">
          <img
            className="h-sourThingsImage min-w-sourThingsImage w-sourThingsImage"
            src={ImageTwo}
            alt="history"
          />
        </a>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 p-2 border-t border-t-sourMute">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img id="sour" className="h-6" src={Icon} alt="sourthings icon" />
              <a href="https://eksiseyler.com/kanal/kultur">
                <p className="text-xs text-sourHalfMute hover:underline">
                  CULTURE
                </p>
              </a>
            </div>
            <div className="flex item-center gap-2">
              <img id="icon" className="h-4" src={Glasses} alt="glasses icon" />
              <p className="text-sourThingsSeen text-sourHalfMute">8,2k</p>
            </div>
          </div>
          <a href="https://eksiseyler.com/kocasi-olen-hintli-kadinlarin-kendisini-kocasiyla-beraber-yakmasi-sati">
            <p className="text-xs text-sourText font-semibold hover:underline">
              Indian practice where women whose husbands died burn themselves
              alongside their deceased husbands: Sati
            </p>
          </a>
        </div>
        <a href="https://eksiseyler.com/kocasi-olen-hintli-kadinlarin-kendisini-kocasiyla-beraber-yakmasi-sati">
          <img
            className="h-sourThingsImage min-w-sourThingsImage w-sourThingsImage"
            src={ImageThree}
            alt="history"
          />
        </a>
      </div>
    </div>
  );
}

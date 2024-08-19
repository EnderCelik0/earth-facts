import { Link } from "react-router-dom";
import source from "../assets/icon-source.svg";
import { useState } from "react";

export default function Planet({
  name,
  bgHover,
  overviewContent,
  overviewSource,
  structureContent,
  structureSource,
  geologyContent,
  geologySource,
  rotation,
  revolution,
  radius,
  temperature,
  planetImage,
  internalImage,
  geologyImage,
}) {
  const [overview, setOverview] = useState(true);
  const [internal, setInternal] = useState(false);
  const [geology, setGeology] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="px-6 py-8 text-white md:px-10 lg:px-40">
      <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-y-[87px]">
        <div className="relative">
          {internal ? (
            <img src={internalImage} alt="" />
          ) : (
            <img src={planetImage} alt="" />
          )}
          {geology && (
            <img
              className="absolute -bottom-[20%] right-1/2 w-1/3 translate-x-1/2"
              src={geologyImage}
              alt=""
            />
          )}
        </div>
        <div className="flex w-full max-w-[350px] flex-col gap-8 lg:ml-auto lg:gap-10">
          <div className="flex flex-col gap-4 text-center lg:gap-6 lg:text-left">
            <h1 className="text-4xl font-antonio font-medium lg:text-antonio-lg">
              {name}
            </h1>

            {overview && (
              <>
                <p className="text-sm font-spartan lg:text-spartan-regular">
                  {overviewContent}
                </p>
                <p className="flex items-center justify-center gap-2 lg:justify-start">
                  <span className="opacity-50">Source :</span>
                  <Link to={overviewSource} className="opacity-50">
                    Wikipedia
                  </Link>
                  <img src={source} alt="" />
                </p>
              </>
            )}
            {internal && (
              <>
                <p className="text-sm font-spartan lg:text-spartan-regular">
                  {structureContent}
                </p>
                <p className="flex items-center justify-center gap-2 lg:justify-start">
                  <span className="opacity-50">Source :</span>
                  <Link to={structureSource} className="opacity-50">
                    Wikipedia
                  </Link>
                  <img src={source} alt="" />
                </p>
              </>
            )}
            {geology && (
              <>
                <p className="text-sm font-spartan lg:text-spartan-regular">
                  {geologyContent}
                </p>
                <p className="flex items-center justify-center gap-2 lg:justify-start">
                  <span className="opacity-50">Source :</span>
                  <Link to={geologySource} className="opacity-50">
                    Wikipedia
                  </Link>
                  <img src={source} alt="" />
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 text-white lg:gap-4">
            <button
              className={`flex items-center justify-between gap-4 px-5 py-2 lg:justify-start lg:px-7 lg:py-3 ${activeButton === 0 ? bgHover : "hover:bg-dark-gray"} border border-white border-opacity-20 transition-colors duration-200`}
              onClick={() => {
                setActiveButton(0);
                setOverview(true);
                if (internal) setInternal(false);
                if (geology) setGeology(false);
              }}
            >
              <span className="text-xs opacity-50 lg:text-spartan-md">01</span>
              <span className="text-xs tracking-widest font-spartan font-bold text-white lg:text-spartan-md lg:tracking-spartan-md">
                OVERVIEW
              </span>
            </button>

            <button
              className={`flex items-center justify-between gap-4 px-5 py-2 lg:justify-start lg:px-7 lg:py-3 ${activeButton === 1 ? bgHover : "hover:bg-dark-gray"} border border-white border-opacity-20 transition-colors duration-200`}
              onClick={() => {
                setInternal(true);
                setActiveButton(1);
                if (overview) setOverview(false);
                if (geology) setGeology(false);
              }}
            >
              <span className="text-xs opacity-50 lg:text-spartan-md">02</span>
              <span className="text-xs tracking-widest font-spartan font-bold text-white lg:text-spartan-md lg:tracking-spartan-md">
                INTERNAL STRUCTURE
              </span>
            </button>

            <button
              className={`flex items-center justify-between gap-4 px-5 py-2 lg:justify-start lg:px-7 lg:py-3 ${activeButton === 2 ? bgHover : "hover:bg-dark-gray"} border border-white border-opacity-20 transition-colors duration-200`}
              onClick={() => {
                setGeology(true);
                setActiveButton(2);
                if (internal) setInternal(false);
                if (overview) setOverview(false);
              }}
            >
              <span className="text-xs opacity-50 lg:text-spartan-md">03</span>
              <span className="text-xs tracking-widest font-spartan font-bold text-white lg:text-spartan-md lg:tracking-spartan-md">
                SURFACE GEOLOGY
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2 text-white sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-[30px]">
        <InfoBox infoName="ROTATION TIME" infoValue={rotation} />
        <InfoBox infoName="RADIUS" infoValue={radius} />
        <InfoBox infoName="REVOLUTION TIME" infoValue={revolution} />
        <InfoBox infoName="AVG. TEMPERATURE" infoValue={temperature} />
      </div>
    </div>
  );
}

const InfoBox = ({ infoName, infoValue }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-1 text-nowrap border border-white border-opacity-20 p-3 sm:flex-col sm:items-start sm:justify-start lg:py-4 lg:pl-3">
      <h1 className="text-xs font-spartan font-bold opacity-50 lg:text-spartan-md">
        {infoName}
      </h1>
      <p className="text-xl tracking-wide font-antonio font-medium lg:text-antonio-md lg:tracking-antonio-md">
        {infoValue}
      </p>
    </div>
  );
};

import mercury from '../assets/planet-mercury.svg'
import mercuryInternal from '../assets/planet-mercury-internal.svg'
import mercuryGeology from '../assets/geology-mercury.png'
import source from '../assets/icon-source.svg'
import { useState } from 'react';

export default function Planet() {

  const [internal ,setInternal] = useState(false)
  const [surface ,setSurface] = useState(false)

  return (
  <>

    <div className="text-white px-40 py-24 gap-60  grid place-items-center  grid-cols-2 ">
      <div className='relative'>

        {internal ? <img src={mercuryInternal} alt="" /> : <img src={mercury} alt="" />}

        {surface && <img className='absolute -bottom-[135px] right-16 w-40 ' src={mercuryGeology} alt="" />}
      </div>
      <div className='flex flex-col gap-10 px-20'>

        <div className='flex flex-col gap-6'>
          <h1 className='text-antonio-lg font-medium font-antonio'>MERCURY</h1>
          <p className='text-spartan-regular font-spartan '>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun&apos;s planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
          <p className='flex items-center gap-2'>
            <span className='opacity-50'>Source :</span> 
            <span className='opacity-50'>Wikipedia</span> 
            <img   src={source} alt="" /></p>
        </div>
        <div className='flex flex-col gap-4 text-white *:hover:bg-turquoise'>

        <button className='flex flex-start py-3 px-7 bg-turquoise gap-4 items-center '>
          <span className='opacity-50 text-spartan-md'>01</span>
          <span className='font-spartan font-bold text-spartan-md text-white tracking-spartan-md'>

          OVERVIEW
          </span>
        </button>

        <button className='flex flex-start py-3 px-7 bg-turquoise gap-4 items-center ' onClick={() => setInternal(!internal)}>
          <span className='opacity-50 text-spartan-md'>01</span>
          <span className='font-spartan font-bold text-spartan-md text-white tracking-spartan-md'>

          INTERNAL STRUCTURE
          </span>
        </button>

        <button className='flex flex-start py-3 px-7 bg-turquoise gap-4 items-center ' onClick={() => setSurface(!surface)}>
          <span className='opacity-50 text-spartan-md'>01</span>
          <span className='font-spartan font-bold text-spartan-md text-white tracking-spartan-md'>SURFACE GEOLOGY</span>
        </button>
      </div>
      </div>

      
      
    </div>

    <div className='flex justify-between w-full gap-[30px] text-white px-40'>
    <InfoBox infoName='ROTATION TIME' infoValue='58.6 DAYS'/>
    <InfoBox infoName='ROTATION TIME' infoValue='58.6 DAYS'/>
    <InfoBox infoName='ROTATION TIME' infoValue='58.6 DAYS'/>
    <InfoBox infoName='ROTATION TIME' infoValue='58.6 DAYS'/>
  </div>
  </>
  );
}

const InfoBox = ({infoName, infoValue}) => {
  return ( 
    <div className='flex flex-col gap-1 py-4 pl-3 pr-28 text-nowrap  border border-opacity-20 mb-10'>
      <h1 className='text-spartan-md font-bold opacity-50 font-spartan'>{infoName}</h1>
      <p className='text-antonio-md font-medium tracking-antonio-md font-antonio'>{infoValue}</p>
    </div>
  );
}
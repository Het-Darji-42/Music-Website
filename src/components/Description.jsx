import React from 'react'

export default function Description({ colorBg, InstrumentName, InstrumentDetails, ImageLink, SecondInstrumentName, SecondInstrumentDetails, SecondImageLink }) {
    return (
        <div style={colorBg} className='h-[200vh] w-full md:h-screen box-border text-white '>
            {/* First part */}
            <div id='FirstPart' className='h-screen  border-b-4 border-gray-800/90 backdrop-blur flex justify-center  items-center flex-col md:h-1/2 md:flex-row  gap-10 px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-24 '>

                {/* First Left : Description */}
                <div id="FirstleftDetails" className='flex flex-col gap-4 md:w-1/2'>
                    <h1 className='text-yellow-500 text-3xl font-bold lg:text-4xl'>{InstrumentName}</h1>
                    <p className='text-yellow-200 font-medium xl:text-xl'>{InstrumentDetails}</p>
                    <button className=" bg-yellow-500 active:bg-yellow-600  border-2 border-white text-black font-medium py-1 px-5 xl:px-7 text-lg xl:py-2">
                        Explore More
                    </button>
                </div>

                {/* First Right : IMAGE */}
                <div id="FirstRightDetails" className='md:w-1/2'>
                    <img src={ImageLink} alt="Instrument" className='w-full aspect-video lg:h-[300px] lg:w-[534px]' />
                </div>
            </div>

            {/* Second Part */}
            <div id='SecondPart' className='h-screen md:h-1/2 border-b-4 border-gray-800/90 backdrop-blur flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-24 '>

                {/* Second Left : IAMAGE */}
                <div id="SecondLeftLook" className='md:w-1/2'>
                    <img src={SecondImageLink} alt="Instrument" className='w-full  aspect-video lg:h-[300px] lg:w-[534px]' />
                </div>

                {/* ?Second Right : Description */}
                <div id="SecondRightLook" className='flex flex-col md:w-1/2 gap-4  '>
                    <h1 className='text-yellow-500 text-3xl font-bold lg:text-4xl'>{SecondInstrumentName}</h1>
                    <p className='text-yellow-200 font-medium xl:text-xl'>{SecondInstrumentDetails}</p>
                    <button className=" bg-yellow-500 active:bg-yellow-600  border-2 border-white text-black font-medium py-1 px-5 xl:px-7 text-lg xl:py-2">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    )
}

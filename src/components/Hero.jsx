import React from 'react'
import heroLadyImage from '../assets/hero-lady.jpg'; // Import the image

export default function Hero({ }) {
    return (
        <div className='m-0 p-0 box-border  border-b-2 border-yellow-500'>


            <div className="h-screen-minus-70 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroLadyImage})` }}>
                {/* Your content goes here */}
                <div className="flex flex-col items-start p-3 sm:p-10 px-10 sm:px-16 justify-center h-full text-white text-start  ">
                    <h1 className="bg-gray-100/15 backdrop-blur-sm  hover:border hover:border-white   rounded-lg p-2 text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-sans  sm:p-3 md:p-4 lg:p-4 xl:p-5 2xl:p-5 ">Music , What's that ?</h1>

                    <p className="bg-white/15 backdrop-blur-sm rounded-lg p-5 md:text-xl lg:text-3xl mb-8 w-[250px] sm:w-[400px] md:w-[500p] lg:w-[600px]">Music can have a profound effect on your emotions and body, and can help you find peace of mind</p>

                    <div className='flex  justify-center  gap-4 xl:spacing-x-10 '>
                        <button className="bg-yellow-500 active:bg-yellow-600  border-2 border-gray-400 text-black font-bold py-3 px-5 xl:px-7 text-xl  rounded-lg ">
                            Sign-Up
                        </button>
                        <button className="bg-yellow-500 active:bg-yellow-600  border-2 border-gray-400 text-black font-bold py-3 px-5 xl:px-7 text-xl  rounded-lg ">
                            Log-In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

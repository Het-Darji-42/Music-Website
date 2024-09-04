import React from 'react';

export default function InstrumentCard({ ImageOfCard }) {
    return (
        <div className='bg-black text-white '>
            {/* Search main div */}
            <div className='flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center bg-yellow-600 py-3 rounded-b-lg  px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28'>
                {/* Left - Heading */}
                <h1 className='text- text-3xl font-bold'>Instrument</h1>

                {/* Right - Search Form */}
                <form className="flex w-full max-w-sm items-center">
                    <label htmlFor="default-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 10.65a6.4 6.4 0 1 1 1.91-1.9 6.4 6.4 0 0 1-1.9 1.9z"></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-yellow-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search Instruments"
                            required
                        />
                        <button
                            type="submit"
                            className="text-black border-2 border-yellow-500 absolute right-2.5 bottom-2.5 bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[6px]"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {/* Cards Container */}
            <div id="cardsContainer" className='flex flex-wrap justify-around gap-6 bg-black py-6'>
                {/* Card Item */}
                {Array(9).fill(0).map((_, index) => (
                    <div key={index} className='p-4 max-w-sm w-full'>
                        <div className='rounded-xl bg-gray-900 overflow-hidden border border-yellow-500 shadow-lg'>
                            <img
                                src={ImageOfCard}
                                alt="instrument"
                                className='w-full rounded-b-3xl border-b border-b-white'
                            />
                            <div className='px-6 py-4'>
                                <h1 className='font-bold text-2xl mb-2 text-yellow-500'>Bass-Guitar</h1>
                                <p className='text-white'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error quidem dicta facilis. Excepturi voluptatum voluptas distinctio consectetur repellat pariatur tenetur odit praesentium quaerat mollitia magnam, delectus vel illum fuga.
                                </p>
                            </div>
                            <div className='flex justify-center pb-4 px-6'>
                                <button className='rounded-sm bg-yellow-500 py-2 px-4 mt-3 text-lg font-semibold'>Explore More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

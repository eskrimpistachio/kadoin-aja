import React from 'react';
import LineMask2 from "./img/linemask2.svg" ;

const Product = () => {
    return (
    <>
        <div className="bg-black flex flex-row">
            <img src={LineMask2}></img>

            <div className= "bg-black absolute z-40 my-20 py-20 px-8 w-full">
                <p className='font-logoFont text-white text-6xl text-center'>Having a hard time <span className='text-brandpink-300'>Choosing a gift?</span></p>
                <p className='font-primaryFont text-white text-3xl text-center my-10'>Fill this and we’ll do it for you!</p>

                <div className='flex flex-row bg-brandpink-100 rounded-[10px] justify-around py-2'>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>For Who?</label>
                        <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                            <option>

                            </option>
                        </select>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>Whats the occasion?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>Whats their characteristic?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>How old are they?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>
                        

                    <div className='flex flex-col my-2'>
                        <label for="who" className='text-xl font-logoFont'>How much is your budget?</label>
                            <select name='who' className='mt-4 py-1 bg-customGray-200 rounded-[10px]'>
                                <option>

                                </option>
                            </select>
                    </div>

                </div>

                <button className='text-white font-primaryFont px-10 py-4 bg-brandpink-300  hover:text-brandpink-300 hover:bg-white rounded-[10px] mt-4 '>
                    Search
                </button>
            </div>
        </div> 
    </> 
    
    );
}
export default Product;